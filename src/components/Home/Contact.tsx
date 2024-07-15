import FacebookIcon from '../Icons/FacebookIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkdenIcon from '../Icons/LinkdenIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import SocialIcon from '../shared/SocialIcon';

type Props = {};
const Contact = (props: Props) => {
	return (
		<section>
			<div className='flex justify-start w-full'>
				<div>
					<h1 className='text-5xl ml-40 my-10 text-left font-bold  bg-gradient-to-r from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent'>
						Contact
					</h1>
				</div>
				<div></div>
			</div>
			<form className='px-48 space-y-3'>
				<div className='w-full flex space-x-3'>
					<input
						type='text'
						placeholder='Name'
						className='flex-1 p-3  rounded-md  outline-0'
					/>
					<input
						type='text'
						placeholder='Email'
						className='flex-1 p-3 rounded-md  outline-0'
					/>
				</div>
				<div>
					{' '}
					<textarea
						name=''
						id=''
						rows={8}
						placeholder='Message'
						className='w-full  rounded-md p-3 bg-white'
					></textarea>
				</div>

				<button className='w-full  rounded-md  p-3 bg-primary-blue text-white font-semibold'>
					Send
				</button>
			</form>
			<div className='flex flex-col justify-center items-center gap-5 mt-20'>
				<h2 className='text-primary-blue font-bold'>Follow us:</h2>
				<div className='flex gap-3'>
					<SocialIcon Icon={FacebookIcon} />
					<SocialIcon Icon={TwitterIcon} />
					<SocialIcon Icon={LinkdenIcon} />
					<SocialIcon Icon={InstagramIcon} />
				</div>
			</div>
			<form action='' className='flex px-96 gap-5 py-6 justify-center'>
				<input
					type='text'
					className='flex-1 p-3  rounded-2xl  outline-0 border-2 border-black/40'
					placeholder='name@gmail.com'
				/>{' '}
				<button className='flex-1  rounded-2xl p-3 bg-primary-blue text-white font-semibold'>
					Subscribe for newsletter
				</button>
			</form>
		</section>
	);
};
export default Contact;
