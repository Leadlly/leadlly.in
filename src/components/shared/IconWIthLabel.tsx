'use client';
import React, { ReactNode } from 'react';
import Reveal from './Reveal';

interface IconWithLabelProps {
	icon: ReactNode;
	label: string;
	delay?:number
}

const IconWithLabel: React.FC<IconWithLabelProps> = ({ icon, label, delay=0.2}) => {
	return (
		<Reveal delay={delay}>
			<div className='flex items-center gap-10 justify-start px-32'>
				<div className='size-[50px]'>{icon}</div>
				<div className='text-[#5B437D] font-semibold text-2xl max-w-96'>{label}</div>
			</div>
		</Reveal>
	);
};

export default IconWithLabel;
