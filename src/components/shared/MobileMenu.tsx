"use client";

import { motion } from "framer-motion";
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

const menuItems = [
  { name: "Explore", href: "#explore" },
  { name: "Mentor", href: "#mentor" },
  { name: "Testimonial", href: "#testimonial" },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const sheetVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
};

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex justify-center items-baseline">
          <Menu className="cursor-pointer size-5" />
        </button>
      </SheetTrigger>
      <SheetContent className="min-w-[100vw] pt-20 bg-[#F1E9F6]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sheetVariants}
          transition={{ type: "spring", stiffness: 50 }}
          className=" bg-transparent h-full  flex flex-col justify-center items-center"
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
              variants={itemVariants}
              className="mb-8 block text-center text-xl font-semibold text-black/50 hover:text-black focus:text-black"
            >
              <SheetClose>{item.name}</SheetClose>
            </motion.a>
          ))}
          <motion.a
            initial="hidden"
            href={"https://education.leadlly.in/"}
            animate="visible"
            transition={{
              delay: menuItems.length * 0.2,
              type: "spring",
              stiffness: 50,
            }}
            variants={itemVariants}
            className="block mx-auto mt-16 px-6 py-2 bg-primary-blue text-white rounded-full"
          >
            Sign Up
          </motion.a>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
