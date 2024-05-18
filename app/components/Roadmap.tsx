export default function Roadmap() {
  const roadmapData = [
    { quarter: "Q1 2024", milestones: ["Initial Launch", "Milestone 2"] },
    { quarter: "Q2 2024", milestones: ["Feature Expansion", "Milestone 2"] },
    { quarter: "Q3 2024", milestones: ["Community Building", "Milestone 2"] },
    {
      quarter: "Q4 2024",
      milestones: ["Full Decentralization", "Milestone 2"],
    },
  ];

  return (
    <section id="roadmap" className="p-8 md:p-16">
      <code className="text-lg sm:text-2xl text-green-500 font-mono">
        {"Roadmap/"}
        <br />
        {"│"}
        <br />
        {"├── Q1-2024/"}
        <br />
        <p>
          {"│"} <span className="ml-8 sm:ml-20">{"├── Initial-Launch"}</span>
        </p>
        <p>
          {"│"} <span className="ml-8 sm:ml-20">{"└── Milestone-2"}</span>
        </p>
        {"├── Q2-2024/"}
        <br />
        <p>
          {"│"} <span className="ml-4 sm:ml-20">{"├── Feature-Expansion"}</span>
        </p>
        <p>
          {"│"} <span className="ml-4 sm:ml-20">{"└── Milestone-2"}</span>
        </p>
        {"├── Q3-2024/"}
        <br />
        <p>
          {"│"}{" "}
          <span className="ml-4 sm:ml-20">{"├── Community-Building"}</span>
        </p>
        <p>
          {"│"} <span className="ml-4 sm:ml-20">{"└── Milestone-2"}</span>
        </p>
        {"└── Q4-2024/"}
        <br />
        <p>
          <span className="ml-8 sm:ml-24">{"├── Full-Decentralization"}</span>
        </p>
        <p>
          <span className="ml-8 sm:ml-24">{"└── Milestone-2"}</span>
        </p>
        <br />
      </code>
    </section>
  );
}
