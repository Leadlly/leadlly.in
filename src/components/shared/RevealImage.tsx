'use client';
import { animate, motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

type Props = {
	leftItem: ReactNode;
	rightItem: ReactNode;
	delay?: number;
	motionDivClass?: string;
	imagePosition: 'left' | 'right';
};

const RevealImage = ({ leftItem, rightItem, delay = 0, motionDivClass, imagePosition }: Props) => {
	const imageControls = useAnimation();
	const textControls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleAnimation = () => {
		if (imagePosition === 'left') {
			imageControls.start({
				opacity: [0, 0.5, 1, 1, 1],
				x: ['-65%', '-65%', '-65%', '-65%', 0],
				transition: {
					duration: 1.5,
					delay: 0.2,
					ease: 'easeInOut',
					type: 'spring',
					damping: 10,
					mass: 0.75,
					stiffness: 100,
				}, // Custom cubic-bezier for smoother bounce effect
			});
			textControls.start({
				opacity: [0, 0, 0, 0.2, 1],
				x: ['77%', '77%', '77%', '77%', 0],
				transition: { duration: 1.5, delay: 0.2, ease:'easeInOut',}, // Custom cubic-bezier for smoother bounce effect
			});
		} else {
			imageControls.start({
				opacity: [0, 0.5, 1, 1, 1],
				x: ['65%', '65%', '65%', '65%', 0],
				transition: { duration: 1.5, delay: 0.2, ease:'easeInOut',}, // Custom cubic-bezier for smoother bounce effect
			});
			textControls.start({
				opacity: [0, 0, 0, 0.2, 1],
				x: ['-77%', '--77%', '-77%', '-77%', 0],
				transition: { duration: 1.5, delay: 0.2, ease:'easeInOut',}, // Custom cubic-bezier for smoother bounce effect
			});
		}
	};

	useEffect(() => {
		if (isInView) {
			handleAnimation();
		}
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			className={motionDivClass}
		>
			{imagePosition === 'left' ? (
				<>
					<motion.div
						initial={{ opacity: 0, x: '-65%' }}
						animate={imageControls}
						style={{ zIndex: 10 }}
					>
						{leftItem}
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: '65%' }}
						animate={textControls}
					>
						{rightItem}
					</motion.div>
				</>
			) : (
				<>
					<motion.div
						initial={{ opacity: 0, x: '65%' }}
						animate={imageControls}
						style={{ zIndex: 10 }}
					>
						{rightItem}
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: '-65%' }}
						animate={textControls}
					>
						{leftItem}
					</motion.div>
				</>
			)}
		</motion.div>
	);
};

export default RevealImage;
