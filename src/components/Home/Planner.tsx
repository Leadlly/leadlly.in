'use client';
import Image from 'next/image';
import IconWithLabel from '../shared/IconWIthLabel';
import { PlannerPoints } from '@/helpers/constants';
import Reveal from '../shared/Reveal';
import RevealImage from '../shared/RevealImage';
import FloatButton from '../shared/FloatButton';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

type Props = {};

const Planner = (props: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.4 });

	return (
		<section ref={ref}>
			<div className='text-primary-blue max-sm:w-40 text-[27px] sm:text-6xl font-bold mx-10 sm:mx-40 my-10 sm:my-20'>
				<Reveal>
					<h1>Planner.</h1>
				</Reveal>
				<Reveal>
					<h1>Personalized for you.</h1>
				</Reveal>
			</div>

			<div className='hidden sm:block'>
				<RevealImage
					rightItem={
						<Image
							alt='planner'
							height={312}
							width={616}
							src={'/assets/images/planner.png'}
							className='z-10'
						/>
					}
					leftItem={
						<p className='text-[#5B437D] font-semibold text-xl w-full sm:w-96 text-right'>
							Ditch generic study plans and level up your revision with Leadlly's intelligent
							Revision Planner!
						</p>
					}
					delay={0.2}
					motionDivClass='flex items-center justify-evenly'
					imagePosition='right'
				/>
			</div>

			<div className='block sm:hidden px-10'>
				<div className='flex flex-col items-center'>
					<Reveal>
						<Image
							alt='planner'
							height={312}
							width={616}
							src={'/assets/images/planner.png'}
							className='z-10'
						/>
					</Reveal>
					<Reveal>
						<p className='text-[#5B437D] font-semibold text-[11px] sm:text-xl text-center mt-10'>
							Ditch generic study plans and level up your revision with Leadlly's intelligent
							Revision Planner!
						</p>
					</Reveal>
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-y-8 px-14 sm:p-28 py-14'>
				{PlannerPoints.map((item, index) => (
					<IconWithLabel
						key={index}
						icon={<item.icon className='size-full ' />}
						label={item.label}
						delay={(index + 1) * 0.15}
					/>
				))}
			</div>
			{/* <FloatButton
				isInView={isInView}
				text='Dive into planner'
			/> */}
		</section>
	);
};

export default Planner;
