'use client';
import Image from 'next/image';
import IconWithLabel from '../shared/IconWIthLabel';
import { PlannerPoints } from '@/helpers/constants';
import Reveal from '../shared/Reveal';
import RevealImage from '../shared/RevealImage';

type Props = {};
const Planner = (props: Props) => {
	return (
		<section>
			<div className='text-primary-blue text-6xl font-bold mx-40 my-20'>
				<Reveal>
					<h1>Planner.</h1>
				</Reveal>
				<Reveal>
					<h1>Personalized for you.</h1>
				</Reveal>
			</div>
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
					<p className='text-[#5B437D] font-semibold text-xl w-96 text-right'>
						Ditch generic study plans and level up your revision with Leadlly's intelligent Revision
						Planner!
					</p>
				}
				delay={0.2}
				motionDivClass='flex items-center justify-evenly'
				imagePosition='right' // Specify image position
			/>
			<div className='grid grid-cols-2 gap-y-14 p-28 py-14'>
				{PlannerPoints.map((item, index) => (
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

export default Planner;
