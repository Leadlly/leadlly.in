'use client'
import { cn } from '@/utils/cn';
import { CircleCheck } from 'lucide-react';
import React from 'react';
import Reveal from './Reveal';
interface PricingCardProps {
	title: string;
	price: number;
	features: string[];
	isHighlighted: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, isHighlighted }) => {
	return (
		<Reveal 
			delay={isHighlighted ? 0.1 : 0.4}
			motionDivClass='rounded-[20px]'
		>
			<div
				className={cn('border p-10 min-w-[300px] rounded-[20px]', {
					'bg-white shadow-xl': isHighlighted,
					'bg-zinc-100': !isHighlighted,
				})}
			>
				<h2 className='text-sm text-[#666666] font-semibold mb-4'>{title}</h2>
				<p className='text-6xl font-bold mb-4'>
					${price} <span className='text-base text-[#666666]'>p/month</span>
				</p>
				<ul className='mb-6'>
					{features.map((feature, index) => (
						<li
							key={index}
							className='flex items-center mb-2 text-sm font-semibold gap-2 text-[#666666]'
						>
							<CircleCheck className='fill-black stroke-white' />
							{feature}
						</li>
					))}
				</ul>
				<button
					className={cn('py-2 px-4 rounded-lg', {
						'bg-purple-600 text-white': isHighlighted,
						'bg-white border': !isHighlighted,
					})}
				>
					Get Started
				</button>
			</div>
		</Reveal>
	);
};

export default PricingCard;
