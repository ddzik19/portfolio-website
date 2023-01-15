import { Header } from "../components/header";
import Fade from 'react-reveal/Fade'
import CompanyTemplate from "../components/company-template";
import { Companies } from "../database/companies";

const CompanyList = () => {
  return (
    <div className="padding">
      <Fade bottom distance="10%" duration={1500}>
        <Header>Places I've Worked</Header>
      </Fade>
      <div className="pt-10">
        {Companies.map((value, index) => {
          return (
            <Fade bottom distance="10%" duration={1500}>
              <CompanyTemplate key={index} companyName={value.companyName} website={value.website} date={value.date} desc={value.desc} />
            </Fade>
          )
        })}
      </div>
    </div>
  );
};

export default CompanyList;
