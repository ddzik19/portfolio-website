import Fade from "react-reveal/Fade";
import { Header } from "../components/header";
import useWindowDimensions from "../hooks/use-window-dimensions";
import ProfilePic from "../assets/profile-pic.png";
const About = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      {width > 1280 ? (
        <Fade bottom distance="10%" duration={1500}>
          <div className="grid grid-cols-2 padding">
            <div>
              <Header>About Me</Header>
              <p className="text-[16px]">
                Hi, my name is Damian Dzik and I enjoy creating/developing
                websites!
                <br />
                <br />
                My passion for web development sparked in 2019 when I was
                attending a Software Development PLC (Post Leaving Certificate)
                course. During this course I experienced many different kinds of
                development but the one that caught my eye the most was frontend
                development.
                <br />
                <br />
                Today I am in my last semester of studying{" "}
                <span className="text-yellow text-[18px]">
                  BCs Software Systems Development at{" "}
                  <a
                    className="underline"
                    href="https://www.wit.ie/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SETU Waterford
                  </a>
                </span>{" "}
                with the hope of becoming a Frontend Software Engineer after my
                graduation.
                <br />
                <br />I am currently on the hunt for a Frontend job after
                graduating college this May of 2023.
              </p>
            </div>
            <div>
              <img
                className="w-[300px] h-[300px] bg-yellow my-[100px] mx-auto rounded-full shadow-[0_0px_80px_-15px_rgb(255,251,0)]"
                src={ProfilePic}
                alt="Picture of me"
              />
            </div>
          </div>
        </Fade>
      ) : width > 768 ? (
        <Fade bottom distance="10%" duration={1500}>
          <div className="padding">
            <Header>About Me</Header>
            <p className="text-[16px]">
              Hi, my name is Damian Dzik and I enjoy creating/developing
              websites!
              <br />
              <br />
              My passion for web development sparked in 2019 when I was
              attending a Software Development PLC (Post Leaving Certificate)
              course. During this course I experienced many different kinds of
              development but the one that caught my eye the most was frontend
              development.
              <br />
              <br />
              Today I am in my last semester of studying{" "}
              <span className="text-yellow text-[18px]">
                BCs Software Systems Development at{" "}
                <a
                  className="underline"
                  href="https://www.wit.ie/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SETU Waterford
                </a>
              </span>{" "}
              with the hope of becoming a Frontend Software Engineer after my
              graduation.
              <br />
              <br />I am currently on the hunt for a Frontend job after
              graduating college this May of 2023.
            </p>
            <img
              className="w-[300px] h-[300px] bg-yellow my-[100px] mx-auto rounded-full shadow-[0_0px_80px_-15px_rgb(255,251,0)]"
              src={ProfilePic}
              alt="Picture of me"
            />
          </div>
        </Fade>
      ) : (
        <Fade bottom distance="10%" duration={1500}>
          <div className="padding">
            <Header>About Me</Header>
            <p className="text-[16px]">
              Hi, my name is Damian Dzik and I enjoy creating/developing
              websites!
              <br />
              <br />
              My passion for web development sparked in 2019 when I was
              attending a Software Development PLC (Post Leaving Certificate)
              course. During this course I experienced many different kinds of
              development but the one that caught my eye the most was frontend
              development.
              <br />
              <br />
              Today I am in my last semester of studying{" "}
              <span className="text-yellow text-[18px]">
                BCs Software Systems Development at{" "}
                <a
                  className="underline"
                  href="https://www.wit.ie/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SETU Waterford
                </a>
              </span>{" "}
              with the hope of becoming a Frontend Software Engineer after my
              graduation.
              <br />
              <br />I am currently on the hunt for a Frontend job after
              graduating college this May of 2023.
            </p>
            <img
              className="w-[300px] bg-yellow my-[100px] mx-auto rounded-full shadow-[0_0px_80px_-15px_rgb(255,251,0)]"
              src={ProfilePic}
              alt="Picture of me"
            />
          </div>
        </Fade>
      )}
    </>
  );
};

export default About;
