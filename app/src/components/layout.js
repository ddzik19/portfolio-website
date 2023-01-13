import useWindowDimensions from "../hooks/use-window-dimensions";

const Layout = ({ children }) => {
  const { width, height } = useWindowDimensions();

  return <div className="mx-[5%]  md:mx-[25%]">{children}</div>;
};

export default Layout;
