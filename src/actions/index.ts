import { getCookie } from "./cookie_actions";

export const createReferralCode = async (data?: any) => {
    const token = await getCookie("token");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STUDENT_API_URL}/api/user/referral/create`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            // "x-api-key": process.env.NEXT_PUBLIC_STUDENT_API_KEY,
            Cookie: `token=${token}`,
          },
          credentials: "include",
        }
      );
  
      const responseData = await res.json();
  
      return responseData;
    } catch (error: unknown) {
      return error
    }
  };

export const fetchReferralCode = async () => {
    const token = await getCookie("token");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STUDENT_API_URL}/api/user/referral/get`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "x-api-key": process.env.NEXT_STUDENT_API_KEY,
            Cookie: `token=${token}`,
          },
          credentials: "include",
        }
      );
  
      const responseData = await res.json();
  
      return responseData;
    } catch (error: unknown) {
      return error
    }
  };