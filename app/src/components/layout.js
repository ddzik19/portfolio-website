import useWindowDimensions from "../hooks/use-window-dimensions";

const Layout = ({ children }) => {
  const { width, height } = useWindowDimensions();

  return <div className="mx-[10%] lg:mx-[10%]">{children}</div>;
};

export default Layout;
