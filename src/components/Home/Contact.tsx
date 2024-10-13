import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import SocialIcon from "../shared/SocialIcon";

const Contact = () => {
  return (
    <section className="px-4 md:px-0">
      <div className="flex justify-start w-full">
        <div className="w-full md:w-fit">
          <h1 className=" text-3xl md:text-6xl my-10 text-left font-bold bg-gradient-to-r pl-0 md:pl-20 from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent">
            Contact
          </h1>
        </div>
      </div>
      <form className="px-4 md:px-48 space-y-3">
        <div className="w-full flex  space-x-3 flex-row md:space-x-3 md:space-y-0">
          <input
            type="text"
            placeholder="Name"
            className="w-full md:flex-1 p-3 rounded-md outline-none bg-white/60"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full md:flex-1 p-3 rounded-md outline-none bg-white/60"
          />
        </div>
        <textarea
          rows={8}
          placeholder="Message"
          className="w-full rounded-md p-3 bg-white/60"
        ></textarea>
        <button className="w-full rounded-md p-3 bg-primary-blue text-white font-semibold">
          Send
        </button>
      </form>

      {/* <form className='flex flex-col items-center gap-5 px-4 mt-10 md:mt-20'>
				<input
					type='text'
					className='w-full md:flex-1 p-3 rounded-2xl outline-none border-2 border-black/40'
					placeholder='name@gmail.com'
				/>
				<button className='w-full md:flex-1 rounded-2xl p-3 bg-primary-blue text-white font-semibold'>
					Subscribe for newsletter
				</button>
			</form> */}
      <h2 className="text-blue-500 text-sm font-medium pt-5 pb-10 text-center">
        All rights reserved to Leadlly edusolutin pvt. lmt.
      </h2>
    </section>
  );
};

export default Contact;
