const About = () => {
  return (
    <div className="padding relative">
      <p className="text-[18px] text-mint">Hi, my name is</p>
      <p className="text-[60px] font-bold">Damian Dzik.</p>
      <p className="text-[18px] text-gray-400 text-left">
        I am a
        <span className="px-2 text-mint inline text-[20px]">
          Software Engineer,
        </span>
        specializing in Frontend development. In my spare time I like getting
        busy working on my personal projects or baking delicious cupcakes.
      </p>
      <button className="text-[16px] p-3 font-semibold rounded-lg mt-7 border-2 border-mint hover:bg-mint hover:text-black">
        Get In Touch
      </button>
    </div>
  );
};

export default About;
