'use client'
import React, { createContext, useState, useContext } from "react";

// Create the context
const ProjectContext = createContext({});

const fullProjects = [
  {
    id: "1",
    name: "BoT LoreBook",
    information:
      "A fully custom web solution with the ability to change part of the website however you wish, manage data and more directly from the cms.",
    netapp: "https://lore.bookoftravels.com/",
    img: "/lore.png",
    date: "Nov 1, 2023",
    type: 'Custom'
  },

  {
    id: "2",
    name: "BookOfTravels",
    information:
      "A fully custom web solution with the ability to change part of the website however you wish, manage data and more directly from the cms.",
    netapp: "https://www.mightanddelight.com/book-of-travels",
    img: "/BoT.png",
    date: "May 30, 2023",
    type: 'Custom'
  },

  {
    id: "3",
    name: "Might & Delight",
    information:
      "A fully custom web solution with the ability to change part of the website however you wish, manage data and more directly from the cms.",
    netapp: "https://www.mightanddelight.com/",
    img: "/main.png",
    date: "Jan 8, 2023",
    type: 'Custom'
  },

];

export const ProjectContextProvider = ({ children }: any) => {
  const [value, setValue] = useState(true); // Your initial context value

  return (
    <ProjectContext.Provider value={{ value, setValue, fullProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};


export const useProjects = () => {
  return useContext(ProjectContext)
}
