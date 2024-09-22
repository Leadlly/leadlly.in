"use client";
import { Download, Fullscreen } from "lucide-react";
import Marquee from "./Marquee";
import Reveal from "../shared/Reveal";
import Image from "next/image";
import Link from "next/link";

type Props = {};
const Hero = (props: Props) => {
  return (
    <div className="flex flex-col relative justify-center items-center gap-10 overflow-x-hidden px-4 md:px-10">
      <h1 className="text-4xl md:text-7xl mt-20 md:mt-44 leading-tight font-bold flex flex-col text-center text-primary-blue gap-5">
        <Reveal>
          <span>Optimize your</span>
        </Reveal>
        <Reveal width="100%">
          <span className="text-center">self studies</span>
        </Reveal>
      </h1>
      <Reveal motionDivClass="flex justify-center">
        <p className="text-xs md:text-xl bg-gradient-to-r font-medium from-[#8B4CF4] via-[#FEB25E] to-[#8344F7] w-[90%] md:w-[60%] text-center bg-clip-text text-transparent">
          We equip students with personalized learning tools and supportive
          mentors to conquer academic challenges and thrive in competitive
          exams.
        </p>
      </Reveal>
      <Reveal width="100%" motionDivClass="flex justify-center" delay={0.2}>
        <Link
          href={"https://education.leadlly.in/"}
          className="inline-flex px-4 animate-shimmer gap-2 h-10 md:h-12 items-center justify-center rounded-3xl border border-blue-500 bg-[linear-gradient(110deg,#8B4CF4,45%,#B078F9,55%,#8B4CF4)] bg-[length:200%_100%]  md:px-12 	 text-white transition-colors focus:outline-none font-semibold focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Sign Up
          {/* Download <Download className='w-4 h-4 md:w-5 md:h-5' /> */}
        </Link>
      </Reveal>
      <div className="mt-20 md:mt-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 xl:w-1/3 mb-10 md:mb-0">
          <Reveal motionDivClass="">
            <p className="text-[#5B437D] font-semibold text-xs ml-5  max-md:max-w-60 md:text-xl text-left lg:ml-20">
              Say goodbye to one-size-fits-all! We tailor study plans and
              resources to your individual learning style and goals.
            </p>
          </Reveal>
        </div>
        <div className="relative md:translate-x-48 flex-grow w-full md:w-auto">
          {/* <video
						src='/assets/videos/comp.webm'
						loop
						muted
						autoPlay
						className='w-full md:w-auto'
					></video> */}
          <Image
            alt="rotate"
            width={1181}
            className="w-full h-full"
            height={"429"}
            src={"/assets/images/rotate.png"}
          />
        </div>
      </div>
      <Marquee />
      <div
        className="flex flex-col md:flex-row justify-start w-full"
        id="explore"
      >
        <div className="w-full md:w-auto">
          <h1 className="text-4xl md:text-6xl ml-4 md:ml-20 my-5 text-left font-bold bg-gradient-to-r from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent">
            Let's explore
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Hero;
