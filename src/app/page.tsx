import { CodeBlock } from "@/components/animate-ui/primitives/animate/code-block";

export default function Home() {
  const introductionCode = `[2mStarting session…[0m
[1;32mConnected.[0m

[1;97mHi, I’m [1;36mHarris[0m[1;97m![0m
[2mI build and operate systems both [36mclose to the metal[0m [2mand up in the [34mcloud[0m[2m.[0m

[2;90m---------------------------------[0m

[1;97mWhat I do[0m
[32m▸[0m I work on [37mproduction infrastructure[0m and [37minternal tooling[0m
[32m▸[0m I automate away [37moperational toil[0m
[32m▸[0m I like understanding systems [37mend-to-end[0m

[2;90m---------------------------------[0m

[1;97mProduction Experience[0m
[35m▸[0m Operated and debugged [37mLinux systems[0m in production
[35m▸[0m Built [37mmonitoring[0m and [37mstatus tooling[0m for live services
[35m▸[0m Automated [37mfailure-prone workflows[0m to reduce toil
[35m▸[0m Diagnosed issues across [37mapplication[0m and [37mOS boundaries[0m

[2;90m---------------------------------[0m

[1;97mWhat I’ve built[0m
[33m▸[0m An [1;33mIPMI-over-LAN[0m client in [1;33mRust[0m, written from scratch
[33m▸[0m Simulated [1;33mmulti-cycle CPU microarchitecture[0m (LC-3b ISA)
[33m▸[0m Tools to manage and monitor [1;33mphysical servers[0m

[2;90m---------------------------------[0m

[1;97mTechnologies[0m
[34m▸[0m [1;34mLanguages[0m: Python, Go, TypeScript, Rust
[34m▸[0m [1;34mSystems[0m: Linux (RHEL-family), Azure
[34m▸[0m [1;34mInfra[0m: Azure VMs, CI/CD, Infrastructure as Code
[34m▸[0m [1;34mInterfaces[0m: REST APIs, networking fundamentals

[2;90m---------------------------------[0m

[1;97mWhat I’m working on these days[0m
[36m▸[0m Studying [1;36mcomputer architecture[0m from first principles
[36m▸[0m Learning [1;36moperating systems internals[0m and scheduling
[36m▸[0m Going deeper on [1;36mnetworking[0m and [1;36mpacket-level behavior[0m
[36m▸[0m Strengthening [1;36mLinux debugging[0m skills
[36m▸[0m Using [1;36mGo[0m more deeply for systems and tooling work

[2;90m---------------------------------[0m

[2mIf this sounds interesting, check out my [1;37mprojects[0m or [1;37mblog 
where I document what I've learned[0m.[0m
`;
  return (
    <div>
      <CodeBlock
        className="ml-2 mt-1"
        code={introductionCode}
        lang="ansi"
        duration={5000}
        writing={true}
      />
    </div>
  );
}
