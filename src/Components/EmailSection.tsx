import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import loading from "../assets/loading.svg";
import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import SendEmailBtn from "./SendEmailBtn";

export default function EmailSection() {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState("none");
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setEmailStatus("sending");
    emailjs
      .sendForm(
        "service_ke60pn8",
        "template_j4vci88",
        form.current,
        "qMn0xZsypFfK4A4Dt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailStatus("success");
        },
        (error) => {
          console.log(error.text);
          setEmailStatus("error");
        }
      );
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let`s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md ">
          I am open to new opportunities, feel free to reach out to me for any
          project or collaboration.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link to="https://github.com/Denis-Dinkov">
            <img src={githubIcon} alt="github" />
          </Link>
          <Link to="https://www.linkedin.com/in/denis-dinkov/">
            <img src={linkedinIcon} alt="linkedin" />
          </Link>
        </div>
      </div>
      <div className="email-form">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="from_name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="youremail@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi!"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your message here..."
            />
          </div>
          <SendEmailBtn status={emailStatus} />
        </form>
      </div>
    </section>
  );
}
