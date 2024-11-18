import React from 'react';

interface StepProps {
	number: number;
	title: string;
	description: string;
}

const Step = ({
	number = 1,
	title = 'Stipend',
	description = 'Earn ₹2000/month with potential growth based on performance.',
}: StepProps) => {
	return (
		<div className={`flex w-full ${number % 2 === 0 ? '' : 'flex-row-reverse'}`}>
			<div className={`flex flex-col flex-1 ${number % 2 === 0 ? '' : '-translate-x-2 sm:-translate-x-3'}`}>
				<div className={`flex items-start gap-4 sm:gap-8 ${number % 2 === 0 ? 'flex-row-reverse' : ''}`}>
					<div className='h-full flex flex-col items-center justify-start'>
						<div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#7e3af2]' />
						{!(number == 6) && <div className='w-0.5 h-full bg-[#7e3af2] mt-2' />}
					</div>
					<div
						className={`flex w-full sm:w-[70%] flex-col gap-2 sm:gap-4 -translate-y-6 sm:-translate-y-10 ${
							number % 2 === 0 ? 'items-end text-right' : 'items-start text-left'
						} `}
					>
						<div className='relative flex'>
							<span
								className='text-4xl sm:text-6xl md:text-8xl font-bold relative z-10'
								style={{
									fontFamily: 'Inter, sans-serif',
									color: '#fff',
									WebkitTextStroke: 'calc(1em / 16) transparent',
									letterSpacing: 'calc(1em / 8)',
									padding: 'calc(1em / 32)',
									backgroundClip: 'text',
									WebkitBackgroundClip: 'text',
									backgroundImage: 'linear-gradient(173.29deg, #FFB35D 19.66%, #9654F4 79.35%)',
								}}
							>
								{number.toString().padStart(2, '0')}
							</span>
						</div>
						<h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-[#7e3af2]'>{title}</h3>
						<p className='font-semibold text-sm sm:text-base md:text-lg'>{description}</p>
					</div>
				</div>
			</div>
			<div className='flex-1'></div>
		</div>
	);
};

export default Step;
