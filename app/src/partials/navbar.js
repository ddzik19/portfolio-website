import useWindowDimensions from "../hooks/use-window-dimensions";

const Navbar = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className="mx-[80px]">
      {width > 768 ? (
        <div className="w-full py-5 bg-gray-600 text-right font-semibold">
          <div className="inline p-5">
            <a href="#home" className="hover:text-[#FF00E5]">
              Home
            </a>
          </div>
          <div className="inline p-5">
            <a href="#my-work" className="hover:text-[#FF00E5]">
              My Work
            </a>
          </div>
          <div className="inline p-5">
            <a href="#-contact" className="hover:text-[#FF00E5]">
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