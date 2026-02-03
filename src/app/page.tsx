import TerminalPlayer from "./player";

export default function Home() {

  return (
    <div className="flex h-screen w-screen bg-[#0b0e14] justify-center items-center">
      <main className="h-screen max-h-3/4 w-screen max-w-7xl flex items-center justify-center py-16 px-16 ">
        <div className="grid grid-cols-10 h-3/4 w-full gap-4">
          <div className={`col-span-2 border border-gray-500 px-4 py-2`}>
            hello
          </div>
          <div className="grid grid-rows-10 flex-col col-span-8 grow gap-4">
            <div className="row-span-1 flex border border-gray-500 items-center px-4 py-2">Harris Temuri</div>
            <div className="row-span-9 border border-gray-500 grow w-full">
              <TerminalPlayer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
