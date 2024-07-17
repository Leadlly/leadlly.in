'use client';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimate } from 'framer-motion';
import { Flag } from 'lucide-react';

type Props = {
	text: string;
	additionalStyles?: string;
	isInView: boolean;
};

const FloatButton: React.FC<Props> = ({ text, additionalStyles, isInView }) => {
	const [scope, animate] = useAnimate();
	useEffect(() => {
		const animateButton = async () => {
			if (isInView) {
				await animate('.buttonText', { opacity: 0, display: 'none' });
				await animate('button', { scale: 1, y: 0 }, { duration: 0.2, delay: 0.1 });
				await animate(
					'button',
					{
						boxShadow: [
							' 0px 0px 0px 0px rgba(41,77,219,0.8)',
							' 0px 0px 0px 20px rgba(41,77,219,0.8)',
							' 0px 0px 0px 0px rgba(41,77,219,0.8)',
						],
					},
					{ duration: 0.5 }
				);

				await animate('button', { width: 280 }, { duration: 0.3, delay: 0.1 });
				await animate('.buttonText', { display: 'block', opacity: 1, x: 0 }, { duration: 0.1 });
			} else {
				await animate('.buttonText', { opacity: 0, display: 'none' });
				await animate('button', { width: 60 });
				await animate('button', { scale: 0, y: 0 });
			}
		};

		animateButton();
	}, [isInView, animate]);

	return (
		<AnimatePresence>
			<div
				className='sticky bottom-5 z-40 flex justify-center'
				ref={scope}
			>
				<motion.button
					className={`bg-[#bec1e3]/20 size-[60px] overflow-hidden backdrop-blur-lg text-slate-700 font-medium p-2 rounded-full shadow-lg ${additionalStyles}`}
					style={{ scale: 0 }}
				>
					<span className='opacity-0 buttonText text-xl -translate-x-10'>{text}</span>
				</motion.button>
			</div>
		</AnimatePresence>
	);
};

export default FloatButton;
