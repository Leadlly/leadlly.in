import Footer from "@/components/shared/Footer";

import CohortFaq from "./CohortFaq";
import CohortFeatures from "./CohortFeatures";
import CohortHeader from "./CohortHeader";
import CohortHero from "./CohortHero";
import CohortHowItWorks from "./CohortHowItWorks";
import CohortMentor from "./CohortMentor";
import CohortPricing from "./CohortPricing";
import CohortStickyBar from "./CohortStickyBar";

export default function CohortLanding() {
  return (
    <div className="cohort-page font-sans overflow-x-hidden bg-white pb-[76px] antialiased selection:bg-[#d9c8f8]">
      <CohortHeader />
      <main>
        <CohortHero />
        <CohortFeatures />
        <CohortHowItWorks />
        <CohortMentor />
        <CohortPricing />
        <CohortFaq />
      </main>
      <Footer />
      <CohortStickyBar />
    </div>
  );
}
