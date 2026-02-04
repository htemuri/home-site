'use client'

import Link from "next/link";
import { ChevronRightIcon, LinkedinIcon, MountainSnowIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CodeBlock } from "@/components/animate-ui/primitives/animate/code-block";
import React, { useState } from "react";
import GithubIcon from "./github-icon";

export default function Home() {
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <>
      {/* <GravityStarsBackground className={`transition ease-in delay-500 duration-3000 h-screen overflow-y-clip bg-[#0d1017] z-2`} starsCount={80} /> */}
      <div className="bg-[#0d1017] h-screen z-2" />
      {/* <BubbleBackground className="absolute inset-0 flex items-center justify-center rounded-xl" /> */}
      <div className="flex h-screen max-h-screen w-screen justify-center items-center absolute top-0 left-0 overflow-clip">
        <main className="h-screen max-h-screen w-screen max-w-7xl flex items-center justify-center py-8 px-16">
          <div className="grid grid-cols-10 max-h-3/4 w-full gap-4   ">
            <div className={`col-span-2 border hover:border-rose-300 border-gray-500 px-4 py-2 bg-[#0d1017] z-3`}>
              hello
            </div>
            <div className="grid grid-rows-10 flex-col col-span-8 grow gap-4">
              <div className="hover:border-orange-300 border-gray-500 row-span-1 flex border items-center pl-2 pr-4 py-2 gap-6 z-3 bg-[#0d1017]">
                <div className="flex gap-1 items-center">
                  <ChevronRightIcon width={20} />
                  <CodeBlock code={`[1;32mHarris Temuri[0m - Platform Engineer`} lang="ansi" className="mt-0.5" writing={true} duration={2000} />
                  {/* <code className="text-md cursor-default text-lime-600 dark:text-lime-300 mt-0.5">Harris Temuri - Platform Engineer</code> */}
                </div>
                <div className="grow" />
                <HoverCard openDelay={10} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <button >
                      <Link href={"https://htemuri.github.io/0xBADC0DE/"} target="_blank">
                        <MountainSnowIcon width={20} />
                      </Link>
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent className="flex w-96 flex-col gap-0.5">
                    <Link href={"https://htemuri.github.io/0xBADC0DE/"} target="_blank" className="font-semibold text-cyan-600 dark:text-cyan-300"><code>0xBADC0DE</code></Link>
                    <div>Blog where I document the things I've learned.</div>
                    <div className="text-muted-foreground mt-2 text-xs">
                      <iframe src="https://htemuri.github.io/0xBADC0DE/" loading="lazy" width="350px" height="400px" ></iframe>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                {/* <Button asChild variant={"ghost"} className="pl-1"> */}
                <Link href={"https://linkedin.com/in/harris-temuri"} target="_blank">
                  <LinkedinIcon width={20} className="" />
                </Link>
                {/* </Button> */}
                {/* <Button asChild variant={"ghost"}> */}
                <Link href={"https://github.com/htemuri"} target="_blank">
                  {/* <GithubIcon width={25} /> */}
                  <GithubIcon className="p-0 m-0 w-5" />
                </Link>
                {/* </Button> */}
              </div>
              <div ref={scrollContainerRef} className="hover:border-teal-300 h-200 max-h-fit row-span-9 z-3 bg-[#0d1017] border overflow-y-auto border-gray-500 grow w-full">
                <CodeBlock className="ml-2 mt-1" code={`[2mStarting session…[0m
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

`}
                  lang="ansi" duration={1000} writing={true} scrollContainerRef={scrollContainerRef} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
