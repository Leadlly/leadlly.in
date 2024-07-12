import Link from "next/link";

type Props = { Icon: any };
function SocialIcon({ Icon }: Props) {
	return (
		<Link
			href={'/'}
			className='border relative border-black/30 rounded-[14px] p-2   transition-all ease-in-out overflow-hidden'
		>
			<div className="absolute size-0 scale-150 bg-black"></div>
			<Icon className='size-6 hover:scale-125 transition-all ease-linear' />
		</Link>
	);
}
export default SocialIcon;
