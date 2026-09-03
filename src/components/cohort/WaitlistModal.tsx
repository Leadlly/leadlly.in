"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { X } from "lucide-react";

import { joinCohortWaitlist } from "@/lib/cohortWaitlist";

export default function WaitlistModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) return;
    setEmail("");
    setStatus("idle");
    setMessage("");
    setError("");
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setStatus("loading");

    try {
      const result = await joinCohortWaitlist(email);
      setStatus("success");
      setMessage(result.message);
    } catch (submitError) {
      setStatus("idle");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Could not join the waitlist",
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/45 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        className="w-full max-w-md rounded-[1.75rem] border border-[#d4cce0] bg-white p-6 shadow-[0_24px_80px_rgba(26,16,48,0.28)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold tracking-[.16em] text-primary uppercase">
              Cohort 1
            </p>
            <h2
              id="waitlist-title"
              className="mt-1 text-2xl font-medium tracking-tight"
            >
              Join the Waitlist
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-9 place-items-center rounded-full border border-[#e8e1f0] text-[#555] hover:bg-[#f5f3f8]"
            aria-label="Close waitlist form"
          >
            <X className="size-4" strokeWidth={2.4} />
          </button>
        </div>

        {status === "success" ? (
          <p className="mt-6 rounded-2xl bg-[#f5f3f8] px-4 py-5 text-sm font-semibold leading-6 text-[#333]">
            {message || "You're on the waitlist. We'll email you when Cohort 1 opens."}
          </p>
        ) : (
          <>
            <p className="mt-3 text-sm leading-6 text-[#555]">
              Enter your email and we&apos;ll notify you when Cohort 1 opens.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor={emailId}
                  className="mb-2 block text-xs font-extrabold tracking-wide text-[#333] uppercase"
                >
                  Email
                </label>
                <input
                  id={emailId}
                  type="email"
                  required
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-[#d4cce0] bg-[#fbfaff] px-4 py-3 text-sm font-medium outline-none ring-primary/20 placeholder:text-[#aaa] focus:border-primary focus:ring-4"
                />
              </div>
              {error ? (
                <p className="text-sm font-semibold text-red-600">{error}</p>
              ) : null}
              <button
                type="submit"
                disabled={status === "loading"}
                className="cohort-cta inline-flex w-full items-center justify-center rounded-2xl bg-primary px-8 py-4 font-extrabold text-white disabled:opacity-70"
              >
                {status === "loading" ? "Joining…" : "Join"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
