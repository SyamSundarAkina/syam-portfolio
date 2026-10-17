// Faint, slowly scrolling lines of agent code used as texture behind the hero and contact.
const LEFT = [
  "from agents import Planner, Retriever, Reviewer",
  "",
  "planner = Planner(model=llm, tools=[search, sql])",
  "plan = planner.run(task)",
  "",
  "for step in plan.steps:",
  "    docs = retriever.search(step.query, k=8)",
  "    result = executor.call(step.tool, docs)",
  "    memory.append(result)",
  "",
  "answer = llm.generate(context=memory)",
  "assert schema.validate(answer)",
  "",
  "if needs_review(answer):",
  "    await human.approve(answer)",
  "",
  "emb = encoder.embed(chunks)",
  "index = faiss.IndexFlatIP(dim)",
  "index.add(emb)",
];

const RIGHT = [
  "@tool",
  "def classify(email: Email) -> Label:",
  '    """Route an incoming request."""',
  "    out = agent.invoke(email, schema=Label)",
  "    return guardrails.check(out)",
  "",
  "model = get_peft_model(base, LoraConfig(r=16))",
  "trainer.train()",
  "",
  "scores = evaluate(model, ground_truth)",
  "print(scores.accuracy, scores.f1)",
  "",
  "X_train, X_test = split(features)",
  "clf = XGBClassifier().fit(X_train, y)",
  "",
  "graph = StateGraph(AgentState)",
  'graph.add_edge("retrieve", "generate")',
  "app = graph.compile()",
];

function Column({ lines, className }: { lines: string[]; className: string }) {
  const block = [...lines, "", ...lines];
  return (
    <div className={`code-col pointer-events-none absolute top-0 h-full overflow-hidden ${className}`} aria-hidden="true">
      <pre className="code-scroll font-mono text-[10px] leading-[1.9] text-white/[0.05] lg:text-[11px] lg:text-white/[0.07]">
        {block.map((l, i) => (
          <span key={i} className={`block ${l.startsWith("@") || l.startsWith("def") || l.startsWith("from") ? "text-accent/20" : ""}`}>
            {l || " "}
          </span>
        ))}
      </pre>
    </div>
  );
}

export default function CodeStream() {
  return (
    <>
      {/* phones: one faint full-width column; desktop: a column on each side */}
      <Column lines={LEFT} className="left-0 w-full px-4 lg:left-[2%] lg:w-[26rem] lg:px-0" />
      <Column lines={RIGHT} className="right-[2%] hidden w-[24rem] lg:block [&_.code-scroll]:[animation-direction:reverse]" />
    </>
  );
}
