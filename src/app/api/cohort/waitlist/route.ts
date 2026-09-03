import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const apiUrl =
    process.env.STUDENT_API_URL || process.env.NEXT_PUBLIC_STUDENT_API_URL;

  if (!apiUrl) {
    return Response.json(
      { success: false, message: "Waitlist is not configured" },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);

  const response = await fetch(`${apiUrl.replace(/\/$/, "")}/api/cohort/waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body ?? {}),
  });

  const data = await response.json().catch(() => ({
    success: false,
    message: "Could not join the waitlist",
  }));

  return Response.json(data, { status: response.status });
}
