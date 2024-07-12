import { MentorPoints } from "@/helpers/constants";
import Image from "next/image";
import IconWithLabel from "../shared/IconWIthLabel";

type Props = {};
const Mentor = (props: Props) => {
	return (
		<section>
			<div className='text-primary-blue text-6xl font-bold m-40'>
				<h1>Don't Go It Alone. </h1>
				<h1>Succeed with your mentor.</h1>
			</div>
			<div className='flex items-center justify-evenly'>
				<p className='text-[#5B437D] font-semibold text-xl w-96 text-left'>
					Gain valuable insights and strategies from someone experienced in your field of study.
				</p>{' '}
				<Image
					alt='planner'
					height={312}
					width={616}
					src={'/assets/images/mentor.png'}
				/>
			</div>
			<div className='grid grid-cols-2 gap-y-14 p-28'>
				{MentorPoints.map((item, index) => (
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
export default Mentor;
