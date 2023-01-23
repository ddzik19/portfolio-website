import useWindowDimensions from "../hooks/use-window-dimensions";

const CompanyTemplate = ({ companyName, website, date, desc }) => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      {width > 1280 ? (
        <div className="flex bg-secondary rounded-xl p-6">
          <div className="inline w-[300px] border-r-[2px] border-yellow">
            <a
              href={website}
              className="underline font-semibold text-white text-[20px] hover:text-yellow float-top"
            >
              {companyName}
            </a>
            <p>{date}</p>
          </div>
          <div className="inline px-10 py-1 w-full">{desc}</div>
        </div>
      ) : (
        <div>
          <div className=" w-[300px] border-b-[2px] border-yellow">
            <a
              href={website}
              className="underline font-semibold text-white text-[20px] hover:text-yellow float-top"
            >
              {companyName}
            </a>
            <p>{date}</p>
          </div>
          <div className="inline px-10 py-1 w-full">{desc}</div>
        </div>
      )}
    </>
  );
};

export default CompanyTemplate;
