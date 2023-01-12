import ProjectTempalteRight from "../components/project-template-right";
import Placeholder from "../assets/banner-redimensionat.jpg";
import CandyChaser from "../assets/candy-chaser.png";
import ProjectTempalteLeft from "../components/project-template-left";
import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <Fade bottom distance="10%" duration={1500}>
      <div className="padding">
        <p className="text-mint inline text-[30px] pr-5">&gt;</p>
        <p className="inline font-semibold text-[30px]">My Work</p>
        <Fade bottom distance="10%" duration={1500}>
          <ProjectTempalteLeft
            title={"Candy Chaser"}
            desc={
              "This was my first big project that I have completed. After completing my 1 year long PLC (Post Leaving Certificate) course I had 3 months before starting college. Therefore I decided to stay busy and keep learning. In the end I completed developing the game within 3 months with little knowledge of C# and Unity Engine."
            }
            image={CandyChaser}
            technology={["C#", "UnityEngine", "OOP", "Android"]}
            fileHref={
              "https://play.google.com/store/apps/details?id=com.Damo.CandyChaser"
            }
          />
        </Fade>
        <Fade bottom distance="10%" duration={1500}>
          <ProjectTempalteLeft
            title={"Candy Chaser"}
            desc={
              "This was my first big project that I have completed. After completing my 1 year long PLC (Post Leaving Certificate) course I had 3 months before starting college. Therefore I decided to stay busy and keep learning. In the end I completed developing the game within 3 months with little knowledge of C# and Unity Engine."
            }
            image={CandyChaser}
            technology={["C#", "UnityEngine", "OOP", "Android"]}
            fileHref={
              "https://play.google.com/store/apps/details?id=com.Damo.CandyChaser"
            }
          />
        </Fade>
        <Fade bottom distance="10%" duration={1500}>
          <ProjectTempalteLeft
            title={"Candy Chaser"}
            desc={
              "This was my first big project that I have completed. After completing my 1 year long PLC (Post Leaving Certificate) course I had 3 months before starting college. Therefore I decided to stay busy and keep learning. In the end I completed developing the game within 3 months with little knowledge of C# and Unity Engine."
            }
            image={CandyChaser}
            technology={["C#", "UnityEngine", "OOP", "Android"]}
            fileHref={
              "https://play.google.com/store/apps/details?id=com.Damo.CandyChaser"
            }
          />
        </Fade>
      </div>
    </Fade>
  );
};

export default Projects;