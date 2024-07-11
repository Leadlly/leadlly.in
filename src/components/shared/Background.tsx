type Props = {}
const Background = (props: Props) => {
  return (
		<div className="flex relative">
			<div className=' h-screen w-full mix-blend-multiply absolute inset-0 bg-grid-[#E7DCF0]/[0.25]  flex items-center justify-center'></div>
			<div className='h-screen w-full mix-blend-multiply inset-0 absolute bg-gradient-to-r from-[#FEF5EB] to-[#ECE4FB]  = flex items-center justify-center'></div>
		</div>
	);
}
export default Background