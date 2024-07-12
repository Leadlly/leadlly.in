import Contact from '@/components/Home/Contact';
import GrowthMeter from '@/components/Home/GrowthMeter';
import Hero from '@/components/Home/Hero';
import Mentor from '@/components/Home/Mentor';
import Planner from '@/components/Home/Planner';
import PricingSection from '@/components/Home/Pricing';
import Testimonals from '@/components/Home/Testimonals';
import Tracker from '@/components/Home/Tracker';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

export default function GridBackgroundDemo() {
	return (
		<>
			<div className='gridGradient'>
				{' '}
				<NavBar />
				<Hero />
				<Planner />
				<Tracker />
				<GrowthMeter />
				<Mentor />
				<Testimonals />
				<PricingSection />
				<Contact />
			</div>
		</>
	);
}
