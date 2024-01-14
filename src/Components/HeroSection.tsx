import Image from "../assets/images/hero-image.png";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-400 to-secondary-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Dendo", 4000, "Web Developer", 4000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            impedit vero eligendi excepturi reprehenderit fugiat distinctio
            numquam nesciunt fuga incidunt assumenda magni dicta voluptate sint
            accusamus, iusto facere consectetur. Obcaecati.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white hover:bg-slate-200 ">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 rounded-full hover:bg-slate-800 text-white border  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg-w[400px] lg-h-[400px] relative">
            <img
              src={Image}
              alt="Hero Image"
              width={300}
              height={300}
              className="absolute transform -translate -x-1/2 -translate-y-1/2 top-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
