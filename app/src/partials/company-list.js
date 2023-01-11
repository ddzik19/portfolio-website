import OmniproLogo from "../assets/Omnipro_Logo.jpg";
import { useEffect, useState } from "react";

const CompanyList = () => {
  const { companyName, setCompanyName } = useState();

  return (
    <div className="padding grid grid-cols-[150px_200px]">
      <div className="">
        <button className="block border-l-2 border-mint px-5 py-2">
          Omnipro
        </button>
      </div>
      <div className="py-2"></div>
    </div>
  );
};

export default CompanyList;
