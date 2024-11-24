import Contact from "@/components/Home/Contact";
import DownloadSection from "@/components/Home/Download";
import GrowthMeter from "@/components/Home/GrowthMeter";
import Hero from "@/components/Home/Hero";
import Mentor from "@/components/Home/Mentor";
import Planner from "@/components/Home/Planner";
import PricingSection from "@/components/Home/Pricing";
import Social from "@/components/Home/Social";
import Testimonals from "@/components/Home/Testimonals";
import Tracker from "@/components/Home/Tracker";
<<<<<<< HEAD
=======
import Footer from "@/components/shared/Footer";
>>>>>>> 49e543728f0be3721ff1607b73be763045a93166
import NavBar from "@/components/shared/NavBar";

export default function GridBackgroundDemo() {
	return (
		<>
			<div className="gridGradient">
				<NavBar />
				<Hero />
				<Planner />
				<Tracker />
				<GrowthMeter />
				<Mentor />
				<Testimonals />
				{/* <PricingSection />
				<Contact /> */}
<<<<<<< HEAD
				<DownloadSection />
				<Social />
			</div>
		</>
	);
=======
        <DownloadSection />
        {/* <Social /> */}
        <Footer />
      </div>
    </>
  );
>>>>>>> 49e543728f0be3721ff1607b73be763045a93166
}
