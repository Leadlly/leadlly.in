import { Check } from "lucide-react";

import { COHORT_PREP_FEATURES } from "@/helpers/constants/cohort";
import { cn } from "@/lib/utils";
import { FeatureVisual } from "./CohortFeatureVisuals";
import { CohortCta, CohortDisplay, CohortEyebrow } from "./ui";

export default function CohortFeatures() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28" id="features">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <CohortEyebrow>Everything You Get With Cohort 1</CohortEyebrow>
          <CohortDisplay as="h2" className="mt-3 text-4xl sm:text-6xl">
            One app. Your whole preparation.
          </CohortDisplay>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#555] sm:text-base">
            Every feature connects to the next — so planning, practice, mentor
            guidance, and revision all work from the same picture of your
            preparation.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {COHORT_PREP_FEATURES.map((feature, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={feature.number}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={cn(reversed && "lg:order-2")}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="max-w-md text-3xl leading-tight font-medium tracking-tight sm:text-4xl md:text-5xl">
                      {feature.title}
                    </h3>
                    <span className="font-medium text-5xl leading-none text-[#e4e0ea] sm:text-7xl">
                      {feature.number}
                    </span>
                  </div>
                  <p className="mt-5 max-w-lg text-base leading-7 text-[#555] sm:text-lg">
                    {feature.intro}{" "}
                    {feature.listLabel ? (
                      <strong className="text-foreground">
                        {feature.listLabel}
                      </strong>
                    ) : null}
                  </p>
                  <ul className="mt-5 max-w-lg space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm leading-6 text-[#444] sm:text-base"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          strokeWidth={2.5}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 max-w-lg text-sm leading-6 text-[#666] italic sm:text-base">
                    {feature.footer}
                  </p>
                </div>

                <div className={cn(reversed && "lg:order-1")}>
                  <FeatureVisual
                    visual={feature.visual}
                    image={feature.image}
                    title={feature.title}
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 text-center md:mt-24">
          <CohortCta>Reserve Your Seat</CohortCta>
        </div>
      </div>
    </section>
  );
}
