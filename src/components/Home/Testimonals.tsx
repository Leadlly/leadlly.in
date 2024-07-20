import TestimonialsMarquee from './TestimonialsMarquee';

type Props = {};
const Testimonials = (props: Props) => {
	return (
		<section className='px-4 md:px-10 lg:px-20' id='testimonial'>
			<div className='flex justify-start w-full'>
				<div>
					<h1 className='text-3xl md:text-4xl lg:text-5xl my-10 text-left font-bold bg-gradient-to-r from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent'>
						Testimonials
					</h1>
				</div>
				<div></div>
			</div>
			<div className='overflow-x-hidden'>
				<TestimonialsMarquee />
			</div>
		</section>
	);
};
export default Testimonials;
