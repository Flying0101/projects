"use client";
import scrollTo from "@/utils/ScrollTo";
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadowx m-4 mt-24">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse hover:cursor-pointer">
            <img
              src="/sm-logo.png"
              className="h-8"
              alt="SM Logo"
              onClick={() => scrollTo("hero")}
            />
            <span
              className="self-center text-2xl font-semibold"
              onClick={() => scrollTo("project")}
            >
              Project Portfolio{" "}
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0">
            <li>
              <a href="/404" className="hover:underline me-4 md:me-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#project" className="hover:underline me-4 md:me-6">
                Projects
              </a>
            </li>
            <li>
              <a href="#tech" className="hover:underline me-4 md:me-6">
                Techstack
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-900 sm:text-center">
          © 2024 <p className="hover:underline">Stephano Melo</p>All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
