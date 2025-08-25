"use client";
import { TrackerPoints } from "@/helpers/constants";
import Image from "next/image";
import IconWithLabel from "../shared/IconWIthLabel";
import Reveal from "../shared/Reveal";
import RevealImage from "../shared/RevealImage";
import { useRef } from "react";
import { useInView } from "framer-motion";
import FloatButton from "../shared/FloatButton";

type Props = {};
const Tracker = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section ref={ref}>
      <div className="text-primary-blue text-[27px] md:text-5xl font-bold mx-10 md:mx-30 my-5 md:my-20">
        <Reveal>
          <h1 className="text-4xl md:text-6xl ml-4 md:ml-20 my-5 text-left font-bold bg-gradient-to-r from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent">
            Track every bite of revision <br/> with tracker. </h1>
        </Reveal>
        {/* <Reveal>
       
        </Reveal> */}
      </div>

      {/* Display for tab and desktop */} 
       <div className="hidden md:block">
        <RevealImage
          rightItem={
            <Image
              alt="Tracker"
              height={312}
              width={616}
              src={"/assets/background.svg"}
              className="z-10"
            />
          }
          leftItem={
            <p className="text-[#5B437D] font-semibold text-xl w-full md:w-96 text-left">
              Monitor how many times you've revised each topic with current and
              cumulative efficiency.
            </p>
          }
          delay={0.2}
          motionDivClass="flex items-center justify-evenly"
          imagePosition="right" // Specify image position
        />
      </div> 

<div className="text-primary-black text-[15px] md:text-4xl font-semibold mx-12 md:mx-60 my-10 md:my-50">
  <Reveal>
<h2 className="text-primary-black text-[10px] md:text-3xl font-semibold mx-12 md:mx-60 my-10 md:my-50">Tracker ditches the stopwatch and becomes your personal learning GPS. It analyzes not just the time <br/> you spend studying, but how efficiently you're <br/>grasping the material within each session.</h2>
</Reveal>
</div>

      <div className="text-primary-blue text-[27px] md:text-6xl font-bold mx-10 md:mx-40 my-10 md:my-20 mb-10 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl ml-4 md:ml-20 my-5 text-left font-bold bg-gradient-to-r from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent">
            Gain insights into your <br/> revision efficiency</h1>
        </Reveal>
        {/* <Reveal>
       
        </Reveal> */}
      </div>
      {/* <div className="text-primary-blue text-[27px] md:text-6xl font-bold mx-10 md:mx-40 my-10 md:my-20">
hello
      </div> */}
      {/* <div className="space-y-3"> */}


      
<div className="flex flex-wrap items-center justify-center gap-8  mb-12">
  <img src="/assets/Container2.svg" alt="Centered Image" />

  
</div>
<div className=" flex flex-col justify-center text-center h-screen mt-[-16px]">
<div className="text-primary-blue text-[15px] md:text-4xl font-semibold mx-auto my-20 md:my-30 -mt-30 text-center">
<Reveal>
  <h1 >Subject wise efficiency</h1>
</Reveal>
</div>
                                                                                                                                                                                                                                                                                                                                                                  
<div className="text-primary-black flex justify-center text-center ">
<Reveal >
  <h1 className="text-primary-black text-[15px] md:text-2xl font-medium mx-auto my-5 md:mx-40 md:my-0  ">
    See how effectively you're grasping different subjects within <br /> your curriculum. Identify areas of strength and weakness to <br /> optimize your study approach.
</h1>
</Reveal>
</div>
<div>
  
</div>
</div>  




{/* <div className="hidden md:block">
<RevealImage
  rightItem={
   <h1 className="text-primary-blue text-[15px] text-6xl ">Chapter wise efficiency</h1>
  }
  leftItem={
    <p className="text-[#5B437D] font-semibold text-xl w-full md:w-96 text-left">
      Monitor how many times you've revised each topic with current and
      cumulative efficiency.
    </p>
  }
  delay={0.2}
  motionDivClass="flex items-center justify-evenly"
  imagePosition="right" // Specify image position
/>
</div>  */}

<div className="mb-0">


<div className="flex  flex-row justify-evenly mx-10 -mt-2.5">
<div className="w-1/2 ml-80 mb-4  ">
   <img className="ml-20"src="/assets/Card(3).svg" alt="" />
    </div>
<div className="w-1/2 mr-60 mb-4">
  <img className="ml-10 mb-4" src="/assets/Card2.svg" alt="" />
  </div>
</div>


<div className="flex  flex-row justify-evenly mx-10">


  <div className="w-1/2 ml-80 ">
    <h1 className="text-primary-blue text-4xl font-bold mb-4 mx-10">Chapter wise efficiency</h1>
    <br />
    <p className="text-black font-medium text-2xl mx-25 mb-40 ml-12">
      Track your progress within <br /> each chapter. This helps <br /> identify any specific <br/>sections that require extra <br/>focus or pinpoint topics<br/> you've mastered.
      
    </p>
  </div>


  <div className="w-1/2 mr-40">
    <h1 className="text-primary-blue text-4xl font-bold mb-4">Topic wise efficiency</h1>
    <br />
    <p className="text-black font-medium text-2xl ml-5 mb-40">
      Get a hyper-focused view of <br/>your efficiency at the topic <br/> level. This allows you to<br/> target your studying even<br/> more effectively, ensuring <br/> you haven't missed any crucial details.
    </p>
  </div>
</div>

</div>
{/* </div> */}





<div className=" flex flex-col justify-center text-center h-screen">
<div className=" flex flex-col justify-center text-center h-screen">
<div className="flex justify-center items-center    ">
    <img src="/assets/cycle1.svg" alt="" />
  </div>
<div className="text-[#5B437D] text-[15px] md:text-6xl font-bold mx-auto my-20 md:my-30 text-center  ">

<Reveal>

  <h1>Current Efficiency</h1>
</Reveal>
</div>
                                                                                                                                                                                                                                                                                                                                                                  
<div className="text-primary-black flex justify-center text-center ">
<Reveal>
  <h1 className="text-[#2B2B2B] text-[15px] md:text-2xl font-semibold mx-auto my-5 md:mx-40 md:my-0  ">This refers to your performance during a specific study <br />session. It likely reflects how well you grasped the <br /> material you covered in that session.
</h1>
</Reveal>
</div>
</div>  

<div className=" flex flex-col justify-center text-center h-screen">
<div className="flex justify-center items-center    ">
    <img src="/assets/cycle2.svg" alt="" />
  </div>
<div className="text-[#5B437D] text-[15px] md:text-6xl font-bold mx-auto my-20 md:my-30 text-center  ">
  
<Reveal>
  <h1>Cumulative Efficiency</h1>
</Reveal>
</div>
                                                                                                                                                                                                                                                                                                                                                                  
<div className="text-primary-black flex justify-center text-center ">
<Reveal>
  <h1 className="text-[#2B2B2B] text-[15px] md:text-2xl font-semibold mx-auto my-5 md:mx-40 md:my-0  ">This refers to your overall performance across multiple <br />study sessions. It provides a broader picture of how well <br />you're retaining information and progressing towards <br /> your learning goals.
</h1>
</Reveal>
</div>
</div> 

</div>


  {/* Display for mobile */}
      {/* <div className="block md:hidden px-10">
        <div className="flex flex-col items-center">
          <Reveal>
            <Image
              alt="Tracker"
              height={312}
              width={616}
              src={"/assets/images/tracker.png"}
              className="z-10"
            />
          </Reveal>
          <Reveal>
            <p className="text-[#5B437D] font-semibold text-[11px] md:text-xl text-center mt-10">
              Monitor how many times you've revised each topic with current and
              cumulative efficiency.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-y-8 px-14 sm:px-48  md:p-48 md:py-24 py-14">
        {TrackerPoints.map((item, index) => (
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
				text='Zoom into tracker'
			/> */}

 ////   </section>
//   );
// }; */}



      )
    }
export default Tracker
