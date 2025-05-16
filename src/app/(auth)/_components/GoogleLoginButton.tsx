import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface GoogleLoginButtonProps {
  onLoginSuccess?: () => void;
}

const GoogleLoginButton = ({ onLoginSuccess }: GoogleLoginButtonProps) => {
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      try {
        const res = await axios.post("/api/google/auth", {
          access_token: credentialResponse.access_token
        },{
          withCredentials: true, 
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Instead of using Redux, we can store user data in localStorage or cookies if needed
        // Or simply use the response data directly
        
        toast.success("Login success", {
          description: res.data.message,
        });

        // Call the onLoginSuccess callback if provided
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      
      } catch (error: any) {
        console.error("Axios error:", error);
        toast.error("Google login failed!", {
          description: error.response?.data?.message || error.message,
        });
      }
    },
    onError: (error: any) => {
      console.error("Google login error:", error);
      toast.error("Google login failed!", {
        description: error.message,
      });
    },
  });

  
  return (
    <button
      type="button"
      onClick={() => login()}
      className="w-full flex items-center justify-center gap-2 py-2 px-4 font-medium bg-white hover:bg-[#e2e8f0] border border-[#e2e8f0] rounded-[7px] text-[14px] md:text-[20px] lg:text-xl md:h-12 transition-colors">
      <Image
        src="/assets/icons/google-icon.svg"
        alt="Sign in with Google"
        width={17}
        height={17}
      />
      <span>Sign in with Google</span>
    </button>
  );
};

export default GoogleLoginButton;
