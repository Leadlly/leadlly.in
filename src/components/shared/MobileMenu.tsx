"use client";

import { motion } from "motion/react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Menu from "../Icons/Menu";
import PlayStoreIcon from "../Icons/PlayStoreIcon";
import { Button } from "../ui/button";

interface MenuItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  signUpLink?: string;
  downloadLink?: string;
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const sheetVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
};

const MobileMenu = ({
  menuItems,
  signUpLink,
  downloadLink,
}: MobileMenuProps) => {
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
          <div className="mt-10 flex w-full max-w-xs flex-col gap-3 px-6">
            {downloadLink ? (
              <motion.a
                initial="hidden"
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                animate="visible"
                transition={{
                  delay: menuItems.length * 0.2,
                  type: "spring",
                  stiffness: 50,
                }}
                variants={itemVariants}
                className="flex items-center justify-center gap-2 rounded-full border border-blue-500 bg-[linear-gradient(110deg,#8B4CF4,45%,#B078F9,55%,#8B4CF4)] bg-size-[200%_100%] px-6 py-3 text-base font-semibold text-white transition-colors hover:opacity-90"
              >
                <PlayStoreIcon className="size-5" />
                Download
              </motion.a>
            ) : null}
            {signUpLink ? (
              <motion.a
                initial="hidden"
                href={signUpLink}
                target="_blank"
                rel="noopener noreferrer"
                animate="visible"
                transition={{
                  delay: (menuItems.length + 1) * 0.2,
                  type: "spring",
                  stiffness: 50,
                }}
                variants={itemVariants}
                className="flex items-center justify-center rounded-full border border-primary/30 bg-white px-6 py-3 text-base font-semibold text-primary"
              >
                Signup
              </motion.a>
            ) : null}
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
