import { FileText, Pencil, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AppleStore from "./icons/AppleStore";
import PlayStore from "./icons/PlayStore";
import FullIcon from "../Icons/FullIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";
export default function FooterSection() {
  return (
    <div className="w-full container" id="joinus">
      {/* Mentor Section */}
      <section className="relative overflow-hidden bg-[url(/assets/images/mentorbg.png)] bg-cover bg-center px-0 py-8 sm:py-12 lg:py-16 text-white md:px-6 rounded-xl sm:rounded-2xl lg:rounded-3xl  sm:mx-6 lg:mx-10">
        <div className="absolute inset-0 bg-purple-900/30"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="mb-2 sm:mb-3 lg:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight md:text-5xl">
            Join Our Team as a Mentor
          </h2>
          <p className="mb-4 sm:mb-6 lg:mb-8 text-base sm:text-lg lg:text-xl">
            Join the Leadlly internship to mentor peers, make a meaningful
            impact, and grow your skills while enhancing your resume!
          </p>
          <a href="https://forms.gle/G3VVxpJ4uWKFbfYv6" target="_blank">
            <button className="rounded-md bg-orange-400 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-sm sm:text-base font-semibold text-white hover:bg-orange-500 transition-colors">
              Apply Here
            </button>
          </a>
        </div>
      </section>
      {/* 
			Download Section
			<section className=' px-2 py-8 sm:py-12 lg:py-16 md:px-6 w-full'>
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

				</div>
			
			</section> */}
    </div>
  );
}
