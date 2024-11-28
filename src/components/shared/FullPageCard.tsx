import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FullPageCard = ({
	children,
	setVisibility,
}: {
	children: React.ReactNode;
	setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<motion.div
			initial={{ y: 60 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.25 }}
			className="fixed h-screen w-full bottom-0 left-0 z-50 rounded-t-3xl overflow-scroll"
		>
			<div className="flex justify-end fixed p-7 px-14 w-full top-0 left-0 rounded-t-3xl z-10">
				<button
					onClick={() => {
						setVisibility(false);
					}}
				>
					<Image
						src={"/assets/images/cross.png"}
						alt={"crossImag"}
						width={20}
						height={20}
					/>
				</button>
			</div>
			<div>{children}</div>
		</motion.div>
	);
};

export default FullPageCard;
