import Container from "../shared/Container";
import SectionContainer from "../shared/SectionContainer";
import WaveLines from "../ui/wavy-line";
import TestimonialsMarquee from "./TestimonialsMarquee";

const Testimonials = () => {
  return (
    <SectionContainer id="testimonial" className="bg-foreground">
      <Container>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center w-full gap-4">
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-medium tracking-[-6%] text-background">
              Student Stories
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl tracking-[-3%] text-center text-background">
              Real students, Real growth, Real results
            </p>
          </div>
          <div className="w-full opacity-50">
            <WaveLines />
          </div>
        </div>
        <div className="overflow-x-hidden">
          <TestimonialsMarquee />
        </div>
      </Container>
    </SectionContainer>
  );
};
export default Testimonials;
