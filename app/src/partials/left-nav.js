import { BsLinkedin, BsGithub } from "react-icons/bs";
import useWindowDimensions from "../hooks/use-window-dimensions";
import Fade from "react-reveal/Fade";

const LeftNav = () => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      {width > 768 ? (
        <Fade left distance="500%" duration={1500}>
          <div className="fixed bottom-0 left-0 ml-20">
            <a
              href="https://www.linkedin.com/in/damian-dzik-35b8b41b9/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin
                size={30}
                className="ml-[-14px] my-4 hover:text-yellow"
              />
            </a>
            <a
              href="https://github.com/ddzik19?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub
                size={30}
                className="ml-[-14px] my-4 hover:text-yellow"
              />
            </a>
            <hr className="w-[1px] h-[150px] bg-white mt-10" />
          </div>
        </Fade>
      ) : (
        <></>
      )}
    </>
  );
};

export default LeftNav;
