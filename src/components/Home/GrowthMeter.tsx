'use client';
import Image from 'next/image';
import { GrowthMeterPoints } from '@/helpers/constants';
import IconWithLabel from '../shared/IconWIthLabel';
import Reveal from '../shared/Reveal';
import RevealImage from '../shared/RevealImage';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import FloatButton from '../shared/FloatButton';

type Props = {};
const GrowthMeter = (props: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.4 });
	return (
		<section ref={ref}>
			<div className='text-primary-blue text-6xl font-bold mx-40 my-20'>
				<Reveal>
					<h1>Stay motivated. </h1>
				</Reveal>
				<Reveal>
					<h1>Visualize your progress.</h1>
				</Reveal>
			</div>
			<RevealImage
				rightItem={
					<Image
						alt='growthMeter'
						height={498}
						width={498}
						src={'/assets/images/growthMeter.png'}
						className='z-10'
					/>
				}
				leftItem={
					<p className='text-[#5B437D] font-semibold text-xl w-96 text-right'>
						Watch your self-study soar with the Growth Meter - see daily, weekly, and monthly
						progress take flight!
					</p>
				}
				delay={0.2}
				motionDivClass='flex items-center justify-evenly'
				imagePosition='right' // Specify image position
			/>
			<div className='grid grid-cols-2 gap-y-14 p-28 py-14'>
				{GrowthMeterPoints.map((item, index) => (
					<IconWithLabel
						key={index}
						icon={<item.icon className='size-full' />}
						label={item.label}
						delay={(index + 1) * 0.15}
					/>
				))}
			</div>
			<FloatButton
				isInView={isInView}
				text='Explore growth meter'
			/>
		</section>
	);
};

export default GrowthMeter;
