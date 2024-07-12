'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

type Testimonial = {
	name: string;
	text: string;
	avatar: string;
};

type Props = {};

const testimonials: Testimonial[] = [
	{
		name: 'John Doe',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lacus ac dignissim efficitur, ante orci varius turpis, non accumsan urna lorem vitae velit. Nunc accumsan odio nec egestas vulputate. Ut semper aliquet euismod..',
		avatar: '/assets/avatar.png',
	},
	{
		name: 'Jane Smith',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lacus ac dignissim efficitur, ante orci varius turpis, non accumsan urna lorem vitae velit. Nunc accumsan odio nec egestas vulputate. Ut semper aliquet euismod..',
		avatar: '/assets/avatar.png',
	},
	{
		name: 'Alice Johnson',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lacus ac dignissim efficitur, ante orci varius turpis, non accumsan urna lorem vitae velit. Nunc accumsan odio nec egestas vulputate. Ut semper aliquet euismod..',
		avatar: '/assets/avatar.png',
	},
];

const TestimonialsMarquee: React.FC<Props> = () => {
	return (
		<div className='container mx-auto my-20  w-full flex MarqueeGradient'>
			<MarqueeMotionDiv testimonials={testimonials} />
			<MarqueeMotionDiv testimonials={testimonials} />
		</div>
	);
};

const MarqueeMotionDiv = ({ testimonials }: { testimonials: Testimonial[] }) => {
	return (
		<motion.div
			initial={{ x: '0' }}
			animate={{ x: '-100%' }}
			transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
			className='flex'
		>
			{testimonials.map((testimonial, index) => (
				<div
					key={index}
					className={cn(
						'flex flex-col items-center gap-5 p-10 mr-3 min-h-[340px] min-w-[370px]',
						index % 2 == 0
							? 'border-2 border-[#D0B5F9] rounded-[40px] bg-[#E8DAEE] text-white'
							: 'border-2 border-black/30 rounded-[40px] bg-[#FEFBFF] text-black'
					)}
				>
					<div className='flex items-center gap-5'>
						<div className='size-14 rounded-full overflow-hidden '>
							<img
								src={testimonial.avatar}
								alt={`${testimonial.name} avatar`}
								className='size-full object-cover object-center '
							/>
						</div>
						<p className='font-semibold text-xl '>{testimonial.name}</p>
					</div>

					<div className='text-center'>
						<p className='font-medium  text-left'>{testimonial.text}</p>
					</div>
				</div>
			))}
		</motion.div>
	);
};

export default TestimonialsMarquee;
