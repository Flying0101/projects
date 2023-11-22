"use client";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mobileNavigation = () => {
    setOpenMobile(!openMobile);
  };

  const { scrollYProgress } = useScroll();
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 max-w-[1800px] mx-auto transition-all ease-in duration-300 ${
        scrollPosition > 0
          ? "bg-white border-b-[1px] border-secondary"
          : "bg-transparent"
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-10 w-auto" src="/sm-logo.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => mobileNavigation()}
            type="button"
            className={`${
              openMobile ? "opacity-0" : "opacity-100"
            }  -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700`}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="/404"
            className="text-sm font-semibold leading-6 border-b-transparent border-b-2 text-gray-900 hover:border-b-2 transition-all ease-linear duration-100 hover:border-secondary"
          >
            Blog
          </a>
          <a
            href="#project"
            className="text-sm font-semibold leading-6 text-gray-900 hover:border-b-2 transition-all ease-linear duration-100 hover:border-secondary"
          >
            Projects
          </a>
          <a
            href="#tech"
            className="text-sm font-semibold leading-6 text-gray-900 hover:border-b-2 transition-all ease-linear duration-100 hover:border-secondary"
          >
            Techstack
          </a>
        </div>
      </nav>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="relative bg-secondary h-[2px] origin-[0%}"
      />
      <div
        className={`${
          openMobile ? "block" : "hidden"
        } transition-all ease-in duration-300 lg:hidden `}
        role="dialog"
        aria-modal="false"
      >
        <div className="fixed inset-y-0 right-0  w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="/sm-logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => mobileNavigation()}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className={`${openMobile ? "block" : "hidden"} mt-6 flow-root`}>
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className={` space-y-2 py-6`}>
                <a
                  onClick={() => mobileNavigation()}
                  href="/404"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
                <a
                  onClick={() => mobileNavigation()}
                  href="#project"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Projects
                </a>
                <a
                  onClick={() => mobileNavigation()}
                  href="#tech"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Techstack
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
