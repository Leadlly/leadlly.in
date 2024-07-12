// IconWithLabel.tsx
import React, { ReactNode } from 'react';

interface IconWithLabelProps {
	icon: ReactNode;
	label: string;
}

const IconWithLabel: React.FC<IconWithLabelProps> = ({ icon, label }) => {
	return (
		<div className='flex items-center gap-10 justify-start'>
			<div className='size-[50px]'>{icon}</div>
			<div className='text-[#5B437D] font-semibold text-2xl w-96'>{label}</div>
		</div>
	);
};

export default IconWithLabel;
