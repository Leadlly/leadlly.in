import { cn } from '@/utils/cn';

const DashboardIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			viewBox='0 0 20 19'
			xmlns='http://www.w3.org/2000/svg'
			className={cn('w-5 h-5 fill-none stroke-2', className)}
		>
			<rect
				x='1.23764'
				y='1'
				width='7'
				height='7'
				rx='2.5'
			/>
			<rect
				x='1.23764'
				y='11'
				width='7'
				height='7'
				rx='2.5'
			/>
			<rect
				x='11.2376'
				y='1'
				width='7'
				height='7'
				rx='2.5'
			/>
			<rect
				x='11.2376'
				y='11'
				width='7'
				height='7'
				rx='2.5'
			/>
		</svg>
	);
};

export default DashboardIcon;
