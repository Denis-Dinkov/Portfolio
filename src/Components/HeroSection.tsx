import Image from "../../public/images/hero-image.png";
export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Denis
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:textxl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            impedit vero eligendi excepturi reprehenderit fugiat distinctio
            numquam nesciunt fuga incidunt assumenda magni dicta voluptate sint
            accusamus, iusto facere consectetur. Obcaecati.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Hire me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-200 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
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
