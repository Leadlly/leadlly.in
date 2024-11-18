import Link from 'next/link';
import FullIcon from '../Icons/FullIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import Image from 'next/image';

export default function Footer() {
	return (
		<section className=' px-2 py-8 sm:py-12 lg:py-16 md:px-16 w-full container '>
			<footer className='grid gap-8 md:grid-cols-4 lg:grid-cols-4'>
				<div className='md:col-span-2'>
					<Link href='/'>
						<Image src="/assets/images/logo.png" alt="Leadlly Logo" width={200} height={70} className='mb-4 sm:mb-5 w-40 sm:w-48' />
					</Link>
					<p className='mb-4 text-gray-600 text-sm sm:text-base w-full sm:w-80'>
						We are on a mission to help aspirants in managing all the studies without stressing over
						it :)
					</p>
					<div className='mb-4 flex gap-4 items-center'>
						<Link
							href='https://www.instagram.com/leadlly.in'
							className='text-gray-400 transition-colors hover:text-gray-600'
						>
							<InstagramIcon className='w-6 h-6 sm:w-7 sm:h-7' />
						</Link>
						<Link
							href='https://www.linkedin.com/company/leadlly-edu/'
							className='text-gray-400 transition-colors hover:text-gray-600'
						>
							<LinkedInIcon className='w-5 h-5 sm:w-6 sm:h-6' />
						</Link>
						<Link
							href='https://twitter.com/leadlly_ed'
							className='text-gray-400 transition-colors hover:text-gray-600'
						>
							<TwitterIcon className='w-5 h-5 sm:w-6 sm:h-6' />
						</Link>
					</div>
					<div className='space-y-2'>
						<h3 className='font-semibold text-sm sm:text-base'>Reach out to us</h3>
						<p className='text-xs sm:text-sm text-gray-600'>
							Get your questions answered about learning with LEADLLY.
						</p>
						<p className='text-xs sm:text-sm text-gray-600'>Call On</p>
						<p className='text-xs sm:text-sm font-semibold'>+91 1234567890</p>
					</div>
				</div>

				<div>
					<h3 className='mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-purple-600'>
						Company
					</h3>
					<ul className='space-y-2'>
						{[
							{ name: 'About Us', href: '/about' },
							{ name: 'Teach at Leadlly', href: '/teach' },
							{ name: 'Contact Us', href: '/contact' },
						].map((item) => (
							<li key={item.name}>
								<Link
									href={item.href}
									className='text-sm sm:text-base text-gray-600 hover:text-gray-900'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className='mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-purple-600'>Legal</h3>
					<ul className='space-y-2'>
						{[
							{ name: 'Refund Policy', href: '/refund-policy' },
							{ name: 'Privacy policy', href: '/privacy-policy' },
							{ name: 'Terms & Conditions', href: '/terms' },
						].map((item) => (
							<li key={item.name}>
								<Link
									href={item.href}
									className='text-sm sm:text-base text-gray-600 hover:text-gray-900'
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</footer>
			<div className='my-4 pt-4 border-t-2 border-gray-300 text-center '>
				<p className='text-xs sm:text-sm text-gray-600'>All Copyright are reserved to Leadlly.in</p>
			</div>
		</section>
	);
}
