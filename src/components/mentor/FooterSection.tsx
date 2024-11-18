import { FileText, Pencil, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AppleStore from './icons/AppleStore';
import PlayStore from './icons/PlayStore';
import FullIcon from '../Icons/FullIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import TwitterIcon from '../Icons/TwitterIcon';
export default function FooterSection() {
	return (
		<div className='w-full container'>
			{/* Mentor Section */}
			<section className='relative overflow-hidden bg-[url(/assets/images/mentorbg.png)] bg-cover bg-center px-0 py-8 sm:py-12 lg:py-16 text-white md:px-6 rounded-xl sm:rounded-2xl lg:rounded-3xl  sm:mx-6 lg:mx-10'>
				<div className='absolute inset-0 bg-purple-900/30'></div>
				<div className='container mx-auto max-w-4xl text-center relative z-10'>
					<h2 className='mb-2 sm:mb-3 lg:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight md:text-5xl'>
						Join Our Team as a Mentor
					</h2>
					<p className='mb-4 sm:mb-6 lg:mb-8 text-base sm:text-lg lg:text-xl'>
						Join the Leadlly internship to mentor peers, make a meaningful impact, and grow your
						skills while enhancing your resume!
					</p>
					<Link href="/mentor/apply">
						<button className='rounded-md bg-orange-400 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-sm sm:text-base font-semibold text-white hover:bg-orange-500 transition-colors'>
							Apply Here
						</button>
					</Link>
				</div>
			</section>

			{/* Download Section */}
			<section className='bg-white px-2 py-8 sm:py-12 lg:py-16 md:px-6 w-full'>
				<div className='md:container  md:mx-auto w-full'>
					<div className='mb-8 sm:mb-12 lg:mb-16 flex flex-col lg:flex-row gap-6 sm:gap-8'>
						<div className='flex-1'>
							<h2 className='mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight'>
								Download the app
							</h2>
							<p className='mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base'>
								To access personalized mentorship, study resources, and real-time updates, making
								your preparation easier and more effective. Stay connected and succeed
							</p>
						</div>
						<div className='flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 justify-center items-center px-4 sm:px-6 lg:px-10'>
							<Link
								href='https://apps.apple.com/in/app/leadlly/id123456789'
								className='w-full sm:w-auto'
							>
								<div className='flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full'>
									<AppleStore className='size-[20px] sm:size-[24px]' />
									<div className='flex flex-col'>
										<span className='text-[10px] sm:text-xs'>Download on the</span>
										<span className='text-lg sm:text-xl font-semibold'>App Store</span>
									</div>
								</div>
							</Link>
							<Link
								href='https://play.google.com/store/apps/details?id=com.leadlly.app'
								className='w-full sm:w-auto'
							>
								<div className='flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full'>
									<PlayStore className='w-[24px] h-[26px] sm:w-[28px] sm:h-[30px]' />
									<div className='flex flex-col'>
										<span className='text-[10px] sm:text-xs'>GET IT ON</span>
										<span className='text-lg sm:text-xl font-semibold'>Google Play</span>
									</div>
								</div>
							</Link>
						</div>
					</div>

					<footer className='grid gap-8 md:grid-cols-4 lg:grid-cols-4'>
						<div className='md:col-span-2'>
							<Link href="/">
								<FullIcon className='mb-4 sm:mb-5 w-32 sm:w-40' />
							</Link>
							<p className='mb-4 text-gray-600 text-sm sm:text-base w-full sm:w-80'>
								We are on a mission to help aspirants in managing all the studies without stressing
								over it :)
							</p>
							<div className='mb-4 flex gap-4 items-center'>
								<Link
									href='https://www.instagram.com/leadlly.in'
									className='text-gray-400 transition-colors hover:text-gray-600'
								>
									<InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7" />
								</Link>
								<Link
									href='https://www.linkedin.com/company/leadlly-edu/'
									className='text-gray-400 transition-colors hover:text-gray-600'
								>
									<LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6" />
								</Link>
								<Link
									href='https://twitter.com/leadlly_ed'
									className='text-gray-400 transition-colors hover:text-gray-600'
								>
									<TwitterIcon className="w-5 h-5 sm:w-6 sm:h-6" />
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
							<h3 className='mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-purple-600'>Company</h3>
							<ul className='space-y-2'>
								{[
									{ name: 'About Us', href: '/about' },
									{ name: 'Teach at Leadlly', href: '/teach' },
									{ name: 'Contact Us', href: '/contact' }
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
									{ name: 'Terms & Conditions', href: '/terms' }
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
				</div>
				<div className='mt-4 pt-4 border-t border-gray-200 text-center'>
					<p className='text-xs sm:text-sm text-gray-600'>All Copyright are reserved to Leadlly.in</p>
				</div>
			</section>
		</div>
	);
}
