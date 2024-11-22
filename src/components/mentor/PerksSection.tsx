import Step from "./Step";

type Props = {};
const PerksSection = (props: Props) => {
  const steps = [
    {
      number: 1,
      title: "Stipend",
      description:
        "Earn ₹2000/month with potential growth based on performance.",
    },
    {
      number: 2,
      title: "Certification",
      description:
        "Get a Leadlly internship certificate to boost your professional credentials.",
    },
    {
      number: 3,
      title: "Flexible Hours",
      description:
        "Commit only 4-5 hours weekly, perfectly balancing academics and work.",
    },
    {
      number: 4,
      title: "Skill Development",
      description:
        "Enhance mentoring, communication, and leadership skills while guiding aspirants.",
    },
    {
      number: 5,
      title: "Networking Opportunities",
      description:
        "Connect with mentors and professionals for valuable insights and learning.",
    },
    {
      number: 6,
      title: "Real-World Experience",
      description:
        "Build a strong foundation for future academic or professional growth as a mentor.",
    },
  ];

  return (
    <section
      className="container mx-auto px-4 py-8 sm:py-12 lg:py-16"
      id="perks"
    >
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-blue-600 font-medium text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 lg:mb-4">
          Perks Of Joining Leadlly
        </h2>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
          <span className="bg-gradient-to-r from-purple-600/80 via-amber-400 to-purple-600/80 bg-clip-text text-transparent">
            As Mentor
          </span>
        </h1>
      </div>
      <div className="flex flex-col gap-4 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <Step
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};
export default PerksSection;
