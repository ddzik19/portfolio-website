import useWindowDimensions from "../hooks/use-window-dimensions";
import Fade from "react-reveal/Fade";
import CV from '../assets/Damian_Dzik_CV.pdf'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'

const Navbar = () => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      {width > 768 ? (
        <Fade right duration={1500}>
          <div className="grid grid-cols-1 gap-10 right-0 fixed py-5 text-center font-semibold mr-5 text-[20px]">
            <hr className="mx-auto mt-[-20px] w-[1px] h-[150px] bg-white" />
            <a href="#home" className="hover:text-yellow">
              Home
            </a>
            <a href="#my-work" className="hover:text-yellow">
              My Work
            </a>
            <a
              href="#contact-form"
              className="hover:text-yellow"
            >
              Contact Me
            </a>
            <a
              href={CV}
              target="_blank"
              className="rounded-lg font-semibold border-[2px] border-yellow hover:bg-yellow hover:text-black p-2 transition-all" rel="noreferrer"
            >
              CV
            </a>

          </div>
        </Fade>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
