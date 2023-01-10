import useWindowDimensions from "../hooks/use-window-dimensions";

const Layout = ({ children }) => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      {width > 768 ? (
        <div className="mx-[20%] bg-gray-500">{children}</div>
      ) : (
        <div className="">{children}</div>
      )}
    </>
  );
};

export default Layout;
