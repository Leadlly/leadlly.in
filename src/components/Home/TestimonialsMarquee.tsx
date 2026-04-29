"use client";

import React, { useEffect } from "react";

import { motion, useAnimation, type TargetAndTransition } from "motion/react";

import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  text: string;
  avatar?: string;
  aspirantOf?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aadhya",
    aspirantOf: "NEET Aspirant",
    text: "Talking about revision tracker and planners both these things helped me a lot and nearly stopped all my procrastination and anxiousness. And my mentor was Saumya didi. She is really helpful and relatable. She never disappoint me in her responses and I've tried doing what she told me to do and it has helped significantly in my process of learning better.",
  },
  {
    name: "Vaibhav",
    aspirantOf: "JEE Aspirant",
    text: "Mahip bhaiya is a very good mentor, the way in which he guided me and the tasks that he gave me are very good. I saw improvement in my learning skills. Also tracker and error book ne bhi meri bahut help ki. Overall leadlly helped me a lot in my journey....",
  },
  {
    name: "Bhavya Dubey",
    aspirantOf: "NEET Aspirant",
    text: "My mentor was Manan Bhaiya, He is a very good guide. He use to talk in a friendly manner( never felt that I am talking to an elder).He use to motivate me even in bad situations( like getting low grades..). After all, under his guidance I have seen good changes in my schedule and in myself ...",
  },
  {
    name: "Krishna Yadav",
    aspirantOf: "Boards student",
    text: "Leadlly seriously rocks! Their tips, support, and all that expert knowledge totally helped me level up. Thanks for being there every step of the way",
  },
];

const TestimonialsMarquee = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-100%",
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: "-100%",
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    });
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="my-10 md:my-20 w-full flex overflow-hidden MarqueeGradient"
    >
      <MarqueeMotionDiv testimonials={testimonials} controls={controls} />
      <MarqueeMotionDiv testimonials={testimonials} controls={controls} />
    </motion.div>
  );
};

const MarqueeMotionDiv = ({
  testimonials,
  controls,
}: {
  testimonials: Testimonial[];
  controls: TargetAndTransition;
}) => {
  return (
    <motion.div
      initial={{ x: "0" }}
      animate={controls}
      className="flex"
      whileHover={{ animationPlayState: "paused" }}
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col items-start gap-3 md:gap-5 p-5 md:p-10 mr-3 min-h-[200px] min-w-[300px] md:min-w-[370px] bg-background rounded-5xl",
          )}
        >
          <div className="">
            <div className="flex flex-col">
              <p className="font-medium text-2xl md:text-3xl lg:text-[40px]">
                {testimonial.name}
              </p>
              <p className="text-base md:text-lg lg:text-2xl">
                {testimonial.aspirantOf}
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="font-medium text-sm md:text-base text-left">
              {testimonial.text}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default TestimonialsMarquee;
