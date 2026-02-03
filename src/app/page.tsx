import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TerminalPlayer from "./player";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronRightIcon, GithubIcon, LinkedinIcon, MountainSnowIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <div className="flex h-screen w-screen bg-[#0b0e14] justify-center items-center">
      <main className="h-screen max-h-3/4 w-screen max-w-7xl flex items-center justify-center py-16 px-16 ">
        <div className="grid grid-cols-10 h-3/4 w-full gap-4">
          <div className={`col-span-2 border border-gray-500 px-4 py-2 hover:border-orange-300`}>
            hello
          </div>
          <div className="grid grid-rows-10 flex-col col-span-8 grow gap-4">
            <div className="hover:border-orange-300 row-span-1 flex border border-gray-500 items-center pl-2 pr-4 py-2 gap-6">
              <div className="flex gap-1 items-center">
                {/* <Avatar>
                  <AvatarImage src={"https://avatars.githubusercontent.com/u/51043768?v=4"} alt="@harristemuri" className="" />
                  <AvatarFallback>HT</AvatarFallback>
                </Avatar> */}
                <ChevronRightIcon width={20} />
                <code className="text-md cursor-default text-cyan-600 dark:text-cyan-300 mt-0.5">Harris Temuri - Platform Engineer</code>
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
                  <Link href={"https://htemuri.github.io/0xBADC0DE/"} target="_blank" className="font-semibold text-cyan-600 dark:text-cyan-300">0xBADC0DE</Link>
                  <div>Blog where I document the things I've learned.</div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    <iframe src="https://htemuri.github.io/0xBADC0DE/" width="350px" height="400px" ></iframe>
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
                <Image src={"/github.svg"} alt="github icon" className="p-0 m-0" width={20} height={20} />
              </Link>
              {/* </Button> */}
            </div>
            <div className="hover:border-orange-300 row-span-9 border border-gray-500 grow w-full">
              <TerminalPlayer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
