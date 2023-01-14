import ProjectTemplate from "../components/project-template";
import { MainProjects } from "../database/main-projects";
import Fade from "react-reveal/Fade";
import { Header } from "../components/header";

const Projects = () => {
  return (

    <div className="padding" id="my-work">
      <Fade bottom distance="10%" duration={1500}>
        <Header>Things I've Created</Header>
      </Fade>
      <br />
      <br />
      {MainProjects.map((value, key) => {
        return (
          <Fade bottom distance="10%" duration={1500}>
            <ProjectTemplate
              key={key}
              title={value.title}
              desc={value.desc}
              image={value.image}
              technology={value.technology}
              githubHref={value.githubHref}
              fileHref={value.fileHref}
            />
          </Fade>
        );
      })}
    </div>

  );
};

export default Projects;
