/* eslint-disable jsx-a11y/img-redundant-alt */
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Subheading } from "./subheading";
import useWindowDimensions from "../hooks/use-window-dimensions";

const ProjectTemplate = ({
  githubHref,
  fileHref,
  title,
  desc,
  image,
  technology,
}) => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      {width > 600 ? (
        <div className="flex pb-[100px]">
          <img
            className="rounded-xl absolute w-[800px] h-fit filter grayscale hover:filter-none transition-all hover:shadow-[0_0px_80px_-15px_rgb(255,251,0)]"
            src={image}
            alt="Picture of project"
          />
          <div className="mx-auto lg:ml-[25%] mt-[250px] w-[400px] h-fit z-10">
            <div className="p-4 rounded-lg shadow-lg bg-secondary">
              <Subheading>{title}</Subheading>
              <p className="text-[14px]">{desc}</p>
              <ul className="text-yellow pt-4 text-[14px]">
                {technology.map((value, key) => {
                  return (
                    <li key={key} className="inline px-4">
                      {value}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="py-2">
              {githubHref ? (
                <a
                  href={githubHref}
                  className="mr-4 hover:text-yellow hover:cursor-pointer"
                >
                  <BsGithub size={25} className="inline" />
                </a>
              ) : (
                <></>
              )}
              {fileHref ? (
                <a
                  href={fileHref}
                  className="mr-4 hover:text-yellow hover:cursor-pointer"
                >
                  <FiExternalLink size={25} className="inline" />
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mx-auto lg:ml-[25%] mt-[100px] w-[400px] h-fit z-10">
            <div className="p-4 rounded-lg shadow-lg bg-secondary">
              <Subheading>{title}</Subheading>
              <p className="text-[14px]">{desc}</p>
              <ul className="text-yellow pt-4 text-[14px]">
                {technology.map((value, key) => {
                  return (
                    <li key={key} className="inline px-4">
                      {value}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="py-2">
              {githubHref ? (
                <a
                  href={githubHref}
                  className="mr-4 hover:text-yellow hover:cursor-pointer"
                >
                  <BsGithub size={25} className="inline" />
                </a>
              ) : (
                <></>
              )}
              {fileHref ? (
                <a
                  href={fileHref}
                  className="mr-4 hover:text-yellow hover:cursor-pointer"
                >
                  <FiExternalLink size={25} className="inline" />
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectTemplate;
