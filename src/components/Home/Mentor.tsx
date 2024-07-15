'use client';
import { MentorPoints } from '@/helpers/constants';
import Image from 'next/image';
import IconWithLabel from '../shared/IconWIthLabel';
import Reveal from '../shared/Reveal';
import RevealImage from '../shared/RevealImage';

type Props = {};
const Mentor = (props: Props) => {
	return (
		<section>
			<div className='text-primary-blue text-6xl font-bold mx-40 my-20'>
				<Reveal>
					<h1>Don't Go It Alone. </h1>
				</Reveal>
				<Reveal>
					<h1>Succeed with your mentor.</h1>
				</Reveal>
			</div>
			<RevealImage
				rightItem={
					<Image
						alt='mentor'
						height={439}
						width={565}
						src={'/assets/images/mentor.png'}
					/>
				}
				leftItem={
					<p className='text-[#5B437D] font-semibold text-xl w-96 text-left'>
						Gain valuable insights and strategies from someone experienced in your field of study.
					</p>
				}
				delay={0.2}
				motionDivClass='flex items-center justify-evenly'
				imagePosition='right' // Specify image position
			/>
			<div className='grid grid-cols-2 gap-y-14 p-28 py-14'>
				{MentorPoints.map((item, index) => (
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

export default Mentor;
