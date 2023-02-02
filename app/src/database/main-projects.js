import CandyChaser from "../assets/candy-chaser.png";
import Codbot from "../assets/codbot.png";
import CourseBlogWebsite from "../assets/course-blog-website.png";

export const MainProjects = [
  {
    title: "Candy Chaser",
    desc: "This was my first big project that I have completed. After completing my 1 year long PLC (Post Leaving Certificate) course I had 3 months before starting college. I decided to develop an Android game to test myself. In the end I was able to develop and deploy the game to Google Play Store with no knowlegde of C# and UnityEngine.",
    image: CandyChaser,
    technology: ["C#", "UnityEngine", "OOP", "Android"],
    githubHref: "",
    fileHref:
      "https://play.google.com/store/apps/details?id=com.Damo.CandyChaser",
  },
  {
    title: "Commander-B",
    desc: (
      <p>
        Commander-B is a Discord bot that I have developed for my friends
        Discord server. When a user enters one of the existing commands, they
        will get a reply from the bot with the requested information. The bot
        has multiple commands that can be viewed by entering the !cod.help
        command.
        <br />
        <br />
        The Discord Bot was hosted on Heroku.com but since Heroku is no longer
        free, I had to stop hosting the Discord bot.
      </p>
    ),
    image: Codbot,
    technology: ["Node", "JavaScript", "Discord.js"],
    githubHref: "https://github.com/ddzik19/cod-bot-wz2",
    fileHref: "",
  },
  {
    title: "Course Blog Website",
    desc: (
      <p>
        This website is still WIP.
        <br />
        <br />
        On this website I will be posting educational blogs about frontend
        development. This will be used as a learning experience for me,
        motivating me to continue learning and sharing my knowledge with
        everyone.
      </p>
    ),
    image: CourseBlogWebsite,
    technology: ["React.js", "Sanity", "TailwindCss"],
    githubHref: "https://github.com/ddzik19/cod-bot-wz2",
    fileHref: "",
  },
];
