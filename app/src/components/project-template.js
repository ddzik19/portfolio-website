/* eslint-disable jsx-a11y/img-redundant-alt */
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Subheading } from "./subheading";
import useWindowDimensions from "../hooks/use-window-dimensions";
import { Fade } from "react-reveal";

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
      {width > 1920 ? (
        <Fade bottom distance="10%" duration={1500}>
          <div className="flex pb-[500px] mx-auto">
            <img
              className="inline rounded-xl w-[800px] h-fit filter grayscale hover:filter-none transition-all hover:shadow-[0_0px_80px_-15px_rgb(255,251,0)]"
              src={image}
              alt="Picture of project"
            />
            <div className="inline w-[500px] z-10">
              <div className="p-4 rounded-lg shadow-lg bg-secondary h-fit ">
                <Subheading>{title}</Subheading>
                <p className="text-[14px]">{desc}</p>
                <ul className="text-yellow pt-4 text-[14px]">
                  {technology.map((value, key) => {
                    return (
                      <li key={key} className="inline-block py-2 px-4">
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
                    <BsGithub size={25} className="inline-block" />
                  </a>
                ) : (
                  <></>
                )}
                {fileHref ? (
                  <a
                    href={fileHref}
                    className="mr-4 hover:text-yellow hover:cursor-pointer"
                  >
                    <FiExternalLink size={25} className="inline-block" />
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </Fade>
      ) : width > 600 ? (
        <Fade bottom distance="10%" duration={1500}>
          <div className="flex pb-[100px]">
            <img
              className="rounded-xl absolute w-[800px] h-fit filter grayscale hover:filter-none transition-all hover:shadow-[0_0px_80px_-15px_rgb(255,251,0)]"
              src={image}
              alt="Picture of project"
            />
            <div className="mx-auto mt-[250px] w-[400px] h-fit z-10">
              <div className="p-4 rounded-lg shadow-lg bg-secondary">
                <Subheading>{title}</Subheading>
                <p className="text-[14px]">{desc}</p>
                <ul className="text-yellow pt-4 text-[14px]">
                  {technology.map((value, key) => {
                    return (
                      <li key={key} className="inline-block py-2 px-4">
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
                    <BsGithub size={25} className="inline-block" />
                  </a>
                ) : (
                  <></>
                )}
                {fileHref ? (
                  <a
                    href={fileHref}
                    className="mr-4 hover:text-yellow hover:cursor-pointer"
                  >
                    <FiExternalLink size={25} className="inline-block" />
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </Fade>
      ) : (
        <Fade bottom distance="10%" duration={1500}>
          <div className="w-fit h-fit z-10 pb-[100px]">
            <div className="p-4 rounded-lg shadow-lg bg-secondary">
              <Subheading>{title}</Subheading>
              <p className="text-[14px]">{desc}</p>
              <ul className="text-yellow pt-4 text-[14px]">
                {technology.map((value, key) => {
                  return (
                    <li key={key} className="inline-block py-2 px-4">
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
                  <BsGithub size={25} className="inline-block" />
                </a>
              ) : (
                <></>
              )}
              {fileHref ? (
                <a
                  href={fileHref}
                  className="mr-4 hover:text-yellow hover:cursor-pointer"
                >
                  <FiExternalLink size={25} className="inline-block" />
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </Fade>
      )}
    </>
  );
};

export default ProjectTemplate;
