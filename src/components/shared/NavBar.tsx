import { ChevronDown } from 'lucide-react';
import Logo from '../Icons/Logo';

type Props = {};
const NavBar = (props: Props) => {
	return (
		<nav className='backdrop-blur-lg border-b fixed w-full z-50 border-b-[#bfa0c5] flex justify-between px-20 py-3 items-center'>
			<Logo className='size-12'/>
			<div className='flex gap-5 font-medium'>
				<button className='flex items-center gap-3'>
					<span>Explore</span> <ChevronDown className='size-4'/>
				</button>
				<button >Mentor</button>
				<button >Plans</button>
				<button className='bg-blue-700 text-white py-1 px-4 rounded-xl  border'>Sign Up</button>
			</div>
		</nav>
	);
};
export default NavBar;
