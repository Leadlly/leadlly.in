import { cn } from '@/utils/cn';

const DailyEvaluation = ({ className }: { className?: string }) => {
	return (
		<svg
			width='92'
			height='92'
			viewBox='0 0 92 92'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={cn('size-7', className)}
		>
			<path
				d='M68.3444 29.7544C67.8039 29.7544 67.2634 29.5819 66.811 29.2446C65.9409 28.5929 65.5805 27.4659 65.9064 26.4309L68.3099 18.7221L62.234 13.7771C61.4175 13.0833 61.1185 11.9524 61.4904 10.9481C61.8584 9.94376 62.8167 9.27293 63.89 9.27293H71.5605L74.2745 1.6561C74.6464 0.655598 75.6009 -0.00756836 76.6704 -0.00756836C77.7399 -0.00756836 78.6944 0.655598 79.0662 1.6561L81.7802 9.27293H89.4507C90.524 9.27293 91.4824 9.94377 91.8504 10.9519C92.2184 11.9601 91.9155 13.0909 91.0952 13.7848L85.05 18.7106L87.5494 26.3274C87.8905 27.3586 87.5455 28.4933 86.683 29.1564C85.8205 29.8196 84.636 29.8656 83.7275 29.2753L76.6895 24.6906L69.7704 29.3213C69.341 29.6088 68.8389 29.7544 68.3444 29.7544ZM37.6777 41.2544C37.1372 41.2544 36.5967 41.0819 36.1444 40.7446C35.2742 40.0929 34.9139 38.9659 35.2397 37.9309L37.6432 30.2221L31.5674 25.2771C30.7509 24.5833 30.4519 23.4524 30.8237 22.4481C31.1917 21.4438 32.15 20.7729 33.2234 20.7729H40.8939L43.6079 13.1561C43.9797 12.1556 44.9342 11.4924 46.0037 11.4924C47.0732 11.4924 48.0277 12.1556 48.3995 13.1561L51.1135 20.7729H58.784C59.8574 20.7729 60.8157 21.4438 61.1837 22.4519C61.5517 23.4601 61.2489 24.5909 60.4285 25.2848L54.3834 30.2106L56.8827 37.8274C57.2239 38.8586 56.8789 39.9933 56.0164 40.6564C55.1539 41.3196 53.9694 41.3656 53.0609 40.7753L46.0229 36.1906L39.1037 40.8213C38.6744 41.1088 38.1722 41.2544 37.6777 41.2544ZM7.01103 52.7544C6.47053 52.7544 5.93003 52.5819 5.4777 52.2446C4.60753 51.5929 4.2472 50.4659 4.57303 49.4309L6.97653 41.7221L0.900696 36.7771C0.0841962 36.0833 -0.214804 34.9524 0.15703 33.9481C0.52503 32.9438 1.48336 32.2729 2.5567 32.2729H10.2272L12.9412 24.6561C13.313 23.6556 14.2675 22.9924 15.337 22.9924C16.4065 22.9924 17.361 23.6556 17.7329 24.6561L20.4469 32.2729H28.1174C29.1907 32.2729 30.149 32.9438 30.517 33.9519C30.885 34.9601 30.5822 36.0909 29.7619 36.7848L23.7167 41.7106L26.216 49.3274C26.5572 50.3586 26.2122 51.4933 25.3497 52.1564C24.4872 52.8196 23.3027 52.8656 22.3942 52.2753L15.3562 47.6906L8.43703 52.3213C8.0077 52.6088 7.50936 52.7544 7.01486 52.7544H7.01103ZM82.4165 38.3334H74.7499C69.456 38.3334 65.1665 42.6229 65.1665 47.9168V82.4168C65.1665 87.7106 69.456 92.0001 74.7499 92.0001H82.4165C87.7104 92.0001 91.9999 87.7106 91.9999 82.4168V47.9168C91.9999 42.6229 87.7104 38.3334 82.4165 38.3334ZM15.3332 61.3334H9.5832C4.28936 61.3334 -0.000137141 65.6229 -0.000137141 70.9168V82.4168C-0.000137141 87.7106 4.28936 92.0001 9.5832 92.0001H15.3332C20.627 92.0001 24.9165 87.7106 24.9165 82.4168V70.9168C24.9165 65.6229 20.627 61.3334 15.3332 61.3334ZM47.9165 49.8334H42.1665C36.8727 49.8334 32.5832 54.1229 32.5832 59.4168V82.4168C32.5832 87.7106 36.8727 92.0001 42.1665 92.0001H47.9165C53.2104 92.0001 57.4999 87.7106 57.4999 82.4168V59.4168C57.4999 54.1229 53.2104 49.8334 47.9165 49.8334Z'
				fill='#302A39'
			/>
		</svg>
	);
};

export default DailyEvaluation;
