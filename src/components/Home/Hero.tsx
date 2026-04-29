import Container from "../shared/Container";
import ImageAnimation from "../shared/ImageAnimation";
import LinkButton from "../shared/LinkButton";
import Reveal from "../shared/Reveal";
import SectionContainer from "../shared/SectionContainer";

const Hero = () => {
  return (
    <SectionContainer className="relative pt-36">
      <Container className="h-screen md:h-[636px] bg-[url(/assets/images/hero-bg.svg)] bg-no-repeat bg-size-[auto_300px] md:bg-size-[auto_493px] bg-left flex flex-col md:flex-row items-center justify-between gap-5  border border-ring rounded-5xl">
        <div className="flex-1 flex flex-col items-start gap-7">
          <Reveal>
            <h1 className="text-5xl md:text-[64px] font-medium text-foreground leading-tight">
              There&apos;s a better way to study.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-foreground">
              Leadlly personalizes your preparation based on how you study. Your
              pace, consistency, and accuracy.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <LinkButton href="#" className="pl-5">
              Find your better way
            </LinkButton>
          </Reveal>
        </div>

        <ImageAnimation
          src="/assets/illustrations/svg_5.svg"
          alt="hero-illustration"
          className="flex-1 h-full w-full"
        />
      </Container>
    </SectionContainer>
  );
};
export default Hero;
