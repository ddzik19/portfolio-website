import Fade from "react-reveal/Fade";
import useWindowDimensions from "../hooks/use-window-dimensions";

const Intro = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      {width > 768 ? (
        <Fade bottom distance="10%" duration={1500}>
          <div className="padding relative" id="home">
            <p className="text-[18px] text-yellow">Hi, my name is</p>
            <p className="text-[60px] font-bold">Damian Dzik.</p>
            <p className="text-[18px] text-gray-400 text-left pb-10">
              I am a
              <span className="px-2 text-yellow inline text-[20px]">
                Software Engineer,
              </span>
              specializing in Frontend development. In my spare time I like
              keeping myself busy with my personal projects or baking something
              delicious.
            </p>
            <a
              href="#contact-form"
              className="text-[16px] p-3 font-semibold rounded-lg mt-7 border-2 border-yellow hover:bg-yellow hover:text-black transition-all"
            >
              Get In Touch
            </a>
          </div>
        </Fade>
      ) : (
        <Fade bottom distance="10%" duration={1500}>
          <div className="padding relative mobile-margin" id="home">
            <p className="text-[18px] text-yellow">Hi, my name is</p>
            <p className="text-[60px] font-bold">Damian Dzik.</p>
            <p className="text-[18px] text-gray-400 text-left pb-10">
              I am a
              <span className="px-2 text-yellow inline text-[20px]">
                Software Engineer,
              </span>
              specializing in Frontend development. In my spare time I like
              keeping myself busy with my personal projects or baking something
              delicious.
            </p>
            <a
              href="#contact-form"
              className="text-[16px] p-3 font-semibold rounded-lg mt-7 border-2 border-yellow hover:bg-yellow hover:text-black transition-all"
            >
              Get In Touch
            </a>
          </div>
        </Fade>
      )}
    </>
  );
};

export default Intro;
