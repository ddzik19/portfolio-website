import OmniproLogo from "../assets/Omnipro_Logo.jpg";

const CompanyList = () => {
  const companies = [
    {
      logo: OmniproLogo,
      href: "https://omnipro.ie/",
      alt: "Omnipro logo",
    },
  ];

  return (
    <div className="padding">
      <div className="inline-block px-10">
        <button className="border-l-2 border-mint">
          <p className="text-center">Omnipro</p>
        </button>
        <button className="border-l-2 border-mint">
          <p className="text-center">Omnipro</p>
        </button>
        <button className="border-l-2 border-mint">
          <p className="text-center">Omnipro</p>
        </button>
      </div>
      <div className="inline-block">hello</div>
    </div>
  );
};

export default CompanyList;
