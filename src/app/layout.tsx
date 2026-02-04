import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import { cn } from "@/lib/utils";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Harris Temuri",
  description: "Homepage of Harris Temuri's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const gridGap = "gap-4"

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {/* <GravityStarsBackground className={`transition ease-in delay-500 duration-3000 h-screen overflow-y-clip bg-[#0d1017] z-2`} starsCount={80} /> */}
          <div className="bg-[#0d1017] h-screen z-2" />
          <div className="flex h-screen max-h-screen w-screen justify-center items-center absolute top-0 left-0 overflow-clip">
            <main className="max-h-screen w-screen max-w-7xl py-15 px-16">
              <div className={cn("grid grid-rows-10", gridGap)}>
                <NavBar className="row-span-1 z-3" />
                <div className={cn("grid grid-cols-10 row-span-9", gridGap)}>
                  <SideBar className="col-span-2 z-3" />
                  <div className="col-span-8 h-200 max-h-fit z-3 overflow-y-auto bg-[#0d1017] border border-gray-500 hover:border-teal-300">
                    {children}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
