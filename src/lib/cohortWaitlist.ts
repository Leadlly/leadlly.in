export type WaitlistPayload = {
  name: string;
  phone: string;
  email: string;
};

export type WaitlistResponse = {
  success: boolean;
  alreadyJoined?: boolean;
  existingUser?: boolean;
  message: string;
};

export async function joinCohortWaitlist(payload: WaitlistPayload) {
  const response = await fetch("/api/cohort/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name.trim(),
      phone: payload.phone.trim(),
      email: payload.email.trim().toLowerCase(),
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
