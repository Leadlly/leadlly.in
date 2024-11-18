import BentoSection from '@/components/mentor/BentoSection';
import FooterSection from '@/components/mentor/FooterSection';
import HeroSection from '@/components/mentor/Hero';
import MentorNavbar from '@/components/mentor/MentorNavbar';
import PerksSection from '@/components/mentor/PerksSection';
import Footer from '@/components/shared/Footer';

type Props = {};
const page = (props: Props) => {
	return (
		<div className='gridGradient'>
			<MentorNavbar />
			<HeroSection />
			<BentoSection />
			<PerksSection />
			<FooterSection />
			<Footer />
		</div>
	);
};
export default page;
