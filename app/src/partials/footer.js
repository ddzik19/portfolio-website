import Fade from "react-reveal/Fade";
import useWindowDimensions from "../hooks/use-window-dimensions";
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
  const { width, height } = useWindowDimensions()

  return (
    <>
      {width > 768 ? (
        <div className="text-center pt-[200px] pb-[50px]">
          &copy; Damian Dzik 2023
        </div>
      ) : (
        <>
          <div className="flex pt-[200px]">
            <Fade bottom distance="10%" duration={1500}>
              <div className="mx-auto flex mb-5">
                <a href="https://www.linkedin.com/in/damian-dzik-35b8b41b9/" className="inline px-2" target="_blank" rel="noreferrer">
                  <BsLinkedin
                    size={30}
                    className="hover:text-yellow"
                  />
                </a>
                <a href="https://github.com/ddzik19?tab=repositories" className="inline px-2" target="_blank" rel="noreferrer">
                  <BsGithub
                    size={30}
                    className="hover:text-yellow"
                  />
                </a>
              </div>
            </Fade>
          </div>
          <div className="text-center pb-[50px]">
            &copy; Damian Dzik 2023
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
