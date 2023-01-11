import ProjectTempalteRight from "../components/project-template-right";
import Placeholder from "../assets/banner-redimensionat.jpg";
import FadeInSection from "../components/fade-in-section";
const Projects = () => {
  return (
    <div className="padding">
      <FadeInSection>
        <p className="text-mint inline text-[30px] pr-5">&gt;</p>
        <p className="inline font-semibold text-[30px]">My Work</p>
        <ProjectTempalteRight title={"CandyChaser"} desc={"Android game"} />
      </FadeInSection>
    </div>
  );
};

export default Projects;
