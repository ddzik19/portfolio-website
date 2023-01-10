import profile_pic from "../assets/White_square.png";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="padding grid grid-cols-2">
      <div className="mx-auto">
        <img src={profile_pic} alt="profile picture" />
      </div>
      <div className="">
        <p className="text-[30px] text-[#FF00E5] font-bold">
          Lorem ipsum dolor
        </p>
        <p className="text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          accumsan, orci quis condimentum gravida, quam odio vulputate nulla, at
          tristique odio lectus ac magna. Quisque nulla sem, dictum vel eros ut,
          tristique feugiat nisl. Mauris et nunc in magna aliquam faucibus.
          Integer feugiat augue dignissim dapibus mollis.
        </p>
      </div>
    </div>
  );
};

export default About;
