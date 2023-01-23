import useWindowDimensions from "../hooks/use-window-dimensions";

const CompanyTemplate = ({ companyName, website, date, desc }) => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      {width > 1280 ? (
        <div className="flex bg-secondary rounded-xl p-6">
          <div className="inline w-[300px] pr-1 border-r-[2px] border-yellow">
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
        <div className="bg-secondary p-10 rounded-xl">
          <div className="w-fit pb-1 border-b-[2px] border-yellow">
            <a
              href={website}
              className="underline font-semibold text-white text-[20px] hover:text-yellow float-top"
            >
              {companyName}
            </a>
            <p>{date}</p>
          </div>
          <div className="block py-1 w-fit ">{desc}</div>
        </div>
      )}
    </>
  );
};

export default CompanyTemplate;
