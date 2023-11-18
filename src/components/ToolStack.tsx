import { useIcons } from "@/context/IconContext";
const ToolStack = () => {
  const { toolTech }: any = useIcons();
  return (
    <div className="w-full md:w-[80%] xl:w-[60%] flex flex-wrap justify-center gap-x-14 gap-y-9">
      {toolTech.map((icon: any) => (
        <div className="w-full max-w-[100px] justify-center ">
          <img
            src={icon.img}
            className={`${icon.type === "round" ? "rounded-[10rem]" : ""} ${
              icon.back === "black" ? "bg-black" : ""
            } h-auto w-full max-h-[100px]`}
          />
          <p className="h-fit w-full text-center">{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ToolStack;
