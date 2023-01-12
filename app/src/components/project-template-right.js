import { BsGithub, BsFolderFill } from "react-icons/bs";
import Placeholder from "../assets/banner-redimensionat.jpg";
import useWindowDimensions from "../hooks/use-window-dimensions";

const ProjectTempalteRight = ({ githubHref, fileHref, title, desc, image }) => {
  const { width, height } = useWindowDimensions();
  return (
    <div className="grid grid-cols-2 pt-20">
      <div className=" w-[400px] h-fit mt-[50px] ml-[120px] z-10">
        <div className="bg-bluestone rounded-lg p-4">
          <p className="font-semibold text-mint text-[20px]">{title}</p>
          <p className="text-[14px]">{desc}</p>
        </div>
        <div className="pt-4">
          {githubHref ? (
            <a
              href={githubHref}
              className="mr-4 hover:text-mint hover:cursor-pointer"
            >
              <BsGithub size={25} className="inline" />
            </a>
          ) : (
            <></>
          )}
          {fileHref ? (
            <a
              href={fileHref}
              className="mr-4 hover:text-mint hover:cursor-pointer"
            >
              <BsFolderFill size={25} className="inline" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="bg-black w-[500px] ml-[-40px] filter grayscale hover:filter-none transition-all">
        <img className="rounded-lg" src={Placeholder} alt="" />
      </div>
    </div>
  );
};

export default ProjectTempalteRight;
