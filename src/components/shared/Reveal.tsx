'use  client';
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = { children: JSX.Element; width?: 'fit-content' | '100%'; delay?: number , motionDivClass?:string};
const Reveal = ({ children, width = 'fit-content', delay,motionDivClass }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const controls = useAnimation();
	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [isInView]);
	return (
		<div
			ref={ref}
			style={{ position: 'relative', width, overflow: 'hidden',borderRadius:'20px' }} 
		>
			<motion.div
				variants={{
					hidden: {
						opacity: 0,
						y: 80,
					},
					visible: {
						opacity: 1,
						y: 0,
					},
				}}
				initial='hidden'
				className={motionDivClass}
				animate={controls}
				transition={{ duration: 0.6	, delay: delay ?? 0 }}
			>
				{children}
			</motion.div>
		</div>
	);
};
export default Reveal;
