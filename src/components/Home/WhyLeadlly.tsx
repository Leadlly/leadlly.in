import React from "react";

import Container from "../shared/Container";
import ImageAnimation from "../shared/ImageAnimation";
import Reveal from "../shared/Reveal";
import SectionContainer from "../shared/SectionContainer";

const items = [
  {
    title: "Consistency",
    description: "Turning effort into daily progress, one step at a time.",
  },
  {
    title: "Accountability",
    description: "Staying on track with measurable goals and clear milestones.",
  },
  {
    title: "Personalisation",
    description: "Learning at your pace, your way because you're unique.",
  },
];

const WhyLeadlly = () => {
  return (
    <SectionContainer>
      <Container className="flex flex-col gap-6 border-none">
        <Reveal>
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-5xl">
            What Makes <span className="text-primary">Leadlly</span> Different ?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base md:text-lg lg:text-2xl">
            At Leadlly, we believe that not every student is the same.
            That&apos;s why our platform personalises your study experience ,
            from your schedule to your strategy based on your unique learning
            pattern.
          </p>
        </Reveal>

        <div className="flex items-center justify-between gap-4">
          <Reveal
            delay={0.4}
            className="flex-1 h-full border-l border-ring px-8 flex flex-col items-start justify-between gap-10"
          >
            {items.map((item, idx) => (
              <div key={idx}>
                <h5 className="font-semibold text-lg md:text-xl">
                  {item.title}
                </h5>
                <p className="text-base md:text-lg">{item.description}</p>
              </div>
            ))}
          </Reveal>

          <ImageAnimation
            src="/assets/illustrations/svg_4.svg"
            alt="Why Leadlly"
            className="w-[486px] h-[502px] flex-1 hidden lg:flex"
          />
        </div>
      </Container>
    </SectionContainer>
  );
};

export default WhyLeadlly;
