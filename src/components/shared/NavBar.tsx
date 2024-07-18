import { ChevronDown, Menu } from 'lucide-react';
import Logo from '../Icons/Logo';

type Props = {};
const NavBar = (props: Props) => {
	return (
		<nav className='backdrop-blur-lg border-b fixed w-full z-50 border-b-[#bfa0c5] flex justify-between px-4 sm:px-20 py-3 items-center'>
			<Logo className='w-8 h-8 sm:w-12 sm:h-12' />
			<div>
				<div className='hidden gap-3 sm:gap-5 font-medium sm:flex'>
					<button className='flex items-center gap-2 sm:gap-3'>
						<span>Explore</span> <ChevronDown className='w-4 h-4 sm:w-6 sm:h-6' />
					</button>
					<button>Mentor</button>
					<button>Plans</button>
					<button className='bg-blue-700 text-white py-1 px-2 sm:px-4 rounded-xl border'>
						Sign Up
					</button>
				</div>
				<div>
					<Menu className='flex sm:hidden' />
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
