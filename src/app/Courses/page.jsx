"use client"
import React from "react";
import {Box,Center ,Spacer,Stack,Flex ,Text,Heading,useColorModeValue , extendTheme, Button} from "@chakra-ui/react"
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Aero from "../../imgs/areo.svg"
import Star from "../../imgs/star.svg"
import lineright from "../../imgs/lineright.svg"
import lineleft from "../../imgs/lineleft.svg"
import Pencil from "../../imgs/pencil.svg"
import Book from "../../imgs/book.svg"
import emojystar from "../../imgs/emojystar.svg"
import gridleft from "../../imgs/Grid1.png"
import gridright from "../../imgs/Grid2.png"
import TopicCard from "@/Components/TopicCard/TopicCard";
import star from "../../imgs/Staremojy.svg"

import { Icon } from "@chakra-ui/react";


const Home = () => {
  return (
    <>
    <section className="overflow-hidden text-[#5900D9] py-[40px]  bg-gradient flex-col" >

       
       <div className="lg:flex justify-between gap-10 md:ml-[84px] md:w-[90vw] md:mb-[0vh] h-auto">
          <div className="lg:flex lg:items-center xl:hidden ml-[8%] lg:justify-center z-0 relative lg:block hidden">
            <div><Image src={gridleft}/></div>
            <div><Image className="relative left-[-16%]" src={gridleft}/></div>
            <div><Image className="left-[-32%] relative" src={gridleft}/></div>
          </div>
          <div className="ml-[30%] fit-content z-0 relative md:hidden block">
            <div><Image className="absolute" src={gridleft}/></div>
          </div>
      <div className="fkexbixs items-center md:relative lg:absolute xl:relative sm:relative sm:left[-20%] md:left-[-5%] lg:top-[10%] xl:my-[50px] lg:left-[20%] xl:left-[15%]">
      <div className="flex flex-col z-10 lg:relative gap-5 justify-center"> 
          <div className="relative">
          <div className="icons-container absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none"> {/* Container for icons */}
              <Image src={Aero} className="absolute lg:w-[68.86px] h-[58.52px] top-[-25%] md:top-[-20%] lg:top-[-8%] md:w-[40px] md:w-[40px] md:left-[15%] w-[30px] lg:left-[15%] left-[10%] gap-0"/>
              <Image src={Star} alt="star" className="md:block hidden absolute lg:w-[31.56px] md:w-[40px] h-[28px] top-[0px] left-[84%] gap-0" />
              <Image src={lineright} className="absolute lg:w-[95.56px] w-[35px] h-[49.33px] top-[50%] md:w-[40px] md:left-[-10%] left-[-30px]  gap-0"/>
              <Image src={lineleft} className="absolute lg:w-[95.56px] h-[49.33px] md:top-[30%] md:w-[40px] w-[40px] top-[-20px] left-[75%] md:left-[105%] gap-0"/>
              <Image src={Pencil} className="absolute lg:w-[95.56px] w-[20px] h-[49.33px] top-[90%] md:w-[30px] left-[10%] lg:left-[10%] md:left-[10%] gap-0"/>
              <Image src={Book} className="absolute lg:w-[95.56px] h-[49.33px] w-[25px] top-[90%] md:left-[80%] left-[80%] md:w-[40px] gap-0"/>
            </div>
           
          <div className="full rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans  font-bold"
            >
            <div className="text-center font-normal">
             <span className="md:text-[24px] font-normal sm:text-[15px] lg:text-[40px]">This vaccation <br /><span>transform yourself with Leadlly’s ultimate </span> </span>
            <br />
            <span className="gradient-text text-center font-Urbanist text-5xl font-bold">
              <h1 >Personal Development</h1>
            </span>
            <br/><span className="md:text-[24px] font-normal sm:text-[15px] lg:text-[40px]">Workshop</span>
           
            </div>  </div>
          </div>
      </div>
      </div>
      
        </div>
        </section>

        <section className="mt-[25px] overflow-hidden">
          <div>
            <h1 className="text-center text-[18px] text-[#6200EE] md:text-[25px] lg:text-[40px] md:font-semibold ">List of the Topics</h1>
            <p className="text-center mb-[5px] text-[#AD77FC] lg:text-[24px] md:text-[16px] text-[14px] font-normal">This Workshop is a 6 session program for 1 month</p>
            <div className='gradient-border lg:border-none'></div>
            <div className="mt-[24px] items-center grid flex justify-center sm:grid-cols-2 lg:grid-cols-3 md:gap-[60px] gap-[20px] lg:gap-[85px] mx-[5%] md:mx-[15%] ">
            <TopicCard
            tite="Icebreaker & interactive Sessions"
            subtitle1="Introduction of workshop"
            subtitle2="Icebreaking"
            subtitle3="Do’s and Don’ts"
            subtitle4="Games"
            number="01"
            />
            <TopicCard
            tite="Power of Positive thinking"
            subtitle1="Mindset and its impact"
            subtitle2="The power of reframing"
            subtitle3="Visualization and techniques"
            subtitle4="Gratitude and exercise"
            number="02"
            />
            <TopicCard
            tite="Navigating career choice"
            subtitle1="Values and passion"
            subtitle2="Emerging trends and job market"
            subtitle3="Networking and mentorship"
            subtitle4="Non -linear career path"
            number="03"
            />
            <TopicCard
            tite="Communication & Relationship"
            subtitle1="Active Listening"
            subtitle2="Non-verbal communication"
            subtitle3="Study Vs Relationship"
            subtitle4="The importance of empathy"
            number="04"
            />
            <TopicCard
            tite="How to Monetize your skills."
            subtitle1="Creating digital products"
            subtitle2="Self-discovery exercises"
            subtitle3="Market demand"
            subtitle4="Personal branding"
            number="05"
            />
            <TopicCard
            tite="Brainstorming Sessions"
            subtitle1="Questions and Answers"
            subtitle2="Team building exercise"
            subtitle3="Talk with Mentor"
            subtitle4="Networth Vs Network"
            number="06"
            />
            </div>
          </div>
          <div className="flex mb-[30px] justify-center mt-[20px] items-center">
          <button className="bg-[#FFB35C] px-[7px] md:px-[20px] py-[4px] rounded-[4px] text-center shadow-md text-white">Join Us</button>
          </div>
           <div className='gradient-border lg:block hidden'></div>
        </section>

        <section className="mt-[30px] overflow-hidden">
          <h1 className="text-center lg:text-[40px] md:text-[30px] text-[24px] font-semibold">Why you should choose<span className="text-[#FFB35C]"> us :</span></h1>
          <p className="text-[#6200EE] lg:text-[20px] md:text-[16px] text-[14px] text-center">Over 1,000 Students Trusted this Future oriented course</p>
          <div className='gradient-border lg:hidden'></div>
          <div className="bg-[#EEE3F8] hidden md:block  mt-[20px] flex-col items-center px-[13.5%] pt-[37px] ">
            
            <div className="flex justify-center gap-[64px] items-center">
              <div  className="flex justify-between items-start gap-[10px]">
                <Image width={40} height={40} src={star}/>
                <p className="lg:text-[18px] md:text-[14px] text-gray-500">Develop effective habits and time management strategies.</p>
              </div>
              <div  className="flex justify-between items-start gap-[10px]">
                <Image width={40} height={40} src={star}/>
                <p className="lg:text-[18px] md:text-[14px] text-gray-500">Acquire decision-making frameworks to evaluate career options.</p>
              </div>
            </div>
            <div className="mt-[35px] flex items-start justify-center gap-[10px]">
                <Image width={40} height={40} src={star}/>
                <p className="lg:text-[18px] md:text-[14px] max-w-[50%] text-gray-500">Gain insights into emerging industries and future trends.</p>
              </div>
          </div>
        </section>

        <section className="flex justify-center overflow-hidden items-center">
          <div className="bg-[#D6C4F0] p-[15px] w-[400px] rounded-[20px] md:hidden mt-[20px] flex-col items-center">
          <div  className="flex justify-betweenitems-start gap-[27px]">
                <Image width={40} height={40} src={star}/>
                <p className="lg:text-[18px] md:text-[14px] text-[#504F4F]">Develop effective habits and time management strategies.</p>
              </div>

              <div  className="flex mt-[18px] justify-between items-start gap-[27px]">
                <Image width={40} height={40} src={star}/>
                <p className="lg:text-[18px] md:text-[14px] text-[#504F4F]">Acquire decision-making frameworks to evaluate career options.</p>
              </div>

              <div className="flex mt-[18px] justify-between items-start gap-[27px]">
                <Image width={40} height={40} src={star}/>
                <p className="lg:text-[18px] md:text-[14px] text-[#504F4F]">Gain insights into emerging industries and future trends.</p>
              </div>
          </div>
        </section>

        <section className="mt-[10px] overflow-hidden bg-[#C495C8] md:text-black text-white">
          <p className="text-center lg:text-[32px] md:text-[26px] text-[18px] font-normal py-[10px]">Hear it From our Learns !!</p>
        </section>
    </>
  );
};

export default Home;
