'use client';
import React, { useEffect } from 'react';
import { AnimationControls, motion, useAnimation } from 'framer-motion';
import { cn } from '@/utils/cn';

type Testimonial = {
	name: string;
	text: string;
	avatar?: string;
	aspirantOf?: string;
};

type Props = {};

const testimonials: Testimonial[] = [
	{
		name: 'Aadhya',
		aspirantOf: 'NEET Aspirant',
		text: "Talking about revision tracker and planners both these things helped me a lot and nearly stopped all my procrastination and anxiousness. And my mentor was Saumya didi. She is really helpful and relatable. She never disappoint me in her responses and I've tried doing what she told me to do and it has helped significantly in my process of learning better.",
	},
	{
		name: 'Vaibhav',
		aspirantOf: 'JEE Aspirant',
		text: 'Mahip bhaiya is a very good mentor, the way in which he guided me and the tasks that he gave me are very good. I saw improvement in my learning skills. Also tracker and error book ne bhi meri bahut help ki. Overall leadlly helped me a lot in my journey....',
	},
	{
		name: 'Bhavya Dubey',
		aspirantOf: 'NEET Aspirant',
		text: 'My mentor was Manan Bhaiya, He is a very good guide. He use to talk in a friendly manner( never felt that I am talking to an elder).He use to motivate me even in bad situations( like getting low grades..). After all, under his guidance I have seen good changes in my schedule and in myself ...',
	},
	{
		name: 'Krishna Yadav',
		aspirantOf: 'Boards student',
		text: 'Leadlly seriously rocks! Their tips, support, and all that expert knowledge totally helped me level up. Thanks for being there every step of the way',
	},
];

const TestimonialsMarquee: React.FC<Props> = () => {
	const controls = useAnimation();
	useEffect(() => {
		controls.start({
			x: '-100%',
			transition: { duration: 20, repeat: Infinity, ease: 'linear' },
		});
	}, []);
	const handleMouseEnter = () => {
		controls.stop();
	};

	const handleMouseLeave = () => {
		controls.start({
			x: '-100%',
			transition: { duration: 20, repeat: Infinity, ease: 'linear' },
		});
	};

	return (
		<motion.div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className='container mx-auto my-10 md:my-20 w-full flex overflow-hidden MarqueeGradient'
		>
			<MarqueeMotionDiv
				testimonials={testimonials}
				controls={controls}
			/>
			<MarqueeMotionDiv
				testimonials={testimonials}
				controls={controls}
			/>
		</motion.div>
	);
};

const MarqueeMotionDiv = ({
	testimonials,
	controls,
}: {
	testimonials: Testimonial[];
	controls: AnimationControls;
}) => {
	return (
		<motion.div
			initial={{ x: '0' }}
			animate={controls}
			className='flex'
			whileHover={{ animationPlayState: 'paused' }}
		>
			{testimonials.map((testimonial, index) => (
				<div
					key={index}
					className={cn(
						'flex flex-col items-center gap-3 md:gap-5 p-5 md:p-10 mr-3 min-h-[200px] min-w-[300px] md:max-h-[340px] md:min-w-[370px]',
						index % 2 == 0
							? 'border-2 border-[#D0B5F9] rounded-[20px] md:rounded-[40px] bg-[#E8DAEE] text-white'
							: 'border-2 border-black/30 rounded-[20px] md:rounded-[40px] bg-[#FEFBFF] text-black'
					)}
				>
					<div className='flex items-center gap-3 md:gap-5'>
						<div className='w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden'>
							{testimonial.avatar ? (
								<img
									src={testimonial.avatar}
									alt={`${testimonial.name} avatar`}
									className='w-full h-full object-cover object-center'
								/>
							) : (
								<div className='w-full h-full text-center items-center flex justify-center text-2xl md:text-4xl bg-slate-200'>
									{testimonial.name[0]}
								</div>
							)}
						</div>
						<div className='flex flex-col'>
							{' '}
							<p className='font-semibold text-base md:text-xl'>{testimonial.name}</p>
							<p className='text-sm'>{testimonial.aspirantOf}</p>
						</div>
					</div>

					<div className='text-center'>
						<p className='font-medium text-sm md:text-base text-left line-clamp-[7]'>{testimonial.text}</p>
					</div>
				</div>
			))}
		</motion.div>
	);
};

export default TestimonialsMarquee;
