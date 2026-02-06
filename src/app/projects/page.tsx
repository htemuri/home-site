import ProjectSteps, { Project } from "@/components/project-steps";

const projects: Project[] = [
  {
    title: "LC-3b μArchitecture Simulator",
    technologies: ["golang", "comp-arch"],
    shortDescription:
      "A cycle-accurate LC-3b microarchitecture simulator written in Go.",
    yearWorked: "2026",
    linkToBlog: "",
    linkToRepo: "https://github.com/htemuri/lc-3b-sim",
    description: (
      <p>
        This project is a cycle-accurate LC-3b microarchitecture simulator
        implemented in Go that models the full multicycle datapath and
        microcoded control unit, including the control store, microsequencer,
        register file, ALU, and memory system.
        <br />
        <br />
        The simulator executes LC-3b machine code directly, advancing one
        microstate per clock tick with a clear separation between combinational
        logic and state updates to closely mirror real hardware behavior and
        enable detailed architectural experimentation and debugging.
      </p>
    ),
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop",
  },
  {
    title: "rust-ipmi",
    technologies: ["rust", "networking"],
    shortDescription:
      "A from-scratch Rust implementation of the IPMI RMCP+ protocol, focused on low-level packet handling, authentication, and reliable communication with BMCs.",
    yearWorked: "2023",
    linkToBlog: "",
    linkToRepo: "https://github.com/htemuri/rust-ipmi",
    description: (
      <p>
        This project is a from-scratch Rust implementation of the IPMI RMCP+
        protocol, designed to communicate directly with Baseboard Management
        Controllers (BMCs) at the packet level. It implements message
        formatting, session establishment, authentication, and command handling
        without relying on existing IPMI libraries, emphasizing protocol
        correctness, safety, and clarity.
        <br />
        <br />
        The project serves both as a practical tool for systems work and as a
        deep dive into network protocols, embedded management interfaces, and
        robust Rust systems programming.
      </p>
    ),
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
    <div className="h-full">
      <ProjectSteps
        projects={projects}
        autoPlayInterval={15000}
        className=" h-full overflow-y-scroll"
      />
    </div>
  );
}
