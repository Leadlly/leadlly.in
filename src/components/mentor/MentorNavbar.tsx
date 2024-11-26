"use client";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
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
import MobileMenu from "../shared/MobileMenu";

type Props = {};
const MentorNavbar = (props: Props) => {
  return (
    <div className="px-4 md:px-20 fixed w-full z-50 ">
      <motion.nav
        initial={{ opacity: 0.5, y: "-100px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="backdrop-blur-lg  border border-[#e8d5fb]  bg-[#5A10D908] rounded-full  mt-5 flex justify-between px-4 md:px-14 py-4 items-center"
      >
        <Link href={"/"}>
          <Logo className="w-8 h-8 md:w-12 md:h-12" />
        </Link>

        <div className="flex justify-center items-center">
          <div className="hidden gap-3 md:gap-7 font-medium md:flex items-center">
            <div className="flex bg-white p-3 rounded-3xl gap-5 px-4">
              <Link
                href="#guidance"
                className="flex items-center gap-1 md:gap-2 text-blue-600"
              >
                <span>Guidance</span>
              </Link>
              <Link href="#perks" className="text-blue-600">
                Perks
              </Link>
              <Link href="#joinus" className="text-blue-600">
                Join Us
              </Link>
            </div>
            <Link
              href={"https://mentor.leadlly.in/"}
              className="bg-purple-600 text-white py-3 px-4 md:px-6 rounded-3xl border flex items-center"
            >
              Login
              <ArrowUpRight />
            </Link>
          </div>
          <div className="flex md:hidden">
            <MobileMenu
              signUpLink="https://mentor.leadlly.in/"
              menuItems={[
                { name: "Guidance", href: "#guidance" },
                { name: "Our Courses", href: "#courses" },
                { name: "Resources", href: "#resources" },
              ]}
            />
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
export default MentorNavbar;
