import { useIcons } from "@/context/IconContext";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
const BackStack = () => {
  const { backTech }: any = useIcons();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="w-full md:w-[80%] xl:w-[60%] flex flex-wrap justify-center gap-x-14 gap-y-9"
      ref={ref}
    >
      {backTech.map((icon: any) => (
        <span
          key={icon.id}
          style={{
            transform: isInView ? "none" : "translateX(-300px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}
        >
          <div className="w-full max-w-[100px] justify-center ">
            <Image
              src={icon.img}
              width={100}
              height={100}
              alt={`${icon.name} logo`}
              className={`${icon.type === "round" ? "rounded-[10rem]" : ""} ${
                icon.back === "black" ? "bg-black" : ""
              }mx-auto h-auto w-auto max-h-[60px] md:max-h-[100px]`}
            />
            <p className="pt-3 h-fit w-full text-center ">{icon.name}</p>
          </div>
        </span>
      ))}
    </div>
  );
};

export default BackStack;
