"use client";
import { useProjects } from "@/context/ProjectContext";
import Link from "next/link";
const ProjectOne = () => {
  const { fullProjects }: any = useProjects();

  return (
    <section id="project">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Full-Stack Projects
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Check my work of web solutions connected to headless cms.
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img
              src="/stephano-melo.png"
              alt=""
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Stephano Melo
                </a>
              </p>
              <p className="text-gray-600">Frontend Developer / 2 year +</p>
            </div>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {fullProjects.map((file: any) => (
              <article
                className="flex max-w-xl flex-col items-start justify-between px-3 py-6 rounded-md shadow-xl"
                key={file.id}
              >
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      {file.date}
                    </time>
                    <a
                      className="relative z-10 rounded-full mb-2 bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {file.type}
                    </a>
                  </div>
                  <div>
                    <img src={file.img} alt="project" />
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a >
                      <span className="absolute inset-0"></span>
                      {file.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {file.information}
                  </p>
                  <br/>
                  <a
                      href={`${file.netapp}`}
                      target="_blank"
                      className="relative z-10 rounded-full bg-lighterSecondary px-3 py-1.5 font-medium text-gray-50 hover:bg-secondary"
                    >
                      Try it out
                    </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOne;
