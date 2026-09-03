export type WaitlistResponse = {
  success: boolean;
  alreadyJoined?: boolean;
  message: string;
};

export async function joinCohortWaitlist(email: string) {
  const apiUrl = process.env.NEXT_PUBLIC_STUDENT_API_URL;
  if (!apiUrl) {
    throw new Error("Waitlist is not configured");
  }

  const response = await fetch(`${apiUrl}/api/cohort/waitlist`, {
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
