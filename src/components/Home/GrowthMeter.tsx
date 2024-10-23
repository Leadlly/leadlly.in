"use client";
import Image from "next/image";
import { GrowthMeterPoints } from "@/helpers/constants";
import IconWithLabel from "../shared/IconWIthLabel";
import Reveal from "../shared/Reveal";
import RevealImage from "../shared/RevealImage";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import FloatButton from "../shared/FloatButton";
import Modal from "../shared/Modal";

type Props = {};
const GrowthMeter = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section ref={ref}>
      <div className="text-primary-blue text-[27px] md:text-6xl font-bold mx-10 md:mx-40 my-10 md:my-20">
        <Reveal>
          <h1>Stay motivated.</h1>
        </Reveal>
        <Reveal>
          <h1>Visualize your progress.</h1>
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
      <FloatButton
        isInView={isInView}
        text='Explore growth meter'
        onClick={handleButtonClick}
      />
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Growth Meter Details</h2>
            <p>Here you can display graphs and insights about the user's progress.</p>
            {/* Add your graphs and insights components here */}
          </div>
        </Modal>
      )}
    </section>
  );
};

export default GrowthMeter;
