import useWindowDimensions from "../hooks/use-window-dimensions";

const Layout = ({ children }) => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      {width > 768 ? (
        <div className="mx-[25%] z-1">{children}</div>
      ) : (
        <div className="mx-[10%] z-1">{children}</div>
      )}
    </>
  );
};

export default Layout;
