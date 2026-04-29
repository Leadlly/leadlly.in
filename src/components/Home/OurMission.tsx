import React from "react";

import Container from "../shared/Container";
import SectionContainer from "../shared/SectionContainer";

const OurMission = () => {
  return (
    <SectionContainer className="bg-foreground bg-[url(/assets/illustrations/svg_7.svg)] bg-no-repeat bg-cover bg-top">
      <Container className="border-none text-background flex flex-col items-start gap-10">
        <div>
          <h4 className="text-3xl md:text-5xl lg:text-[64px] font-medium leading-tight">
            Our Mission
          </h4>

          <p className="text-xl md:text-2xl lg:text-[32px] font-medium">
            Building the future of personalised learning in India.
          </p>
        </div>

        <div className="flex flex-col items-start gap-7">
          <div>
            <h5 className="text-lg md:text-xl font-semibold">
              The Story Behind Leadlly
            </h5>
            <p className="text-base md:text-lg font-light opacity-70 mt-2">
              Leadlly was started by Manan Kushwaha, a student from NIT
              Jalandhar, inspired by his father&apos;s belief that no student
              should struggle alone. We realised most aspirants fail not because
              they lack knowledge, but because they lack structure,
              accountability, and personalisation.
            </p>
          </div>
          <div>
            <h5 className="text-lg md:text-xl font-semibold">
              What We&apos;re Changing
            </h5>
            <p className="text-base md:text-lg font-light opacity-70 mt-2">
              Leadlly is here to change that , to make every student&apos;s
              preparation journey smarter, calmer, and more consistent.
            </p>
          </div>
          <div>
            <h5 className="text-lg md:text-xl font-semibold">OUr Vision</h5>
            <p className="text-base md:text-lg font-light opacity-70 mt-2">
              To mentor every student in India , from the first chapter to their
              final exam.
            </p>
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default OurMission;
