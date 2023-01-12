import Fade from "react-reveal/Fade";
import useWindowDimensions from "../hooks/use-window-dimensions";
const ContactForm = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Fade bottom distance="10%" duration={1500}>
      <div
        id="contact-form"
        className="py-8 lg:py-16 px-4 mx-auto max-w-[700px]"
      >
        <h2 className="mb-4 text-4xl tracking-tight font-semibold text-left text-yellow">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 text-[18px] font-light text-left text-gray-400">
          Got a technical issue? Got a job offer? Need details about our
          Business plan? Let me know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-yellow"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm w-full block bg-secondary border border-gray-500 text-white text-sm rounded-lg p-3"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-yellow"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="shadow-sm w-full block bg-secondary border border-gray-500 text-white text-sm rounded-lg p-3"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-yellow"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="shadow-sm w-full block bg-secondary border border-gray-500 text-white text-sm rounded-lg p-3"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-lg border-[2px] border-yellow hover:bg-yellow hover:text-black p-4"
          >
            Send message
          </button>
        </form>
      </div>
    </Fade>
  );
};

export default ContactForm;
