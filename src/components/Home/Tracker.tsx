'use client';
import { TrackerPoints } from '@/helpers/constants';
import Image from 'next/image';
import IconWithLabel from '../shared/IconWIthLabel';
import Reveal from '../shared/Reveal';
import RevealImage from '../shared/RevealImage';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import FloatButton from '../shared/FloatButton';

type Props = {};
const Tracker = (props: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.4 });

	return (
		<section ref={ref}>
			<div className='text-primary-blue text-[27px] md:text-6xl font-bold mx-10 md:mx-40 my-10 md:my-20'>
				<Reveal>
					<h1>Never lose.</h1>
				</Reveal>
				<Reveal>
					<h1>Track of your progress.</h1>
				</Reveal>
			</div>

			{/* Display for tab and desktop */}
			<div className='hidden md:block'>
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
						<p className='text-[#5B437D] font-semibold text-xl w-full md:w-96 text-left'>
							Monitor how many times you've revised each topic with current and cumulative
							efficiency.
						</p>
					}
					delay={0.2}
					motionDivClass='flex items-center justify-evenly'
					imagePosition='right' // Specify image position
				/>
			</div>

			{/* Display for mobile */}
			<div className='block md:hidden px-10'>
				<div className='flex flex-col items-center'>
					<Reveal>
						<Image
							alt='Tracker'
							height={312}
							width={616}
							src={'/assets/images/tracker.png'}
							className='z-10'
						/>
					</Reveal>
					<Reveal>
						<p className='text-[#5B437D] font-semibold text-[11px] md:text-xl text-center mt-10'>
							Monitor how many times you've revised each topic with current and cumulative
							efficiency.
						</p>
					</Reveal>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2  gap-y-8 px-14 sm:px-48  md:p-48 md:py-24 py-14'>
				{TrackerPoints.map((item, index) => (
					<IconWithLabel
						key={index}
						icon={<item.icon className='size-full' />}
						label={item.label}
						delay={(index + 1) * 0.15}
					/>
				))}
			</div>
			{/* <FloatButton
				isInView={isInView}
				text='Zoom into tracker'
			/> */}
		</section>
	);
};

export default Tracker;
