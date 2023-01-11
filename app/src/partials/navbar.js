import useWindowDimensions from "../hooks/use-window-dimensions";

const Navbar = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className="mx-[80px] pb-[100px]">
      {width > 768 ? (
        <div className="w-full py-5 text-right font-semibold">
          <div className="inline p-5">
            <a href="#home" className="hover:text-[#96e6be]">
              Home
            </a>
          </div>
          <div className="inline p-5">
            <a href="#my-work" className="hover:text-[#96e6be]">
              My Work
            </a>
          </div>
          <div className="inline p-5">
            <a href="#-contact" className="hover:text-[#96e6be]">
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
