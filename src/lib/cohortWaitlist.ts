export type WaitlistResponse = {
  success: boolean;
  alreadyJoined?: boolean;
  message: string;
};

export async function joinCohortWaitlist(email: string) {
  const response = await fetch("/api/cohort/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.trim().toLowerCase(),
      source: "cohort-landing",
    }),
  });

  const data = (await response.json().catch(() => null)) as
    | WaitlistResponse
    | null;

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || "Could not join the waitlist");
  }

  return data;
}
