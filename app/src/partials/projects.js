import CandyChaser from "../assets/candy-chaser.png";
import ProjectTempalteLeft from "../components/project-template-left";
import Fade from "react-reveal/Fade";
const Projects = () => {
  const p1 = (
    <p>
      This was my first big project that I have completed. After completing my 1
      year long PLC (Post Leaving Certificate) course I had 3 months before
      starting college. I decided to develop an Android game to test myself.{" "}
      <br />
      <br />
      In the end I was able to develop and deploy the game to Google Play Store
      with no knowlegde of C# and UnityEngine.
    </p>
  );

  return (
    <Fade bottom distance="10%" duration={1500}>
      <div className="padding">
        <p className="inline font-semibold text-[30px] text-yellow">
          Things I've Created
        </p>
        <div className="mt-20">
          <Fade bottom distance="10%" duration={1500}>
            <ProjectTempalteLeft
              title={"Candy Chaser"}
              desc={p1}
              image={CandyChaser}
              technology={["C#", "UnityEngine", "OOP", "Android"]}
              fileHref={
                "https://play.google.com/store/apps/details?id=com.Damo.CandyChaser"
              }
            />
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
