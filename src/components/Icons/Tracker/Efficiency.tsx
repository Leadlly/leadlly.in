import { cn } from '@/utils/cn';

const TrackEfficiency = ({ className }: { className?: string }) => {
	return (
		<svg
			viewBox='0 0 109 109'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M77.208 9.083H59.042V0h18.166c7.512 0 13.625 6.113 13.625 13.625v13.652l6.804-6.849 6.422 6.422-11.382 11.382a9.017 9.017 0 0 1-6.386 2.639 8.994 8.994 0 0 1-6.38-2.635L68.525 26.85l6.421-6.422 6.804 6.804V13.62a4.546 4.546 0 0 0-4.542-4.542v.004ZM27.25 95.375V81.764l6.803 6.803 6.422-6.422L29.09 70.76c-3.515-3.502-9.242-3.515-12.771 0L4.937 82.141l6.421 6.421 6.804-6.848v13.652c0 7.512 6.113 13.625 13.625 13.625h18.167v-9.083H31.787a4.546 4.546 0 0 1-4.542-4.542l.005.009Zm22.708-70.396c0 8.625-4.396 16.514-11.754 21.105-1.153.718-1.87 2.126-1.87 3.665v9.293h-22.71v-9.288c0-1.549-.694-2.938-1.816-3.638A24.968 24.968 0 0 1 .295 21.087C1.853 10.914 9.605 2.671 19.593.567 27.109-1.021 34.82.8 40.703 5.574a24.883 24.883 0 0 1 9.25 19.406h.005Zm-15.896-6.812H15.896c0 3.351 1.839 6.249 4.541 7.825v19.425h9.084V25.992c2.702-1.572 4.541-4.469 4.541-7.825ZM109 74.937c0 8.625-4.396 16.514-11.754 21.106-1.154.717-1.871 2.125-1.871 3.665V109H72.666v-9.288c0-1.548-.694-2.938-1.816-3.638-8.507-5.277-13.026-15.1-11.509-25.029C60.9 60.876 68.651 52.63 78.64 50.526c7.516-1.59 15.228.232 21.11 5.005A24.883 24.883 0 0 1 109 74.938Zm-15.896-6.812H74.937c0 3.352 1.84 6.25 4.542 7.825v19.425h9.083V75.95c2.703-1.571 4.542-4.469 4.542-7.825Z'
				fill='#302A39'
			/>
		</svg>
	);
};

export default TrackEfficiency;