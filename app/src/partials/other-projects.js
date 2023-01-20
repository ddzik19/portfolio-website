import useWindowDimensions from "../hooks/use-window-dimensions";
import Fade from "react-reveal/Fade";
import NotableProjectTemplate from "../components/notable-project-template";
import { Header } from "../components/header";
import { NotableProjects } from "../database/notable-projects";

const OtherProjects = () => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      {width > 1280 ? (
        <div className="pb-[300px]">
          <Header>Other Projects</Header>
          <br />
          <div className="grid grid-cols-2 gap-4 lg:gap-[100px]">
            {NotableProjects.map((value, key) => {
              return (
                <Fade bottom distance="10%" duration={1500}>
                  <NotableProjectTemplate
                    key={key}
                    title={value.title}
                    desc={value.desc}
                    githubHref={value.githubHref}
                    fileHref={value.fileHref}
                    technology={value.technology}
                  />
                </Fade>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="padding mobile-margin">
          <Header>Other Projects</Header>
          <br />
          <div className="grid grid-cols-1">
            {NotableProjects.map((value, key) => {
              return (
                <Fade bottom distance="10%" duration={1500}>
                  <NotableProjectTemplate
                    key={key}
                    title={value.title}
                    desc={value.desc}
                    githubHref={value.githubHref}
                    fileHref={value.fileHref}
                    technology={value.technology}
                  />
                </Fade>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default OtherProjects;
