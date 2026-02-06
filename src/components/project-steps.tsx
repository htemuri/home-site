"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slide } from "./animate-ui/primitives/effects/slide";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export interface Project {
  title: string;
  yearWorked: string;
  technologies: string[];
  shortDescription: string;
  description: React.JSX.Element;
  linkToBlog: string;
  image: string;
}

interface ProjectStepsProps {
  projects: Project[];
  autoPlayInterval?: number;
}

export default function ProjectSteps({
  projects,
  className,
  autoPlayInterval = 3000,
}: React.ComponentProps<"div"> & ProjectStepsProps) {
  const [currentProject, setCurrentProject] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setProgressKey((prev) => prev + 1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, currentProject, projects.length]); // Reset timer when currentProject changes

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row w-full md:items-stretch max-w-[1440px] mx-auto",
        className,
      )}
    >
      {/* Left Column: Project List */}
      <div className="flex flex-col w-full md:w-1/2 border border-black/10 dark:border-white/10 divide-y divide-black/10 dark:divide-white/10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            layoutId={project.title}
            onClick={() => {
              setCurrentProject(index);
              setProgressKey((prev) => prev + 1);
            }}
            className={cn(
              "flex-col p-4 md:p-5 relative cursor-default",
              index !== currentProject &&
                "cursor-pointer hover:border-gray-500",
            )}
          >
            <div className="flex flex-col gap-2">
              <div className="flex">
                <h3 className="text-base md:text-lg leading-none text-black dark:text-white">
                  {project.title}
                </h3>
                <div className="grow" />
                <p className="text-neutral-500">{project.yearWorked}</p>
              </div>
              <p className="my-2 text-sm  text-neutral-500">
                {project.shortDescription}
              </p>
              <div className="flex gap-2">
                {project.technologies.map((tech) => {
                  return (
                    <Badge key={`${project.title}-${tech}`} variant={"outline"}>
                      {tech}
                    </Badge>
                  );
                })}
              </div>
            </div>
            {index === currentProject && (
              <motion.div
                key={progressKey}
                className="absolute h-[1px] bottom-0 left-0 bg-black dark:bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: autoPlayInterval / 1000,
                  ease: "linear",
                }}
              />
            )}
          </motion.div>
        ))}
        <div className="grow" />
      </div>

      {/* Right Column: Details */}
      <div
        className={
          "w-full h-full md:w-3/4 border border-black/10 dark:border-white/10 md:border-l-0 border-t-0 md:border-t relative p-4 md:p-5 overflow-hidden"
        }
      >
        <Slide asChild>
          <Card className="">
            <CardHeader>
              <CardTitle>{projects[currentProject].title}</CardTitle>
              <CardDescription className="flex gap-2 mt-2">
                {projects[currentProject].technologies.map((tech) => {
                  return (
                    <Badge
                      key={`${projects[currentProject].title}-card-${tech}`}
                      variant={"outline"}
                    >
                      {tech}
                    </Badge>
                  );
                })}
              </CardDescription>
              <CardAction className="text-neutral-400">
                Year(s) worked:{" "}
                <span className="text-white">
                  {projects[currentProject].yearWorked}
                </span>
              </CardAction>
            </CardHeader>
            <CardContent className="text-pretty text-neutral-400">
              {projects[currentProject].description}
            </CardContent>
            <CardFooter className="border-t">
              <Button
                className="w-full hover:cursor-pointer"
                variant={"outline"}
                onClick={() => {
                  router.push(projects[currentProject].linkToBlog);
                }}
              >
                Read more at{" "}
                <code className="text-cyan-300 mt-0.5">0xBADC0DE</code>
              </Button>
            </CardFooter>
          </Card>
        </Slide>
      </div>
    </div>
  );
}
