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
			transition={{ duration: 0.5 }}
			className="fixed h-5/6 w-full bottom-0 left-0 z-50 rounded-t-3xl overflow-scroll"
		>
			<div className="flex justify-end sticky w-full top-0 left-0 rounded-t-3xl z-10 py-7 px-10 bg-white/20 backdrop-blur-lg shadow-md">
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
