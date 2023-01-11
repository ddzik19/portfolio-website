import { BsLinkedin, BsGithub } from "react-icons/bs";
import useWindowDimensions from "../hooks/use-window-dimensions";
const LeftNav = () => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      {width > 768 ? (
        <div className="fixed bottom-0 left-0 ml-20">
          <a href="https://www.linkedin.com/in/damian-dzik-35b8b41b9/">
            <BsLinkedin
              size={30}
              className="ml-[-14px] my-4 hover:text-[#96e6be]"
            />
          </a>
          <a href="https://github.com/ddzik19?tab=repositories">
            <BsGithub
              size={30}
              className="ml-[-14px] my-4 hover:text-[#96e6be]"
            />
          </a>
          <hr className="w-[1px] h-[150px] bg-white" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LeftNav;
