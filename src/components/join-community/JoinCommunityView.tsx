"use client";

import { useEffect } from "react";

import Link from "next/link";

import * as motion from "motion/react-client";

import Logo from "@/components/Icons/Logo";
import WhatsAppIcon from "@/components/Icons/WhatsAppIcon";
import LinkButton from "@/components/shared/LinkButton";
import { WHATSAPP_COMMUNITY_URL } from "@/helpers/constants";

const JoinCommunityView = () => {
  useEffect(() => {
    window.location.replace(WHATSAPP_COMMUNITY_URL);
  }, []);

  return (
    <main className="gridGradient relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-10">
      <div className="pointer-events-none absolute -top-24 left-[-8%] size-72 rounded-full bg-[#8B4CF4]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6%] bottom-[-8%] size-80 rounded-full bg-[#25D366]/15 blur-3xl" />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-lg rounded-5xl border border-white/70 bg-white/80 px-6 py-12 text-center shadow-xl backdrop-blur-md md:px-12 md:py-16"
      >
        <div className="mb-8 flex items-center justify-center gap-4 md:gap-6">
          <div className="flex size-16 items-center justify-center rounded-full bg-white shadow-md md:size-20">
            <Logo className="size-9 md:size-11" />
          </div>
          <span className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            ×
          </span>
          <div className="flex size-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md md:size-20">
            <WhatsAppIcon className="size-8 text-white md:size-10" />
          </div>
        </div>

        <p className="mb-2 text-sm font-medium tracking-wide text-primary uppercase">
          Leadlly Community
        </p>
        <h1 className="mb-3 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          Join the conversation
        </h1>
        <p className="mx-auto mb-8 max-w-sm text-base text-muted-foreground md:text-lg">
          Connecting you to our WhatsApp community for study tips, updates, and
          fellow aspirants.
        </p>

        <div className="flex flex-col items-center gap-3">
          <LinkButton
            href={WHATSAPP_COMMUNITY_URL}
            className="rounded-full pl-6"
          >
            Join Community
          </LinkButton>
          <p className="text-sm text-muted-foreground">
            Redirecting you to WhatsApp…
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Back to Leadlly
        </Link>
      </motion.section>
    </main>
  );
};

export default JoinCommunityView;
