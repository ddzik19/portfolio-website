import useWindowDimensions from "../hooks/use-window-dimensions";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      {width > 768 ? (
        <Fade right duration={1500}>
          <div className="right-0 fixed py-5 text-center font-semibold mr-5">
            <hr className="mx-auto mt-[-20px] w-[1px] h-[150px] bg-white" />
            <div className="p-5">
              <a href="#home" className="hover:text-mint">
                Home
              </a>
            </div>
            <div className="p-5">
              <a href="#my-work" className="hover:text-mint">
                My Work
              </a>
            </div>
            <div className="p-5">
              <a href="#contact" className="hover:text-mint">
                Contact
              </a>
            </div>
          </div>
        </Fade>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
