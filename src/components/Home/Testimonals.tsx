import TestimonialsMarquee from "./TestimonialsMarquee";

type Props = {}
const Testimonals = (props: Props) => {
  return (
		<section>
			<div className='flex justify-start w-full'>
				<div>
					<h1 className='text-5xl ml-20 my-10 text-left font-bold  bg-gradient-to-r from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent'>
						Testimonials
					</h1>
				</div>
				<div></div>
			</div>
			<div className="mx-52 overflow-x-hidden">
				<TestimonialsMarquee />
			</div>
		</section>
	);
}
export default Testimonals