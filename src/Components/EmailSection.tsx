import { Link } from "react-router-dom";

import githubIcon from "../assets/github-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";

export default function EmailSection() {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className="socials">
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
      <div className="">
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="youremail@gmail.com"
          />
        </form>
      </div>
    </section>
  );
}
