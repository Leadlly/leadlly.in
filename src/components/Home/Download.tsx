"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Download, PlayCircle } from "lucide-react";
import { cn } from "@/utils/cn";

const AppleLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.0468 12.2967C17.0348 10.3967 18.5908 9.39072 18.6648 9.34272C17.7648 8.01672 16.3228 7.83072 15.8228 7.81272C14.5988 7.68072 13.4148 8.53272 12.7908 8.53272C12.1548 8.53272 11.1828 7.82872 10.1628 7.84672C8.83883 7.86472 7.61083 8.62272 6.94283 9.80072C5.56283 12.1967 6.59083 15.7267 7.91083 17.5807C8.56283 18.4927 9.33083 19.5167 10.3628 19.4867C11.3708 19.4567 11.7588 18.8727 12.9708 18.8727C14.1708 18.8727 14.5348 19.4867 15.5908 19.4687C16.6708 19.4567 17.3388 18.5507 17.9668 17.6327C18.7108 16.5847 19.0148 15.5607 19.0268 15.5187C19.0028 15.5067 17.0588 14.7667 17.0468 12.2967Z" />
    <path d="M15.3828 6.45264C15.9108 5.80264 16.2748 4.91064 16.1768 4.00464C15.3948 4.03664 14.4348 4.53064 13.8828 5.16664C13.3908 5.72064 12.9548 6.64264 13.0648 7.52064C13.9328 7.59064 14.8428 7.09264 15.3828 6.45264Z" />
  </svg>
);

const DownloadSection: React.FC = () => {
  const downloadSectionRef = useRef<HTMLDivElement>(null);

  const scrollToDownloadSection = () => {
    downloadSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="download-section" className="text-foreground py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mt-10 mb-2 text-center font-bold bg-gradient-to-r from-purple-700 via-orange-400 to-purple-700 bg-clip-text text-transparent">
              Download Our App
            </h1>
          </div>
          <p className="text-muted-foreground text-lg mb-8">
            Experience personalized mentorship and tracking on the go
          </p>
        </motion.div>

        <div ref={downloadSectionRef} className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center sm:justify-center gap-6">
            <motion.a
              download={true}
              href={
                "https://leadlly-general.s3.ap-south-1.amazonaws.com/leadllly_1.0.0_v6.apk"
              }
              className={cn(
                "flex-1 inline-flex items-center justify-center px-6 py-4 font-semibold rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                "bg-[#E8DAEE] text-primary border-2 border-[#D0B5F9] hover:bg-[#D0B5F9] hover:text-white max-w-xs"
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}>
              <PlayCircle className="w-6 h-6 mr-2" />
              Download for Android
            </motion.a>
            {/* <motion.a
              href=""
              className={cn(
                "flex-1 inline-flex items-center justify-center px-6 py-4 font-semibold rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                "bg-[#FEFBFF] text-primary border-2 border-black/30 hover:bg-[#F4E8FF] hover:border-primary max-w-xs"
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}>
              <AppleLogo />
              <span className="ml-2">Download for iOS</span>
            </motion.a> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
