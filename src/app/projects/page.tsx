import ProjectSteps, { Project } from "@/components/project-steps";

const projects: Project[] = [
  {
    title: "LC-3b μArchitecture Simulator",
    technologies: ["golang", "comp-arch"],
    shortDescription:
      "A cycle-accurate LC-3b microarchitecture simulator written in Go.",
    yearWorked: "2026",
    linkToBlog: "",
    description: (
      <p>
        This project is a cycle-accurate LC-3b microarchitecture simulator
        implemented in Go that models the full multicycle datapath and
        microcoded control unit, including the control store, microsequencer,
        register file, ALU, and memory system. <br />
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
    shortDescription: "",
    yearWorked: "2023",
    linkToBlog: "",
    description: (
      <p>
        A stunning mountain landscape captured at sunrise. The peaks are
        illuminated by the golden light of the morning sun.
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
        className="max-md:hidden h-full"
      />
    </div>
  );
}
