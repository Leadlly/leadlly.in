import Link from "next/link";

import * as motion from "motion/react-client";

import { NavLinks } from "@/helpers/constants";
import { cn } from "@/lib/utils";
import Logo from "../Icons/Logo";
import LogoFull from "../Icons/LogoFull";
import { buttonVariants } from "../ui/button";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 w-full h-28 flex items-center justify-center px-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto w-full bg-background shadow-lg rounded-full h-20 flex items-center justify-between px-5 md:px-10"
      >
        <div>
          <Logo className="md:hidden" />
          <LogoFull className="hidden md:flex" />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {NavLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: index * 0.25 }}
              >
                <Link
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <Link
            href={"https://education.leadlly.in/login"}
            target="_blank"
            className={cn(buttonVariants({ size: "xl" }), "rounded-full")}
          >
            Login / Signup
          </Link>
        </nav>
      </motion.div>
    </header>
  );
};
export default NavBar;
