'use client'
import React, { createContext, useContext } from "react";

const ProjectContext = createContext({});

const fullProjects = [
  {
    id: "1",
    name: "BoT LoreBook",
    information:
      "Web app for the game Book of Travels, loaded with an search function to find all the lore in the game. Explore dynamic routes, App router, SSR, Tailwind and more.",
    netapp: "https://lore.bookoftravels.com/",
    img: "/lore.png",
    date: "Nov 1, 2023",
    type: 'DatoCMS'
  },

  {
    id: "2",
    name: "BookOfTravels",
    information:
      "Website for the game Book of Travels, explore some of the features and news of the game. Developed with NextJs, Tailwind and more.",
    netapp: "https://www.mightanddelight.com/book-of-travels",
    img: "/BoT.png",
    date: "May 30, 2023",
    type: 'DatoCMS'
  },

  {
    id: "3",
    name: "Might & Delight",
    information:
      "Main website for the company Might & Delight, explore the different games and news. Developed with NextJs, Mantine, DATOcms and more.",
    netapp: "https://www.mightanddelight.com/",
    img: "/main.png",
    date: "Jan 30, 2023",
    type: 'DatoCMS'
  },

];


const frontProjects = [
  {
    id: "1",
    name: "Ecom Store",
    information:
      "Developed with NextJs, App router, dynamic routes and more of next features, styled with Tailwind. Watches are my passion so I made a store for it..",
    netapp: "https://watch-ecom.netlify.app/",
    img: "/watch.png",
    date: "May 23, 2024",
    type: 'NextJs'
  },
  {
    id: "2",
    name: "Landing Page",
    information:
      "Back when i did freelancing, this was my personal consultant website made with UX in mind and developed with Nextjs and Mantine..",
    netapp: "https://www.sm-dev.se/",
    img: "/consult-page.png",
    date: "Apr 22, 2024",
    type: 'NextJs'
  },
  {
    id: "3",
    name: "Angular Event Timer",
    information:
      "Simple event timer made with Angular, I wanted to learn the basics of Angular so I made this project. Developed with Typescript and data is stored in local storage, try it out..",
    netapp: "https://angular-frontend-challenge.netlify.app/",
    img: "/angular.png",
    date: "June 10, 2024",
    type: 'Angular / Hobby'
  }
  

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
