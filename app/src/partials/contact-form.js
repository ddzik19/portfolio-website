import Fade from "react-reveal/Fade";

const ContactForm = () => {
  return (
    <Fade bottom distance="10%" duration={1500}>
      <div id="contact-form" className="px-4 mx-auto max-w-[700px] padding">
        <h2 className="mb-4 text-4xl tracking-tight font-semibold text-left text-yellow">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 text-[18px] font-light text-left ">
          If you'd like to get in touch with me then feel free to send me an email and I will get back to you in no time!
        </p>
        <a
          href="mailto:ddzik09@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded-lg font-semibold border-[2px] border-yellow hover:bg-yellow hover:text-black p-4 transition-all"
        >
          Send message
        </a>
      </div>
    </Fade>
  );
};

export default ContactForm;
