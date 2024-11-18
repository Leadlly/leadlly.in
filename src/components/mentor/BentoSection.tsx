import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import BentoCalendarImg from '../../../public/assets/images/BentoCalender.svg';
import BentoMentorImg from '../../../public/assets/images/BentoMonitor.svg';
import BentoClockImg from '../../../public/assets/images/Bentoclock.svg';

interface CheckListProps {
	items: string[];
}

const CheckList = ({ items }: CheckListProps) => {
	return (
		<ul className='space-y-2 sm:space-y-4'>
			{items.map((item, index) => (
				<li
					key={index}
					className='flex items-center font-medium text-sm sm:text-base'
				>
					<Check className='text-purple-600 mr-2 size-3 sm:size-4 stroke-1' />
					{item}
				</li>
			))}
		</ul>
	);
};

interface BentoCardProps {
	title: string;
	subtitle: string;
	items: string[];
	className?: string;
	image?: any;
}

const BentoCard = ({ title, subtitle, items, className, image }: BentoCardProps) => {
	return (
		<div
			className={cn(
				'bg-purple-50 z-0 p-4 sm:p-6 lg:p-8 hover:scale-[1.02] relative transition-all rounded-xl sm:rounded-2xl duration-300 ease-in-out cursor-pointer border-2 border-purple-200/50 hover:border-purple-300/80',
				className
			)}
		>
			<div>
				<h3 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>{title}</h3>
				<p className='text-purple-600 mb-4 sm:mb-6 font-semibold text-sm sm:text-base'>{subtitle}</p>
			</div>
			<CheckList items={items} />
			{image ? (
				<div className='flex justify-center mb-4 sm:mb-6 absolute top-0 right-0 size-24 sm:size-32 lg:size-40'>
					<Image
						src={image}
						alt={`${title} illustration`}
						width={120}
						height={120}
						className='size-full'
					/>
				</div>
			) : null}
		</div>
	);
};

interface BentoGridProps {
	cards: BentoCardProps[];
}

const BentoGrid = ({ cards }: BentoGridProps) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-5 gap-4 sm:gap-6 w-full max-w-[924px] mx-auto'>
			{cards.map((card, index) => (
				<BentoCard
					key={index}
					{...card}
				/>
			))}
		</div>
	);
};

const BentoSection = () => {
	const cards: BentoCardProps[] = [
		{
			title: 'Inspire',
			subtitle: 'Consistency and Drive',
			items: [
				'Motivate and Encourage',
				'Foster consistence focus',
				'Share Practical advice',
				'Provide ongoing support',
			],
			className: 'md:col-span-2 md:row-span-1',
		},
		{
			title: 'Providing',
			subtitle: 'Guidance and Support',
			items: [
				'Providing one-on-one meetings',
				'Address Academic Challenges',
				'Share Expertise and Advice',
				'Motivation and Support Goals',
			],
			className: 'md:col-span-3',
			image: BentoCalendarImg,
		},
		{
			title: 'Monitoring',
			subtitle: 'Progress and Guidance',
			items: [
				'Track Student progress',
				'Monitor Development Regularly',
				'Provide tailored Feedback',
				'Boost Confidence and Strategies',
			],
			className: 'md:col-span-3',
			image: BentoMentorImg,
		},
		{
			title: 'Balanced With',
			subtitle: 'Flexible Work Hours',
			items: ['4-5 Hours Weekly', 'Balanced Acedemic and Mentoring'],
			className: 'md:col-span-2',
			image: BentoClockImg,
		},
	];

	return (
		<div className='container mx-auto px-4 py-8 sm:py-12 lg:py-16 my-6 sm:my-8 lg:my-10'>
			<div className='text-center mb-8 sm:mb-10 lg:mb-12'>
				<h2 className='text-blue-600 font-medium text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 lg:mb-4'>What You'll do</h2>
				<h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold'>
					<span className='bg-gradient-to-r from-purple-600/80 via-amber-400 to-purple-600/80 bg-clip-text text-transparent'>
						As Mentor
					</span>
				</h1>
			</div>
			<BentoGrid cards={cards} />
		</div>
	);
};

export default BentoSection;
