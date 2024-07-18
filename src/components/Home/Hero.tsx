'use client';
import { Download } from 'lucide-react';
import Marquee from './Marquee';
import Reveal from '../shared/Reveal';

type Props = {};
const Hero = (props: Props) => {
	return (
		<div className='flex flex-col relative justify-center items-center gap-10 overflow-x-hidden px-4 sm:px-10'>
			<h1 className='text-4xl sm:text-7xl mt-20 sm:mt-44 leading-tight font-bold flex flex-col text-center text-primary-blue'>
				<Reveal>
					<span>Optimize your</span>
				</Reveal>
				<Reveal width='100%'>
					<span className='text-center'>self studies</span>
				</Reveal>
			</h1>
			<Reveal motionDivClass='flex justify-center'>
				<p className='text-xs sm:text-xl bg-gradient-to-r font-medium from-[#8B4CF4] via-[#FEB25E] to-[#8344F7] w-[90%] sm:w-[60%] text-center bg-clip-text text-transparent'>
					We equip students with personalized learning tools and supportive mentors to conquer
					academic challenges and thrive in competitive exams.
				</p>
			</Reveal>
			<Reveal
				width='100%'
				motionDivClass='flex justify-center'
				delay={0.2}
			>
				<button className='inline-flex gap-2 h-10 sm:h-12 items-center justify-center rounded-md border border-blue-950 bg-[linear-gradient(110deg,#8B4CF4,45%,#B078F9,55%,#8B4CF4)] bg-[length:200%_100%] px-4 sm:px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
					Download <Download className='w-4 h-4 sm:w-5 sm:h-5' />
				</button>
			</Reveal>
			<div className='mt-10 sm:mt-20 flex flex-col sm:flex-row items-center'>
				<div className='w-full sm:w-1/3 mb-10 sm:mb-0'>
					<Reveal motionDivClass=''>
						<p className='text-[#5B437D] font-semibold text-xs ml-5 max-sm:max-w-60 sm:text-xl text-left sm:ml-20'>
							Say goodbye to one-size-fits-all! We tailor study plans and resources to your
							individual learning style and goals.
						</p>
					</Reveal>
				</div>
				<div className='relative sm:translate-x-40 flex-grow w-full sm:w-auto'>
					<video
						src='/assets/videos/comp.webm'
						loop
						muted
						autoPlay
						className='w-full sm:w-auto'
					></video>
				</div>
			</div>
			<Marquee />
			<div className='flex flex-col sm:flex-row justify-start w-full'>
				<div className='w-full sm:w-auto'>
					<h1 className='text-4xl sm:text-6xl ml-4 sm:ml-20 my-5 text-left font-bold bg-gradient-to-r from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent'>
						Let's explore
					</h1>
				</div>
			</div>
		</div>
	);
};
export default Hero;
