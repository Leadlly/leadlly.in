import { TrackerPoints } from "@/helpers/constants";
import Image from "next/image";
import IconWithLabel from "../shared/IconWIthLabel";

type Props = {};
const Tracker = (props: Props) => {
	return (
		<section>
			<div className='text-primary-blue text-6xl font-bold m-40'>
				<h1>Never lose.</h1>
				<h1>Track of your progress.</h1>
			</div>
			<div className='flex items-center justify-evenly'>
				<p className='text-[#5B437D] font-semibold text-xl w-96 text-left'>
					Monitor how many times you're revised each topic with current and cumulative efficiency.
				</p>{' '}
				<Image
					alt='Tracker'
					height={312}
					width={616}
					src={'/assets/images/tracker.png'}
				/>
			</div>
			<div className='grid grid-cols-2 gap-y-14 p-28'>
				{TrackerPoints.map((item, index) => (
					<IconWithLabel
						key={index}
						icon={<item.icon className='size-full' />}
						label={item.label}
					/>
				))}
			</div>
			{/* <FloatButton text="Dive into planner"/> */}
		</section>
	);
};
export default Tracker;
