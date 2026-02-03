import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TerminalPlayer from "./player";
import Link from "next/link";
import Image from "next/image";
import { LinkedinIcon, MountainSnowIcon } from "lucide-react";

export default function Home() {

  return (
    <div className="flex h-screen w-screen bg-[#0b0e14] justify-center items-center">
      <main className="h-screen max-h-3/4 w-screen max-w-7xl flex items-center justify-center py-16 px-16 ">
        <div className="grid grid-cols-10 h-3/4 w-full gap-4">
          <div className={`col-span-2 border border-gray-500 px-4 py-2 hover:border-orange-300`}>
            hello
          </div>
          <div className="grid grid-rows-10 flex-col col-span-8 grow gap-4">
            <div className="hover:border-orange-300 row-span-1 flex border border-gray-500 items-center px-4 py-2 gap-5">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={"https://avatars.githubusercontent.com/u/51043768?v=4"} alt="@harristemuri" className="" />
                  <AvatarFallback>HT</AvatarFallback>
                </Avatar>
                <code className="text-md cursor-default text-cyan-600 dark:text-cyan-300 mt-1.5">Harris Temuri - Platform Engineer</code>
              </div>
              <div className="grow" />
              <Link href={"https://htemuri.github.io/0xBADC0DE/"} target="_blank">
                <MountainSnowIcon width={20} className="ml-1" />
              </Link>
              <Link href={"https://linkedin.com/in/harris-temuri"} target="_blank">
                <LinkedinIcon width={20} className="ml-1" />
              </Link>
              <Link href={"https://github.com/htemuri"} target="_blank">
                <Image src={"/github.svg"} alt="github icon" width={20} height={20} />
              </Link>
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
