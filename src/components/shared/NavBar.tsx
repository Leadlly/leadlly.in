"use client";
import { ChevronDown, Menu } from "lucide-react";
import Logo from "../Icons/Logo";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileMenu from "./MobileMenu";

type Props = {};
const NavBar = (props: Props) => {
  return (
    <motion.nav
      initial={{ opacity: 0.5, y: "-70px" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="backdrop-blur-lg border-b fixed w-full z-50 border-b-[#bfa0c5] flex justify-between px-4 md:px-20 py-3 items-center"
    >
      <Link href={"/"}>
        <Logo className="w-8 h-8 md:w-12 md:h-12" />
      </Link>

      <div className="flex justify-center items-center">
        <div className="hidden gap-3 md:gap-7 font-medium md:flex items-center">
          <Link href="#explore" className="flex items-center gap-1 md:gap-2">
            <span>Explore</span>{" "}
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <Link href="#mentor">Mentor</Link>
          <Link href="#testimonial">Testimonials</Link>
          <Link
            href="https://education.leadlly.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-blue-500 bg-[linear-gradient(110deg,#8B4CF4,45%,#B078F9,55%,#8B4CF4)] bg-size-[200%_100%] text-white font-semibold transition-colors hover:opacity-90 focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Sign In
          </Link>
        </div>
        <div className="flex md:hidden">
          <MobileMenu
            signUpLink="https://education.leadlly.in"
            menuItems={[
              { name: "Explore", href: "#explore" },
              { name: "Mentor", href: "#mentor" },
              { name: "Testimonial", href: "#testimonial" },
            ]}
          />
        </div>
      </div>
    </motion.nav>
  );
};
export default NavBar;
