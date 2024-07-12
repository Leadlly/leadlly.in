import { Download } from 'lucide-react';
import Marquee from './Marquee';

type Props = {};
const Hero = (props: Props) => {
	return (
		<div className='flex flex-col justify-center items-center gap-10 overflow-x-hidden '>
			<h1 className='text-7xl mt-44 leading-tight font-bold w-[40%] text-center text-primary-blue'>
				Optimize your self studies
			</h1>
			<p className='text-xl bg-gradient-to-r font-medium  from-[#8B4CF4] via-[#FEB25E] to-[#8344F7] w-[60%] text-center bg-clip-text text-transparent'>
				Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual
				learning style and goals.
			</p>
			<button className='inline-flex gap-3 h-12 animate-shimmer items-center justify-center rounded-md border border-blue-950 bg-[linear-gradient(110deg,#8B4CF4,45%,#B078F9,55%,#8B4CF4)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
				Download <Download className='size-5' />
			</button>
			<div className='mt-20 flex gap-40 items-center relative'>
				<p className='text-[#938F8D] text-xl w-2/5 ml-20'>
					We equip students with personalized learning tools and supportive mentors to conquer
					academic challenges and thrive in competitive exams
				</p>
				<div className='relative translate-x-40' >
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
