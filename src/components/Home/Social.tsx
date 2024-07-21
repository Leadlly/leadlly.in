import FacebookIcon from '../Icons/FacebookIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import SocialIcon from '../shared/SocialIcon';

type Props = {};
const Social = (props: Props) => {
	return (
		<>
			<div className='flex flex-col items-center gap-5 mt-10 md:mt-20'>
				<h2 className='text-primary-blue font-bold'>Follow us:</h2>
				<div className='flex gap-3'>
					{/* <SocialIcon Icon={FacebookIcon} /> */}
					<SocialIcon
						Icon={TwitterIcon}
						href='https://twitter.com/leadlly_ed'
					/>
					<SocialIcon
						Icon={LinkedInIcon}
						href='https://www.linkedin.com/company/leadlly-edu/'
					/>
					<SocialIcon
						Icon={InstagramIcon}
						href='https://www.instagram.com/leadlly.in'
					/>
				</div>
			</div>

			<h2 className='text-blue-500 text-xs font-medium pt-5 pb-10 text-center'>
				All rights reserved to Leadlly edusolutions pvt. ltd.
			</h2>
		</>
	);
};
export default Social;
