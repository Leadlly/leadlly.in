import Link from "next/link";

import { cn } from "@/lib/utils";
import PlayStoreIcon from "../Icons/PlayStoreIcon";
import Container from "../shared/Container";
import LinkButton from "../shared/LinkButton";
import Reveal from "../shared/Reveal";
import SectionContainer from "../shared/SectionContainer";
import { buttonVariants } from "../ui/button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.leadlly.app";
const SIGNUP_URL = "https://education.leadlly.in/signup";

const WebIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-6", className)}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
  </svg>
);

const DownloadSection = () => {
  return (
    <SectionContainer id="download-section" className="mt-10 md:mt-16 pb-10">
      <Container className="relative overflow-hidden rounded-5xl bg-[url(/assets/images/hero-bg.svg)] bg-no-repeat bg-size-[auto_280px] md:bg-size-[auto_420px] bg-right py-12 md:py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-4">
          <Reveal className="w-full flex justify-center">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-tight text-foreground">
              Find your better way
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="w-full flex justify-center">
            <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl">
              Get Leadlly on Play Store, or sign up on the web and start your
              personalized preparation today.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          <Reveal delay={0.25} className="w-full">
            <div className="h-full rounded-4xl border border-ring bg-background/80 backdrop-blur-sm p-7 md:p-8 flex flex-col items-start gap-5 text-left">
              <span className="size-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <PlayStoreIcon className="size-7" />
              </span>

              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Find us on Play Store
                </h3>
                <p className="text-base md:text-lg text-foreground/70">
                  Download the Leadlly app and take your planner, tracker, and
                  mentor with you.
                </p>
              </div>

              <Link
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "xl", variant: "outline" }),
                  "mt-auto h-14 gap-3 rounded-full border-ring px-5 text-base md:text-lg font-medium",
                )}
              >
                <PlayStoreIcon className="size-5" />
                Get it on Google Play
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.35} className="w-full">
            <div className="h-full rounded-4xl border border-ring bg-background/80 backdrop-blur-sm p-7 md:p-8 flex flex-col items-start gap-5 text-left">
              <span className="size-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <WebIcon className="size-7" />
              </span>

              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Sign up on the web
                </h3>
                <p className="text-base md:text-lg text-foreground/70">
                  Create your account at education.leadlly.in and begin studying
                  with a plan built for you.
                </p>
              </div>

              <LinkButton
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pl-5 rounded-full"
              >
                Sign up free
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default DownloadSection;
