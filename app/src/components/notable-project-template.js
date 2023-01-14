import { Subheading } from "./subheading";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const NotableProjectTemplate = ({
  title,
  desc,
  fileHref,
  githubHref,
  technology,
}) => {
  return (
    <div className="w-full pb-10">
      <div className="bg-secondary rounded-xl p-4 2xl:p-10">
        <Subheading>{title}</Subheading>
        <p>{desc}</p>
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
            target="_blank" rel="noreferrer"
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
            target="_blank" rel="noreferrer"
          >
            <FiExternalLink size={25} className="inline" />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default NotableProjectTemplate;
