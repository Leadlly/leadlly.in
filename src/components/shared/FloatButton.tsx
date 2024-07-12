'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';


type Props = {
	text: string;
	additionalStyles?: string;
};

const FloatButton: React.FC<Props> = ({ text, additionalStyles }) => {
	const [visible, setVisible] = useState(true);

	const handleAnimationComplete = () => {
		setTimeout(() => {
			setVisible(false);
		}, 2000); // 2 seconds delay before vanishing
	};

	return (
		<>
			{visible && (
				<motion.div
					className={`fixed bottom-10 right-10 bg-blue-500 text-white p-4 rounded-full shadow-lg backdrop-blur-md bg-opacity-70 ${additionalStyles}`}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					whileHover={{ scale: 1.1 }}
					onAnimationComplete={handleAnimationComplete}
					transition={{ duration: 0.5 }}
				>
					{text}
				</motion.div>
			)}
		</>
	);
};

export default FloatButton;
