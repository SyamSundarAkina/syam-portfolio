"use client";

import { useEffect, useRef } from "react";

// Page-wide background: a drifting graph of nodes where "agent" nodes pass messages
// (pulses) along edges, like a multi-agent system at work. Links reach toward the cursor.
type Node = { x: number; y: number; vx: number; vy: number; r: number; agent: boolean; flash: number };
type Pulse = { a: number; b: number; t: number; speed: number; hops: number };

const LINK = 150; // max edge length in px
const ACCENT = "125, 211, 252";

export default function AgentNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, dpr = 1;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let raf = 0, last = performance.now(), spawnIn = 0;
    const pointer = { x: -9999, y: -9999 };

    const seed = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(26, Math.min(72, Math.round((W * H) / 21000)));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 0.9 + 0.8,
        agent: i % 8 === 0,
        flash: 0,
      }));
      pulses = [];
    };

    const neighbours = (i: number) => {
      const out: number[] = [];
      const n = nodes[i];
      for (let j = 0; j < nodes.length; j++) {
        if (j === i) continue;
        const dx = nodes[j].x - n.x, dy = nodes[j].y - n.y;
        if (dx * dx + dy * dy < LINK * LINK) out.push(j);
      }
      return out;
    };

    const send = (from: number, hops: number) => {
      const nb = neighbours(from);
      if (!nb.length || pulses.length > 28) return;
      pulses.push({ a: from, b: nb[(Math.random() * nb.length) | 0], t: 0, speed: 0.6 + Math.random() * 0.5, hops });
    };

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, W, H);

      // move
      for (const n of nodes) {
        n.x += n.vx * dt * 0.06;
        n.y += n.vy * dt * 0.06;
        if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
        n.flash = Math.max(0, n.flash - dt / 900);
      }

      // edges
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 > LINK * LINK) continue;
          const alpha = (1 - Math.sqrt(d2) / LINK) * 0.11;
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        // cursor links
        const px = a.x - pointer.x, py = a.y - pointer.y, p2 = px * px + py * py;
        if (p2 < 190 * 190) {
          ctx.strokeStyle = `rgba(${ACCENT},${(1 - Math.sqrt(p2) / 190) * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }

      // nodes
      for (const n of nodes) {
        const glow = n.flash;
        ctx.fillStyle = n.agent || glow > 0 ? `rgba(${ACCENT},${0.5 + glow * 0.5})` : "rgba(255,255,255,0.35)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.agent ? n.r + 1.2 : n.r, 0, Math.PI * 2);
        ctx.fill();
        if (n.agent) {
          ctx.strokeStyle = `rgba(${ACCENT},${0.18 + glow * 0.4})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 7 + glow * 6, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // pulses (messages between agents)
      for (const p of pulses) {
        p.t += (dt / 1000) * p.speed;
        const a = nodes[p.a], b = nodes[p.b];
        const t = Math.min(p.t, 1);
        const x = a.x + (b.x - a.x) * t, y = a.y + (b.y - a.y) * t;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 7);
        g.addColorStop(0, `rgba(${ACCENT},0.9)`);
        g.addColorStop(1, `rgba(${ACCENT},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fill();
      }
      const arrived = pulses.filter((p) => p.t >= 1);
      pulses = pulses.filter((p) => p.t < 1);
      for (const p of arrived) {
        nodes[p.b].flash = 1;
        if (p.hops > 0 && Math.random() < 0.75) send(p.b, p.hops - 1);
      }
    };

    const tick = (now: number) => {
      // reduced motion: same network, half the speed
      const dt = Math.min(now - last, 50) * (reduce ? 0.5 : 1);
      last = now;
      spawnIn -= dt;
      if (spawnIn <= 0) {
        const agents = nodes.map((n, i) => (n.agent ? i : -1)).filter((i) => i >= 0);
        if (agents.length) send(agents[(Math.random() * agents.length) | 0], 3);
        spawnIn = 650 + Math.random() * 700;
      }
      draw(dt);
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onLeave = () => {
      pointer.x = pointer.y = -9999;
    };
    // parallax: the graph drifts a little with the page as you scroll
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const dy = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      if (!reduce) for (const n of nodes) n.y -= dy * 0.12;
    };
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(raf) : start());
    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        seed();
        start();
      }, 150);
    };

    seed();
    start();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 opacity-80" aria-hidden="true" />;
}
