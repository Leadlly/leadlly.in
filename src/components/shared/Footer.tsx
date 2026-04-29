import Image from "next/image";
import Link from "next/link";

import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import SectionContainer from "./SectionContainer";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <SectionContainer className="bg-background py-8 sm:py-12 lg:pb-1 lg:scroll-pt-24">
      <footer className="w-full max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-primary">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "#explore" },
                { name: "Become Mentor at Leadlly", href: "/mentor" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm sm:text-base text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-primary">
              Legal
            </h3>
            <ul className="space-y-2">
              {[
                //   { name: "Refund Policy", href: "/refund-policy" },
                { name: "Privacy policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-and-conditions" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm sm:text-base text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm sm:text-base text-primary">
              Contact
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Get your questions answered about learning with LEADLLY.
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Call On:{" "}
              <a
                href="tel:+916387317060"
                className="text-xs sm:text-sm font-semibold"
              >
                +91 6387317060
              </a>
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Email us:{" "}
              <a
                href="mailto:support@leadlly.in"
                className="text-xs sm:text-sm font-semibold"
              >
                support@leadlly.in
              </a>
            </p>
          </div>

          <div>
            <Link href="/">
              <span className="text-3xl font-bold font-serif">LEADLLY</span>
            </Link>
            <p className="mb-4 text-sm sm:text-base w-full sm:w-80">
              Your Study Buddy — Personalised, Accountable, Consistent.
            </p>

            <p className="mb-4 text-sm sm:text-base w-full sm:w-80 font-semibold">
              Let&apos;s personalize learning for every student in India.
            </p>

            <div className="mb-4 flex gap-4 items-center">
              <Link
                href="https://www.instagram.com/leadlly.in"
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/leadlly-edu/"
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link
                href="https://twitter.com/leadlly_ed"
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <TwitterIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="my-4 pt-4 border-t-2 border-gray-300 text-center ">
          <p className="text-xs sm:text-sm text-gray-600">
            © {currentYear} Leadlly Edusolutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="relative aspect-1200/283">
            <Image
              src="/assets/images/logo.png"
              alt="Leadlly Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
