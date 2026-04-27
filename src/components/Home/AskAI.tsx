import React from "react";
import Link from "next/link";

import {
  ChatGptIcon,
  ClaudeIcon,
  PerplexityAiIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import Container from "../shared/Container";
import ImageAnimation from "../shared/ImageAnimation";
import SectionContainer from "../shared/SectionContainer";
import { buttonVariants } from "../ui/button";

const AIButtons = [
  {
    label: "Ask ChatGPT",
    icon: ChatGptIcon,
    url: "https://chat.openai.com",
  },
  {
    label: "Ask Perplexity",
    icon: PerplexityAiIcon,
    url: "https://www.perplexity.ai/search/new",
  },
  {
    label: "Ask Claude",
    icon: ClaudeIcon,
    url: "https://claude.ai/new",
  },
];

const AskAI = () => {
  return (
    <SectionContainer className="px-0 bg-background">
      <Container className="md:p-0 bg-primary/20 border-none rounded-b-none grid grid-cols-1 md:grid-cols-3 place-items-center">
        <ImageAnimation
          src="/assets/illustrations/svg_1.svg"
          alt=""
          className="w-[343px] h-[343px] hidden md:flex"
        />

        <div className="md:col-span-2 flex flex-col gap-6 px-5">
          <h4 className="font-semibold text-2xl md:text-3xl lg:text-5xl">
            Still not sure that <span className="text-primary">Leadlly</span> is
            right for you?
          </h4>

          <p className="text-base md:text-xl">
            Let ChatGPT, Claude, or Perplexity do the thinking for you. Click a
            button and see what your favorite AI says about Leadlly
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            {AIButtons.map((button) => (
              <Link
                href={`${button.url}/?q=tell me why leadlly.in is a great choice for me`}
                target="_blank"
                key={button.label}
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "border-ring bg-background text-xl font-medium py-6",
                )}
              >
                {button.icon && (
                  <HugeiconsIcon
                    icon={button.icon}
                    className="shrink-0 size-6"
                  />
                )}
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default AskAI;
