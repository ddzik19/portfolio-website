import useWindowDimensions from "../hooks/use-window-dimensions";
import Fade from "react-reveal/Fade";
import CV from "../assets/Damian_Dzik_CV.pdf";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { width, height } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  let burgerClass = "";

  if (isOpen) {
    burgerClass = "block";
  } else {
    burgerClass = "hidden";
  }

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
            <a href="#contact-form" className="hover:text-yellow">
              Contact Me
            </a>
            <a
              href={CV}
              target="_blank"
              className="rounded-lg font-semibold border-[2px] border-yellow hover:bg-yellow hover:text-black p-2 transition-all"
              rel="noreferrer"
            >
              CV
            </a>
          </div>
        </Fade>
      ) : (
        <Fade right duration={1500}>
          <div
            className={`${burgerClass} pt-[45%] right-0 w-fit h-full bg-[#191022] z-10 px-10 fixed text-center text-[25px] font-semibold`}
          >
            <a href="#home" className="hover:text-yellow block my-5">
              Home
            </a>
            <a href="#my-work" className="hover:text-yellow block my-5">
              My Work
            </a>
            <a href="#contact-form" className="hover:text-yellow block my-5">
              Contact Me
            </a>
            <a
              href={CV}
              target="_blank"
              className="block w-[100px] mx-auto rounded-lg font-semibold border-[2px] border-yellow hover:bg-yellow hover:text-black p-2 transition-all"
              rel="noreferrer"
            >
              CV
            </a>
          </div>
          <div className="fixed p-5 fixed right-0 z-10">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </Fade>
      )}
    </>
  );
};

export default Navbar;
