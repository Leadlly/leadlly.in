import BentoSection from '@/components/mentor/BentoSection';
import FooterSection from '@/components/mentor/FooterSection';
import HeroSection from '@/components/mentor/Hero';
import MentorNavbar from '@/components/mentor/MentorNavbar';
import PerksSection from '@/components/mentor/PerksSection';

type Props = {};
const page = (props: Props) => {
	return (
		<div className='bg-white'>
			<MentorNavbar />
      <HeroSection/>
      <BentoSection/>
      <PerksSection/>
      <FooterSection/>
		</div>
	);
};
export default page;
