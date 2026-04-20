"use client";

import { motion } from "motion/react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Menu from "../Icons/Menu";
import { Button } from "../ui/button";

interface MenuItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  signUpLink?: string;
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const sheetVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
};

const MobileMenu = ({ menuItems, signUpLink }: MobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant={"ghost"} size={"icon-lg"}>
            <Menu />
          </Button>
        }
      />
      <SheetContent className="min-w-screen pt-20 bg-[#F1E9F6]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sheetVariants}
          transition={{ type: "spring", stiffness: 50 }}
          className=" bg-transparent h-full  flex flex-col justify-center items-center"
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
              variants={itemVariants}
              className="mb-8 block text-center text-xl font-semibold text-black/50 hover:text-black focus:text-black"
            >
              <SheetClose>{item.label}</SheetClose>
            </motion.a>
          ))}
          {signUpLink && (
            <motion.a
              initial="hidden"
              href={signUpLink}
              animate="visible"
              transition={{
                delay: menuItems.length * 0.2,
                type: "spring",
                stiffness: 50,
              }}
              variants={itemVariants}
              className="block mx-auto mt-16 px-6 py-2 bg-[linear-gradient(110deg,#8B4CF4,45%,#B078F9,55%,#8B4CF4)] bg-size-[200%_100%] text-white rounded-full border border-blue-500 font-semibold transition-colors hover:opacity-90"
            >
              Sign In
            </motion.a>
          )}
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
