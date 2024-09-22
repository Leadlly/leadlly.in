import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import SocialIcon from "../shared/SocialIcon";

type Props = {};
const Social = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center gap-5 mt-10 md:mt-20">
        <h2 className="text-primary-blue font-bold">Follow us:</h2>
        <div className="flex gap-3">
          <SocialIcon
            Icon={TwitterIcon}
            href="https://twitter.com/leadlly_ed"
          />
          <SocialIcon
            Icon={LinkedInIcon}
            href="https://www.linkedin.com/company/leadlly-edu/"
          />
          <SocialIcon
            Icon={InstagramIcon}
            href="https://www.instagram.com/leadlly.in"
          />
        </div>
      </div>

      <div className="pt-5 pb-10 text-center">
        <h2 className="text-blue-500 text-xs font-medium">
          All rights reserved to Leadlly Edusolutions Pvt. Ltd.
        </h2>
        {/* Terms and Privacy Links */}
        <div className="flex justify-center gap-5 mt-3">
          <a
            href="/terms-and-conditions"
            className="text-gray-500 text-xs hover:text-primary-blue"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy-policy"
            className="text-gray-500 text-xs hover:text-primary-blue"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
