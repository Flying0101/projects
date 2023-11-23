'use client'
import React, { createContext, useState, useContext } from "react";

// Create the context
const ProjectContext = createContext({});

const fullProjects = [
  {
    id: "1",
    name: "BoT LoreBook",
    information:
      "A fully custom web solution using the best NextJs has to offer from static pages to API routes, manage data and more directly from the cms.",
    netapp: "https://lore.bookoftravels.com/",
    img: "/lore.png",
    date: "Nov 1, 2023",
    type: 'Custom'
  },

  {
    id: "2",
    name: "BookOfTravels",
    information:
      "A fully custom website with the ability to change part of the website however you wish, manage data and more directly from the cms.",
    netapp: "https://www.mightanddelight.com/book-of-travels",
    img: "/BoT.png",
    date: "May 30, 2023",
    type: 'Custom'
  },

  {
    id: "3",
    name: "Might & Delight",
    information:
      "A custom simple website styled with Mantine, optmizied for performance. This site also has the ability to manage data and more directly from the cms.",
    netapp: "https://www.mightanddelight.com/",
    img: "/main.png",
    date: "Jan 8, 2023",
    type: 'Custom'
  },

];


const frontProjects = [
  {
    id: "1",
    name: "Consultant website",
    information:
      "I do freelancing on my freetime, this is my personal consultant website made with UX in mind and developed with Nextjs, Mantine and typescript.",
    netapp: "https://www.sm-dev.se/",
    img: "/consult-page.png",
    date: "Oct 17, 2023",
    type: 'Custom'
  },

  {
    id: "2",
    name: "Ecom Store",
    information:
      "This was my last project from school, this project is on standby at the moment but will be brought to life again soon to be a fully functional ecom store.",
    netapp: "https://watch-ecom-project.netlify.app/",
    img: "/watch.png",
    date: "Dec 20, 2022",
    type: 'Custom'
  },

  {
    id: "3",
    name: "Track app",
    information:
      "This was a project made for fun, make a task and track your performance, goal was to make it as simple as possible with vanilla css and React.",
    netapp: "https://www.mightanddelight.com/",
    img: "/todoapp.png",
    date: "june 6, 2023",
    type: 'Custom'
  },

];

export const ProjectContextProvider = ({ children }: any) => {

  return (
    <ProjectContext.Provider value={{ fullProjects, frontProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};


export const useProjects = () => {
  return useContext(ProjectContext)
}
