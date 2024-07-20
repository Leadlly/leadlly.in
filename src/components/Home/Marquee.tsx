'use client';
import React from 'react';
import { motion } from 'framer-motion';
import TrackerIcon from '../Icons/TrackerIcon';
import DashboardIcon from '../Icons/DashboardIcon';
import PlannerIcon from '../Icons/PlannerIcon';
import ChatIcon from '../Icons/ChatIcon';
import GrowthMeterIcon from '../Icons/GrowthMeterIcon';
import LibertyIcon from '../Icons/LibertyIcon';
import StudyRoomIcon from '../Icons/StudyRoomIcon';
import QuizIcon from '../Icons/QuizIcon';
import ErrorBookIcon from '../Icons/ErrorBookIcon';
import WorkshopIcon from '../Icons/WorkshopIcon';

type Props = {};

const MarqueeList: React.FC<Props> = () => {
	const items = [
		{ label: 'Planner', icon: PlannerIcon },
		{ label: 'Tracker', icon: TrackerIcon },
		{ label: 'Chat', icon: ChatIcon },
		{ label: 'Quizzes', icon: QuizIcon },
		{ label: 'Errorbook', icon: ErrorBookIcon },
		{ label: 'Growth Meter', icon: GrowthMeterIcon },
		{ label: 'Workshops', icon: WorkshopIcon },
		{ label: 'Liberty', icon: LibertyIcon },
		{ label: 'Study Room', icon: StudyRoomIcon },
	];

	return (
		<div className='container mx-auto my-5 md:my-20	w-full flex MarqueeGradient'>
			<MarqueeMotionDiv items={items} />
			<MarqueeMotionDiv items={items} />
		</div>
	);
};

const MarqueeMotionDiv = ({ items }: { items: any[] }) => {
	return (
		<motion.div
			initial={{ x: '-100%' }}
			animate={{ x: '0' }}
			transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
			className='flex '
		>
			{' '}
			{items.map((item, index) => (
				<div
					key={index}
					className='flex flex-grow items-center gap-3 md:gap-5 pr-14 md:pr-20'
				>
					<div className='size-5'>
						<item.icon className='size-full stroke-[#2B2B2B]' />
					</div>
					<span className='font-medium text-xl text-[#2B2B2B] text-nowrap'>{item.label}</span>
				</div>
			))}
		</motion.div>
	);
};
export default MarqueeList;
