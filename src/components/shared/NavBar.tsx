"use client";
import { ChevronDown, Menu } from "lucide-react";
import Logo from "../Icons/Logo";
import { motion } from "framer-motion";
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
      className="backdrop-blur-lg border-b fixed w-full z-50 border-b-[#bfa0c5] flex justify-between px-4 md:px-20 py-3 items-center">
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
          {/* <Link
            href={"https://education.leadlly.in/"}
            className="bg-blue-700 text-white py-1 px-2 md:px-4 rounded-lg border"
          >
            Sign Up
          </Link> */}
        </div>
        <div className="flex md:hidden">
          <MobileMenu />
        </div>
      </div>
    </motion.nav>
  );
};
export default NavBar;
