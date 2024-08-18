"use client";
import React, { createContext, useState, useContext } from "react";

// Create the context
const IconContext = createContext({});

export const IconContextProvider = ({ children }: any) => {
  const frontTech = [
    {
      id: "1",
      name: "NextJs",
      img: "/nextjs.png",
      type: "round",
      back: "black",
    },
    {
      id: "2",
      name: "Typescript",
      img: "/ts-icon.png",
      type: "square",
      back: "white",
    },
    {
      id: "3",
      name: "Javascript",
      img: "/JS-icon.png",
      type: "square",
      back: "white",
    },
    {
      id: "4",
      name: "ReactJs",
      img: "/reactjs.png",
      type: "square",
      back: "white",
    },
    ,
    {
      id: "5",
      name: "Tailwind",
      img: "/tailwind.png",
      type: "square",
      back: "white",
    },
    {
      id: "6",
      name: "Mantine",
      img: "/mantine.png",
      type: "round",
      back: "white",
    },
    {
      id: "7",
      name: "HTML",
      img: "/html-icon.png",
      type: "square",
      back: "white",
    },
    {
      id: "8",
      name: "CSS",
      img: "/css-icon.png",
      type: "square",
      back: "white",
    },
  ];

  const backTech = [
    {
      id: "1",
      name: "NodeJs",
      img: "/nodejs-icon.png",
      type: "square",
      back: "white",
    },
    {
      id: "2",
      name: "Jest",
      img: "/jest-icon.png",
      type: "square",
      back: "white",
    },
    {
      id: "3",
      name: "GraphQL",
      img: "/graphql.png",
      type: "square",
      back: "white",
    },
  ];

  const toolTech = [
    {
      id: "1",
      name: "GIT",
      img: "/git-icon.png",
      type: "square",
      back: "white",
    },
    {
      id: "2",
      name: "Github",
      img: "/github-icon.png",
      type: "round",
      back: "white",
    },
    {
      id: "3",
      name: "Vercel",
      img: "/vercel.png",
      type: "round",
      back: "white",
    },
    {
      id: "4",
      name: "Jira",
      img: "/jira-icon.png",
      type: "square",
      back: "white",
    },
    {
      id: "5",
      name: "Figma",
      img: "/figma-logo.png",
      type: "square",
      back: "white",
    }
  ];
  return (
    <IconContext.Provider value={{ frontTech, backTech, toolTech }}>
      {children}
    </IconContext.Provider>
  );
};

export const useIcons = () => {
  return useContext(IconContext);
};
