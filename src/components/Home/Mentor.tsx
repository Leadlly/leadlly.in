"use client";
import { MentorPoints } from "@/helpers/constants";
import Image from "next/image";
import IconWithLabel from "../shared/IconWIthLabel";
import Reveal from "../shared/Reveal";
import RevealImage from "../shared/RevealImage";
import FloatButton from "../shared/FloatButton";
import { useRef } from "react";
import { useInView } from "framer-motion";

type Props = {};
const Mentor = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section id="mentor" ref={ref}>
      <div className="text-primary-blue text-[27px] md:text-6xl font-bold mx-10 md:mx-40 my-10 md:my-20">
        <Reveal>
          <h1>Don't Go It Alone.</h1>
        </Reveal>
        <Reveal>
          <h1>Succeed with your mentor.</h1>
        </Reveal>
      </div>

      {/* Display for tab and desktop */}
      <div className="hidden md:block">
        <RevealImage
          rightItem={
            <Image
              alt="mentor"
              height={439}
              width={565}
              src={"/assets/images/mentor.png"}
            />
          }
          leftItem={
            <p className="text-[#5B437D] font-semibold text-lg xl:text-xl w-full md:w-72 xl:w-96 text-left">
              Gain valuable insights and strategies from someone experienced in
              your field of study.
            </p>
          }
          delay={0.2}
          motionDivClass="flex items-center justify-evenly"
          imagePosition="right"
        />
      </div>

      {/* Display for mobile */}
      <div className="block md:hidden px-10">
        <div className="flex flex-col items-center">
          <Reveal>
            <Image
              alt="mentor"
              height={439}
              width={565}
              src={"/assets/images/mentor.png"}
            />
          </Reveal>
          <Reveal>
            <p className="text-[#5B437D] font-semibold text-[11px] md:text-xl text-center mt-10">
              Gain valuable insights and strategies from someone experienced in
              your field of study.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-y-8 px-14 sm:px-48  md:p-48 md:py-24 py-14">
        {" "}
        {MentorPoints.map((item, index) => (
          <IconWithLabel
            key={index}
            icon={<item.icon className="size-full" />}
            label={item.label}
            delay={(index + 1) * 0.15}
          />
        ))}
      </div>
      {/* <FloatButton
				isInView={isInView}
				text='Know your mentor'
			/> */}
    </section>
  );
};

export default Mentor;
