"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type progessAnalytic = {
	label: string;
	image: string;
	text: string;
};

const progressAnalytics: progessAnalytic[] = [
	{
		label: "weekly",
		image: "/assets/images/growthMeter/progress1.png",
		text: "The daily growth meter is your daily self-study snapshot. It lets you see exactly how much progress you're making today. Imagine it as a daily progress booster, motivating you to keep learning and crushing your goals.",
	},
	{
		label: "Monthly",
		image: "/assets/images/growthMeter/progress2.png",
		text: "This becomes your mastery map. Witness the impressive strides you've made month-over-month, solidifying your knowledge and skills.",
	},
	{
		label: "Overall",
		image: "/assets/images/growthMeter/progress3.png",
		text: "This is your learning legacy. Step back and admire the incredible progress you've made since starting your self-study journey. It's a testament to your dedication and hard work!",
	},
];

const ProgressSlideButton = ({
	index,
	text,
	currentIndex,
	setCurrentIndex,
}: any) => {
	return (
		<motion.button
			className="m-4 mx-6 p-2 px-4 rounded-lg"
			initial={{ color: "inherit" }}
			animate={{
				backgroundColor:
					currentIndex == index ? "rgb(192, 132, 252)" : "",
				color: currentIndex == index ? "white" : "rgb(91, 67, 125)",
			}}
			transition={{ duration: 0.25 }}
			onClick={() => {
				setCurrentIndex(index);
			}}
		>
			{text}
		</motion.button>
	);
};

export default function ProgressAnalytics() {
	const [currentIndex, setCurrentIndex] = useState(0);

	// useEffect(() => {
	// 	//run krna hi h sliding pr agr user click krra h to 5 seconds rukna h click krega agr user to currentIndex change hga
	// 	const sliding = setInterval(() => {}, 2000);
	// }, [currentIndex]);

	return (
		<div className="my-8 md:my-16">
			<Image
				src={"/assets/images/growthMeter/progressLabel.png"}
				alt="label of progress charts"
				width={248}
				height={24}
				className="m-auto mb-10"
			/>
			<div className="overflow-x-hidden">
				<motion.div
					className="flex translate-x-[0%]"
					initial={{ x: 0 }}
					animate={{
						x: `-${currentIndex}00%`,
					}}
					transition={{ duration: 0.5 }}
				>
					{progressAnalytics.map((progress, index) => (
						<div
							key={index}
							className="w-full flex-shrink-0"
						>
							<Image
								src={progress.image}
								alt="progressAnalytics image weekly"
								width={757}
								height={306}
								className="m-auto"
							/>
							<p className="text-[#5B437D] text-lg md:text-xl font-medium my-10 md:max-w-[700px] m-auto">
								{progress.text}
							</p>
						</div>
					))}
				</motion.div>
			</div>

			<div className="text-[#5B437D] text-lg md:text-xl font-semibold flex justify-center">
				{progressAnalytics.map((progress, index) => (
					<ProgressSlideButton
						key={index}
						index={index}
						text={progress.label}
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
					/>
				))}
			</div>
		</div>
	);
}
