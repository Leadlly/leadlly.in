import Link from "next/link";

type Props = { Icon: any, href:string };
function SocialIcon({ Icon ,href}: Props) {
	return (
		<Link
			href={href || '/'}
			target="_blank"
			className='border relative border-black/30 rounded-[14px] p-2   transition-all ease-in-out overflow-hidden'
		>
			<div className="absolute size-0 scale-150 bg-black"></div>
			<Icon className='size-6 hover:scale-125 transition-all ease-linear' />
		</Link>
	);
}
export default SocialIcon;
