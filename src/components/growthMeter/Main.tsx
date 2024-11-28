"use client";

import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import ProgessAnalytics from "@/components/growthMeter/progessAnalytics";
import Card from "@/components/growthMeter/Card";

export default function Main() {
	return (
		<div className="gridGradient min-h-screen p-10 md:p-28">
			<div className="max-w-[1400px] mx-auto">
				<div className="flex flex-col">
					<Reveal>
						<h1 className="inline-block text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7D3EFF] via-[#FFB35C] to-[#7D3EFF]">
							<span>Track it, chart it,</span>
							<span className="block mt-3">Celebrate it.</span>
						</h1>
					</Reveal>
					<div className="m-auto my-20">
						<Reveal>
							<Image
								src="/assets/images/growthMeter/hero.png"
								alt="hero image"
								width={614}
								height={405}
							/>
						</Reveal>
					</div>
					<Reveal>
						<p className="text-[#5B437D] text-2xl md:text-3xl font-medium">
							Leadlly's Growth Meter is your personal learning
							dashboard, offering a clear visual snapshot of your
							academic journey. It tracks your progress,
							highlights achievements, and provides actionable
							insights to propel you towards your goals.
						</p>
					</Reveal>
				</div>

				<div className="my-20 md:my-40">
					<Reveal>
						<h1 className=" inline-block text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7D3EFF] via-[#FFB35C] to-[#7D3EFF]">
							<span>Visualize your progress</span>
							<span className="md:block my-3">
								and stay motivated
							</span>
						</h1>
					</Reveal>
					<div className="my-8 md:my-16 md:px-14 md:flex justify-between items-center">
						<Image
							src="/assets/images/growthMeter/dailyReport.png"
							alt="daily report example image"
							width={288}
							height={327}
							className="mb-7 mx-auto"
						/>
						<Reveal>
							<p className="text-[#5B437D] md:w-[500px] text-lg md:text-xl font-medium mx-5 md:mr-7">
								The daily growth meter is your daily self-study
								snapshot. It lets you see exactly how much
								progress you're making today. Imagine it as a
								daily progress booster, motivating you to keep
								learning and crushing your goals.
							</p>
						</Reveal>
					</div>
				</div>
				<ProgessAnalytics />
				<div>
					<Reveal>
						<p className="text-[#5B437D] text-2xl md:text-3xl font-semibold m-auto">
							Learning shouldn't feel like a chore! Our app
							injects a fun, competitive element with points and
							levels
						</p>
					</Reveal>
					<div className="md:flex md:justify-center my-8">
						<Card
							image={"/assets/images/growthMeter/level.png"}
							imgAlt={"level up card"}
							width="493"
							height="560"
							text="As your points accumulate, you'll level up!  Unlock new challenges, celebrate milestones, and watch your growth visualized with each level climb.  Challenge yourself and others to reach the highest learning peak!"
						/>
						<Card
							image={"/assets/images/growthMeter/points.png"}
							imgAlt={"points acrd"}
							width="493"
							height="560"
							text="Every conquered task, completed lesson, or mastered concept earns you valuable points.  See them rack up as you progress, adding a satisfying reward to your hard work."
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
