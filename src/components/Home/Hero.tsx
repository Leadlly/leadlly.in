'use client';
import { Download } from 'lucide-react';
import Marquee from './Marquee';
import Reveal from '../shared/Reveal';
type Props = {};
const Hero = (props: Props) => {
	return (
		<div className='flex flex-col relative justify-center items-center gap-10 overflow-x-hidden '>
			<h1 className='text-7xl mt-44 leading-tight font-bold flex flex-col  text-center text-primary-blue'>
				<Reveal>
					<span>Optimize your</span>
				</Reveal>
				<Reveal width='100%'>
					<span className='text-center'>self studies</span>
				</Reveal>
			</h1>{' '}
			<Reveal motionDivClass='flex justify-center'>
				<p className='text-xl bg-gradient-to-r font-medium  from-[#8B4CF4] via-[#FEB25E] to-[#8344F7] w-[60%] text-center bg-clip-text text-transparent'>
					We equip students with personalized learning tools and supportive mentors to conquer
					academic challenges and thrive in competitive exams.
				</p>
			</Reveal>
			<Reveal
				width='100%'
				motionDivClass='flex justify-center'
				delay={0.2}
			>
				<button className='inline-flex gap-3 h-12 animate-shimmer items-center justify-center rounded-md border border-blue-950 bg-[linear-gradient(110deg,#8B4CF4,45%,#B078F9,55%,#8B4CF4)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
					Download <Download className='size-5 ' />
				</button>
			</Reveal>
			<div className='mt-20 flex  items-center '>
				<div className='w-1/3'>
					<Reveal motionDivClass=''>
						<p className='text-[#5B437D] font-semibold text-xl  text-left ml-20'>
							Say goodbye to one-size-fits-all! We tailor study plans and resources to your
							individual learning style and goals.
						</p>
					</Reveal>
				</div>
				<div className='relative translate-x-40 flex-grow'>
					<video
						src='/assets/videos/comp.webm'
						loop
						muted
						autoPlay
						className=''
					></video>
				</div>
			</div>{' '}
			<Marquee />
			<div className='flex justify-start w-full'>
				<div>
					<h1 className='text-6xl ml-20 my-10 text-left font-bold  bg-gradient-to-r from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent'>
						Let's explore
					</h1>
				</div>
				<div></div>
			</div>
		</div>
	);
};
export default Hero;
