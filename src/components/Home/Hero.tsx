import { Download } from 'lucide-react';

type Props = {};
const Hero = (props: Props) => {
	return (
		<div className='flex flex-col justify-center items-center '>
			<h1 className='text-8xl mt-28 font-bold w-[50%] text-center text-blue-700'>
				Optimize your self studies
			</h1>
			<p className='text-2xl bg-gradient-to-r font-medium m-5 from-[#8B4CF4] via-[#FEB25E] to-[#8344F7] w-[70%] text-center bg-clip-text text-transparent'>
				Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual
				learning style and goals.
			</p>

			<button className='inline-flex gap-3 h-12 mt-5 animate-shimmer items-center justify-center rounded-md border border-blue-950 bg-[linear-gradient(110deg,#8B4CF4,45%,#B078F9,55%,#8B4CF4)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
				Download <Download className='size-5' />
			</button>
		</div>
	);
};
export default Hero;
