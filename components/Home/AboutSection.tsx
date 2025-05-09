"use client";

import React from "react";
import { Terminal, Coffee, Heart, Zap } from "lucide-react";
import { useLayoutStore } from "@/store/layoutStore";

const values = [
  {
    title: "detail-oriented",
    description: "A pixel-perfect approach to everything I do.",
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
    color: "blue-400",
  },
  {
    title: "problem solver",
    description: "Turning complex problems into elegant solutions.",
    icon: <Coffee className="w-6 h-6 text-green-500" />,
    color: "green-500",
  },
  {
    title: "user-focused",
    description: "Creating intuitive experiences for everyone.",
    icon: <Heart className="w-6 h-6 text-red-500" />,
    color: "red-500",
  },
  {
    title: "fast learner",
    description: "Adapting to new tech and best practices.",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    color: "yellow-500",
  },
];

export function AboutSection() {
  const { sidebarOpen } = useLayoutStore();

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`col-span-2 lg:col-span-1 space-y-6 content-center ${
              sidebarOpen ? "lg:col-span-2 xl:col-span-1" : ""
            }`}
          >
            <h2 className="text-3xl font-semibold mb-6 text-gray-200 tracking-wide">
              so... who am i?
            </h2>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              I&apos;m a passionate developer with over 5 years of experience in
              building software applications. My journey in tech started with a
              curiosity about how things work, which evolved into a career in
              creating elegant solutions for complex problems.
            </p>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or making
              music with my friends from high school.
            </p>
          </div>

          <div
            className={`col-span-2 grid grid-cols-2 lg:col-span-1 gap-4 lg:pl-4 ${
              sidebarOpen ? "lg:col-span-2 xl:col-span-1 lg:pl-0" : ""
            }`}
          >
            {values.map((value, index) => (
              <div
                key={index}
                className={`transition-colors p-4 bg-grey rounded-lg border border-grey-l hover:border-blue-400`}
              >
                <div className="mb-3">{value.icon}</div>
                <h3 className={`font-semibold text-${value.color} mb-1`}>
                  {value.title}
                </h3>
                <p className="text-base text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
