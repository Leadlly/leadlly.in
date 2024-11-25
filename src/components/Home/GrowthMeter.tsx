"use client";
import Image from "next/image";
import { GrowthMeterPoints } from "@/helpers/constants";
import IconWithLabel from "../shared/IconWIthLabel";
import Reveal from "../shared/Reveal";
import RevealImage from "../shared/RevealImage";
import { useRef } from "react";
import { useInView } from "framer-motion";
import FloatButton from "../shared/FloatButton";

type Props = {};
const GrowthMeter = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section ref={ref}>
      <div className="text-4xl md:text-6xl ml-4 md:ml-20 my-5 text-left font-bold bg-gradient-to-r from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent">
        <Reveal>
          <h1 className="text-4xl md:text-6xl ml-4 md:ml-20 my-5 text-left font-bold bg-gradient-to-r from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent">
Track it, chart it, <br/>
Celebrate it.</h1>
        </Reveal>
        
      </div>

      {/* Display for tab and desktop */}
      <div className="hidden md:block">
        <RevealImage
          rightItem={
            <Image
              alt="growthMeter"
              height={498}
              width={498}
              src={"/assets/images/growthMeter.png"}
              className="z-10"
            />
          }
          leftItem={
            <p className="text-[#5B437D] font-semibold text-xl w-full md:w-96 text-right">
              Watch your self-study soar with the Growth Meter - see daily,
              weekly, and monthly progress take flight!
            </p>
          }
          delay={0.2}
          motionDivClass="flex items-center justify-evenly"
          imagePosition="right"
        />
      </div>


<div className=" mt-20 mb-8 ml-20 flex justify-center">
  <img src="/assets/growth1.svg" alt="" />
</div>

<div className="ml-40  -mb-20 space-y-5">
  <img src="/assets/Heading1.svg" alt="" />
</div>


<div className="hidden md:block mb-40">
        <RevealImage
          rightItem={
            <Image
           
              alt="growthMeter"
              height={498}
              width={300}
              src={"/assets/growth4.svg"}
              className="z-10 ml-10"
            />
          }
          leftItem={
           <Image
           alt=""
           height={600}
           width={600}
           src={"/assets/growth3.svg"}
           className="mr-20"/>

           
          }
          delay={0.2}
          motionDivClass="flex items-center justify-evenly"
          imagePosition="right"
        />
      </div>

<div className="flex justify-center mb-40">
  <Reveal>
    <img className="ml-20" src="/assets/growth5.svg" alt="" />
  </Reveal>
</div>

<div className="flex  flex-row justify-evenly mx-10 ">
<div className="w-1/2 ml-80 mb-4  ">
   <img className="ml-20"src="/assets/Level.svg" alt="" />
    </div>
<div className="w-1/2 mr-80 mb-4 ">
  <img className="ml-10 mb-4" src="/assets/points.svg" alt="" />
  </div>
</div>




<div className="flex  flex-row justify-evenly mx-10 ">
<div className="w-1/2 ml-80 mb-4  ">
<Reveal>
<img className="ml-40"src="/assets/LevelUp.svg" alt="" />
   </Reveal>
    </div>
<div className="w-1/2 mr-40 mb-4 ml-10">
<Reveal>
<img className="ml-10 mb-4" src="/assets/points2.svg" alt="" />
  </Reveal>
  </div>
</div>




      {/* Display for mobile */}
      <div className="block md:hidden px-10">
        <div className="flex flex-col items-center">
          <Reveal>
            <Image
              alt="growthMeter"
              height={498}
              width={498}
              src={"/assets/images/growthMeter.png"}
              className="z-10"
            />
          </Reveal>
          <Reveal>
            <p className="text-[#5B437D] font-semibold text-[11px] md:text-xl text-center mt-10">
              Watch your self-study soar with the Growth Meter - see daily,
              weekly, and monthly progress take flight!
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-y-8 px-14 sm:px-48  md:p-48 md:py-24 py-14">
        {GrowthMeterPoints.map((item, index) => (
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
				text='Explore growth meter'
			/> */}
    </section>
  );
};

export default GrowthMeter;
