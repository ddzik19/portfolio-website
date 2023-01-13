import useWindowDimensions from "../hooks/use-window-dimensions";
import Fade from "react-reveal/Fade";
import NotableProjectTemplate from "../components/notable-project-template";
import { Header } from "../components/header";
import List from "../database/notable-projects.json";
const OtherProjects = () => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      {width > 500 ? (
        <>
          <Header>Other Projects</Header>
          <br />
          <div className="grid grid-cols-2 gap-4 lg:gap-[100px]">
            {List.projects.map((value, key) => {
              return (
                <NotableProjectTemplate
                  key={key}
                  title={value.title}
                  desc={value.desc}
                  githubHref={value.githubHref}
                  fileHref={value.fileHref}
                  technology={value.technology}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <Header>Other Projects</Header>
          <br />
          <div className="grid grid-cols-1">
            {List.projects.map((value, key) => {
              return (
                <NotableProjectTemplate
                  key={key}
                  title={value.title}
                  desc={value.desc}
                  githubHref={value.githubHref}
                  fileHref={value.fileHref}
                  technology={value.technology}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default OtherProjects;
