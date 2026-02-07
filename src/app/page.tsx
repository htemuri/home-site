"use client";

import { CodeBlock } from "@/components/animate-ui/primitives/animate/code-block";
import { Slide } from "@/components/animate-ui/primitives/effects/slide";
import { useState } from "react";

export default function Home() {
  const [showWhoami, setShowWhoami] = useState(false);

  const introductionCode = `[2mStarting session…[0m
[1;32mConnected.[0m

[1m[1;32m$[0m whoami[0m

`;
  const whoami = `Hi, I’m [1;36mHarris[0m![0m

I tend to approach engineering as a long process of learning rather than a fixed skill set. I’m most interested in computer science fundamentals - the ideas and mechanisms that stay useful even as tools, technologies, and roles change.

That focus has shaped how I think about systems, how I approach new problems, and how I adapt to different kinds of work over time.

Please feel free to check out my experience in working as a contractor at the CDC in the [1;36mCareer[0m tab, and if you're still interested, check out my more systems-focused solo projects that I've worked on in the [1;36mProjects[0m tab.

Thanks for visiting!

[38;5;214m  |\\__/,|[0m   [38;5;214m(\`\\[0m
[38;5;214m_.|[32mo[0m [32mo[0m  [38;5;214m|_[0m   [38;5;214m) )[0m
[38;5;239m---------------------[0m
`;

  return (
    <div className="flex flex-col ml-2 pt-3 gap-1">
      <CodeBlock
        code={introductionCode}
        lang="ansi"
        duration={5000}
        writing={true}
        onDone={() => {
          setTimeout(() => setShowWhoami(true), 200);
        }}
      />
      {showWhoami && (
        <Slide>
          <CodeBlock code={whoami} lang="ansi" />
        </Slide>
      )}
    </div>
  );
}
