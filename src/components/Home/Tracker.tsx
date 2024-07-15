'use client';
import { TrackerPoints } from '@/helpers/constants';
import Image from 'next/image';
import IconWithLabel from '../shared/IconWIthLabel';
import Reveal from '../shared/Reveal';
import RevealImage from '../shared/RevealImage'; // Import the RevealImage component

type Props = {};
const Tracker = (props: Props) => {
	return (
		<section>
			<div className='text-primary-blue text-6xl font-bold mx-40 my-20'>
				<Reveal>
					<h1>Never lose.</h1>
				</Reveal>
				<Reveal>
					<h1>Track of your progress.</h1>
				</Reveal>
			</div>
			<RevealImage
				rightItem={
					<Image
						alt='Tracker'
						height={312}
						width={616}
						src={'/assets/images/tracker.png'}
						className='z-10'
					/>
				}
				leftItem={
					<p className='text-[#5B437D] font-semibold text-xl w-96 text-left'>
						Monitor how many times you've revised each topic with current and cumulative efficiency.
					</p>
				}
				delay={0.2}
				motionDivClass='flex items-center justify-evenly'
				imagePosition='right' // Specify image position
			/>
			<div className='grid grid-cols-2 gap-y-14 p-28 py-14'>
				{TrackerPoints.map((item, index) => (
					<IconWithLabel
						key={index}
						icon={<item.icon className='size-full' />}
						label={item.label}
						delay={(index + 1) * 0.15}
					/>
				))}
			</div>
			{/* <FloatButton text="Dive into planner"/> */}
		</section>
	);
};

export default Tracker;
