import useWindowDimensions from "../hooks/use-window-dimensions";

const Navbar = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className="mx-[80px]">
      {width > 768 ? (
        <div className="float-right py-5 bg-gray-600 text-center font-semibold">
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
