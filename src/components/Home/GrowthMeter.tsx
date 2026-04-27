import { ChevronRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import Container from "../shared/Container";
import ImageAnimation from "../shared/ImageAnimation";
import LinkButton from "../shared/LinkButton";
import Reveal from "../shared/Reveal";
import SectionContainer from "../shared/SectionContainer";

const GrowthMeter = () => {
  return (
    <SectionContainer className="px-0">
      <Container className="flex items-center justify-between gap-3 border-none">
        <ImageAnimation
          src={"/assets/illustrations/svg_6.svg"}
          alt="Stop Planning, Start Executing"
          className="h-[535px] w-full flex-1 hidden md:block"
        />

        <div className="flex-1 flex flex-col md:items-end gap-6">
          <Reveal>
            <h3 className="text-5xl md:text-[60px] md:whitespace-nowrap font-medium text-foreground leading-tight tracking-[-9%]">
              Stop planning , Start{" "}
              <span className="text-primary">Executing</span>.
            </h3>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-medium text-2xl md:text-right leading-relaxed">
              Leadlly is a personal study management system
              <br className="hidden md:inline-block" /> built for serious exam
              aspirants, built for you.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex flex-col items-start gap-6">
              <ul className="md:max-w-[512px] w-full bg-primary p-7 rounded-3xl flex flex-col items-start gap-3 text-primary-foreground text-xl md:text-2xl font-medium">
                {[
                  "Daily Study Structure",
                  "Smart Revision System",
                  "Progress & Mistake Tracking",
                  "Guidance from IITian & GMCian Mentors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <HugeiconsIcon icon={ChevronRight} className="mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Reveal delay={0.7} className="z-10">
                <LinkButton href="#" className="pl-5">
                  Start Planning Now
                </LinkButton>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </Container>

      <Container className="p-0 md:p-0  overflow-hidden rounded-[84px] bg-background relative z-10">
        <div className="bg-primary/15 grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center px-8 md:px-16 py-5">
          <div className="flex flex-col items-start gap-4 md:col-span-2">
            <h4 className="text-3xl md:text-[40px] font-medium tracking-[-4%]">
              Not motivation. Not content .{" "}
              <span className="text-primary">A System.</span>
            </h4>

            <p className="text-xl md:text-2xl tracking-[-5%]">
              Leadlly manages your preparation so your effort actually converts
              into results.
            </p>
          </div>

          <ImageAnimation
            src={"/assets/illustrations/svg_8.svg"}
            alt="Leadlly manages your preparation so your effort actually converts into results."
            className="h-[250px] w-full"
          />
        </div>
      </Container>
    </SectionContainer>
  );
};

export default GrowthMeter;
