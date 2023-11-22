"use client";
import { useState } from "react";
import FrontStack from "./FrontStack";
import BackStack from "./BackStack";
import ToolStack from "./ToolStack";
import { useRef } from "react";
import { useInView } from "framer-motion";
const TechStack = () => {
  const [stack, setStack] = useState("frontend");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const test = (kindof: string) => {
    setStack(kindof);
  };

  return (
    <section
    id="tech"
      className="w-full mx-auto max-w-7xl px-6 lg:px-8 min-h-[500px] "
      ref={ref}
    >
      <span
        style={{
          transform: isInView ? "none" : "translateX(-300px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <h1 className="w-full text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          My Expertise
        </h1>
        <nav className="flex justify-center" aria-label="tabs">
          <p
            onClick={() => test("frontend")}
            className={`ml-5 mr-5 font-medium leading-5 py-4 px-1  border-b-2 whitespace-nowrap hover:border-y-gray-300 ${
              stack === "frontend" ? "border-secondary" : "border-transparent"
            } cursor-pointer`}
          >
            Frontend
          </p>
          <p
            onClick={() => test("backend")}
            className={`ml-5 mr-5 font-medium leading-5 py-4 px-1 border-b-2 whitespace-nowrap hover:border-y-gray-300 ${
              stack === "backend" ? "border-secondary" : "border-transparent"
            } cursor-pointer`}
          >
            Backend
          </p>
          <p
            onClick={() => test("tool")}
            className={`ml-5 mr-5 font-medium leading-5 py-4 px-1 border-b-2 whitespace-nowrap hover:border-y-gray-300 ${
              stack === "tool" ? "border-secondary" : "border-transparent"
            } cursor-pointer`}
          >
            Tools
          </p>
        </nav>
        <div className="w-full  border-t border-gray-200 pt-10 flex justify-center ">
          {stack === "frontend" && <FrontStack />}
          {stack === "backend" && <BackStack />}
          {stack === "tool" && <ToolStack />}
        </div>
      </span>
    </section>
  );
};

export default TechStack;
