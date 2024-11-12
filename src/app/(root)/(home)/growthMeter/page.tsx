"use client";

import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import ProgessAnalytics from "@/components/growthMeter/progessAnalytics";

export default function Page() {
	return (
		<div className="gridGradient min-h-screen p-10 md:p-28">
			<div className="max-w-[1400px] mx-auto">
				<div>
					<Reveal>
						<h1 className="inline-block text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7D3EFF] via-[#FFB35C] to-[#7D3EFF]">
							<span>Track it, chart it,</span>
							<span className="block mt-3">Celebrate it.</span>
						</h1>
					</Reveal>
					<Reveal>
						<Image
							src="/assets/images/growthMeter/hero.png"
							alt="hero image"
							width={1000}
							height={500}
							className="my-10 "
						/>
					</Reveal>
					<Reveal>
						<p className="text-[#5B437D] text-xl md:text-2xl font-medium">
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
							<span className="md:block mt-3">
								and stay motivated
							</span>
						</h1>
					</Reveal>
					<div className="my-16 md:my-32 md:px-14 md:flex justify-between items-center">
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
			</div>
		</div>
	);
}
