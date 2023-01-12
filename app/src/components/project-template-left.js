import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const ProjectTempalteLeft = ({
  githubHref,
  fileHref,
  title,
  desc,
  image,
  technology,
}) => {
  return (
    <div className="grid grid-cols-2 pt-20">
      <div className="bg-black w-[500px] ml-[40px] h-fit filter grayscale hover:filter-none transition-all">
        <img className="rounded-lg" src={image} alt="" />
      </div>
      <div className=" w-[400px] h-fit mt-[50px] ml-[-20px] z-10">
        <div className="bg-bluestone rounded-lg p-4">
          <p className="font-semibold text-mint text-[20px]">{title}</p>
          <p className="text-[14px]">{desc}</p>
          <ul className=" text-mint pt-4 text-[14px]">
            {technology.map((value, key) => {
              return <li className="inline px-4">{value}</li>;
            })}
          </ul>
        </div>
        <div className="pt-2">
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
              <FiExternalLink size={25} className="inline" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTempalteLeft;
