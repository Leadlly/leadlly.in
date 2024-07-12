import Image from "next/image";
import DailyMotivation from "../Icons/GrowthMeter/DailyMotivation";
import { GrowthMeterPoints } from "@/helpers/constants";
import IconWithLabel from "../shared/IconWIthLabel";

type Props = {}
const GrowthMeter = (props: Props) => {
  return (
		<section>
			<div className='text-primary-blue text-6xl font-bold m-40'>
				<h1>Stay motivated. </h1>
				<h1>Visualize your progress.</h1>
			</div>
			<div className='flex items-center justify-evenly'>
				<Image
					alt='planner'
					height={312}
					width={616}
					src={'/assets/images/growthMeter.png'}
				/>
				<p className='text-[#5B437D] font-semibold text-xl w-96 text-right'>
					Watch your self-study soar with the Growth Meter - see daily, weekly, and monthly progress
					take flight!
				</p>
			</div>
			<div className='grid grid-cols-2 gap-y-14 p-28'>
				{GrowthMeterPoints.map((item, index) => (
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
}
export default GrowthMeter