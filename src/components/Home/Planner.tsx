import Image from "next/image";
import FloatButton from "../shared/FloatButton";
import IconWithLabel from "../shared/IconWIthLabel";
import { PlannerPoints } from "@/helpers/constants";

type Props = {};
const Planner = (props: Props) => {
	return (
		<section>
			<div className='text-primary-blue text-6xl font-bold mx-40 my-20'>
				<h1>Planner. </h1>
				<h1>Personalized for you.</h1>
			</div>
			<div className='flex items-center justify-evenly'>
				<Image
					alt='planner'
					height={312}
					width={616}
					src={'/assets/images/planner.png'}
				/>
				<p className='text-[#5B437D] font-semibold text-xl w-96 text-right'>
					Ditch generic study plans and level up your revision with Leadlly's intelligent Revision
					Planner!
				</p>
			</div>
			<div className='grid grid-cols-2 gap-y-14 p-28'>
				{PlannerPoints.map((item, index) => (
					<IconWithLabel
						key={index}
						icon={<item.icon className='size-full'/> }
						label={item.label}
					/>
				))}
			</div>
			{/* <FloatButton text="Dive into planner"/> */}
		</section>
	);
};
export default Planner;
