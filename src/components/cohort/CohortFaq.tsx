import { COHORT_FAQS } from "@/helpers/constants/cohort";
import { CohortDisplay, CohortEyebrow } from "./ui";

export default function CohortFaq() {
  return (
    <section
      className="border-t border-[#e8e1f0] bg-[#f5f3f8] py-20 sm:py-24"
      id="faq"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <CohortEyebrow>Before you reserve</CohortEyebrow>
          <CohortDisplay as="h2" className="mt-3 text-5xl">
            Frequently Asked Questions
          </CohortDisplay>
        </div>
        <div className="mt-10 space-y-3">
          {COHORT_FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-[#d4cce0] bg-white p-5"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-extrabold">
                {faq.question}
                <span className="cohort-plus text-2xl text-primary transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 pr-7 text-sm leading-6 text-[#555]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
