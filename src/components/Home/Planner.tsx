import Container from "../shared/Container";
import ImageAnimation from "../shared/ImageAnimation";
import LinkButton from "../shared/LinkButton";
import Reveal from "../shared/Reveal";
import SectionContainer from "../shared/SectionContainer";

const Planner = () => {
  return (
    <SectionContainer id="planner" className="mt-20 md:mt-28">
      <Container className="flex flex-col md:flex-row items-center gap-5 p-0 md:p-0 h-[500px] md:h-[273px] border border-ring rounded-5xl">
        <ImageAnimation
          src={"/assets/illustrations/svg_3.svg"}
          alt="Leadlly Planner"
          className=" flex-1 w-full h-[450px]"
        />

        <div className="flex-1 p-5 md:p-8 flex flex-col items-center md:items-start gap-5 overflow-hidden">
          <Reveal>
            <p className="text-xl md:text-2xl text-foreground text-center md:text-left">
              Missed revisions, broken routines, and inconsistent days slowly
              add up making you feel behind even when you’re working hard. It’s
              frustrating and exhausting.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <LinkButton
              href="/#"
              className="h-11 md:h-14 pl-5"
              iconContainerClassName="md:size-10 size-7"
            >
              Start Planning now
            </LinkButton>
          </Reveal>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default Planner;
