import React from 'react';
import Image from 'next/image';
import HeroImg from '../../../public/assets/images/mentor.svg';

const HeroSection = () => {
	return (
		<div className='container mx-auto md:px-14 flex flex-col md:flex-row items-center justify-between pt-12 md:pt-24 lg:pt-48  pb-32 relative'>
			<div className='w-full md:w-1/2 lg:max-w-2xl'>
				<h2 className='text-purple-600 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium mb-2'>
					Get Hired !
				</h2>
				<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6'>
					<span className='bg-gradient-to-r from-purple-600/80 via-amber-400 to-purple-600/80 bg-clip-text text-transparent'>
						As Mentor
					</span>
					<span className='text-purple-600 block md:inline md:ml-2 font-medium text-3xl sm:text-4xl lg:text-5xl'>
						in Leadlly
					</span>
				</h1>
				<p className='font-medium text-base sm:text-lg lg:text-xl mb-6 md:mb-8 text-gray-700'>
					At Leadlly, we believe that the right mentorship can make all the difference. Our team of
					dedicated mentors, hailing from top-tier institutions, is here to provide you with
					personalized guidance and support.
				</p>
				<div className='flex flex-col sm:flex-row gap-4'>
					<button className='bg-orange-400 hover:bg-orange-500 transition-colors text-white px-4 md:px-6 py-2 rounded-full flex items-center justify-center text-base sm:text-lg w-full sm:w-auto'>
						<span className='mr-2'>▶</span>
						Demo Video
					</button>
					<button className='text-purple-600 hover:bg-purple-50 transition-colors px-4 md:px-6 py-2 rounded-full font-medium border-2 border-purple-600 flex items-center justify-center text-base sm:text-lg w-full sm:w-auto'>
						View More
						<span className='ml-2'>›</span>
					</button>
				</div>
			</div>
			<div className='w-full md:w-1/2 mt-12 md:mt-0 flex justify-center'>
				<Image
					src={HeroImg}
					alt='Hero Image'
					width={500}
					height={500}
					className='w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto'
					priority
				/>
			</div>
			<div className='absoluted'>
				<div className='absolute top-20 md:top-40 right-[10%] md:right-[20%] w-[30px] md:w-[46px]'>
					<Image
						src={require('../../../public/assets/images/mentorHero/book.svg')}
						alt='Book Icon'
						width={46}
						height={48}
						className='w-full h-auto'
					/>
				</div>
				<div className='absolute bottom-24 md:bottom-48 right-[35%] md:right-[45%] w-[60px] md:w-[102px]'>
					<Image
						src={require('../../../public/assets/images/mentorHero/curve.svg')}
						alt='Curve Icon'
						width={102}
						height={52}
						className='w-full h-auto'
					/>
				</div>
				<div className='absolute top-20 md:top-40 left-[40%] md:left-[50%] w-[40px] md:w-[73px]'>
					<Image
						src={require('../../../public/assets/images/mentorHero/plane.svg')}
						alt='Plane Icon'
						width={73}
						height={61}
						className='w-full h-auto'
					/>
				</div>
				<div className='absolute bottom-20 md:bottom-40 right-5 md:right-10 w-[20px] md:w-[34px]'>
					<Image
						src={require('../../../public/assets/images/mentorHero/star.svg')}
						alt='Star Icon'
						width={34}
						height={30}
						className='w-full h-auto'
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
