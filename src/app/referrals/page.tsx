"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/shared/Footer";
import Reveal from "@/components/shared/Reveal";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "@/app/(auth)/_components/GoogleLoginButton";
import axios from "axios";
import { toast } from "sonner";
import { createReferralCode, fetchReferralCode } from "@/actions";
import { getCookie } from "@/actions/cookie_actions";

export default function ReferralsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [customCodeError, setCustomCodeError] = useState("");
  const [referralStats, setReferralStats] = useState({
    totalReferrals: 0,
    pendingReferrals: 0,
    completedReferrals: 0,
    rewards: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Check if user is logged in and fetch referral data
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // Check if token exists in cookies

        const token = await getCookie("token");
        console.log(document.cookie)
        setIsLoggedIn(!!token);
        
        if (token) {
          await createReferralCode();
          await fetchReferralData();
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };
    
    checkLoginStatus();
  }, []);

  // Fetch referral data from API
  const fetchReferralData = async () => {
    setIsLoading(true);
    try {
      const response = await fetchReferralCode();
      console.log(response, "here is the reponse ");
      
      if (response.referralCode) {
        setReferralCode(response.referralCode.code || "");
        setReferralStats({
          totalReferrals: response.totalReferrals || 0,
          pendingReferrals: response.pendingReferrals || 0,
          completedReferrals: response.completedReferrals || 0,
          rewards: response.rewards || 0,
        });
      }
    } catch (error: any) {
      console.error("Error fetching referral data:", error);
      toast.error("Failed to fetch referral data", {
        description: error.response?.data?.message || error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle successful login
  const handleLoginSuccess = async () => {
    setIsLoggedIn(true);
    await fetchReferralData();
  };

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout');
      setIsLoggedIn(false);
      setReferralCode("");
      setReferralStats({
        totalReferrals: 0,
        pendingReferrals: 0,
        completedReferrals: 0,
        rewards: 0,
      });
      toast.success("Logged out successfully");
    } catch (error: any) {
      console.error("Logout error:", error);
      toast.error("Logout failed", {
        description: error.response?.data?.message || error.message,
      });
    }
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast.success("Referral code copied to clipboard!");
  };

  const toggleCustomCodeInput = () => {
    setIsCustomizing(!isCustomizing);
    setCustomCode("");
    setCustomCodeError("");
  };

  const validateCustomCode = (code: string) => {
    // Basic validation rules
    if (code.length < 6) {
      return "Code must be at least 6 characters";
    }
    if (code.length > 12) {
      return "Code must be at most 12 characters";
    }
    if (!/^[A-Za-z0-9]+$/.test(code)) {
      return "Code can only contain letters and numbers";
    }
    return "";
  };

  const saveCustomCode = async () => {
    // Validate the custom code
    const error = validateCustomCode(customCode);
    if (error) {
      setCustomCodeError(error);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('/api/referrals/custom-code', {
        customCode: customCode.toUpperCase()
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Update the referral code
      setReferralCode(customCode.toUpperCase());
      setIsCustomizing(false);
      setCustomCode("");
      setCustomCodeError("");
      
      toast.success("Custom code saved successfully");
    } catch (error: any) {
      console.error("Error saving custom code:", error);
      toast.error("Failed to save custom code", {
        description: error.response?.data?.message || error.message,
      });
      setCustomCodeError("Failed to save custom code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-primary-blue text-3xl md:text-5xl font-bold mb-4">
              Refer & Earn Rewards
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-[#5B437D] font-semibold text-lg md:text-xl max-w-2xl mx-auto">
              Share the gift of personalized learning with your friends and earn exciting rewards!
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-16">
          <div className="w-full md:w-1/2">
            <Reveal>
              <Image
                src="/assets/images/tracker.png"
                alt="Referral Program"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </Reveal>
          </div>

          <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            {!isLoggedIn ? (
              <div className="text-center">
                <Reveal>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-blue mb-6">
                    Start Referring Friends
                  </h2>
                </Reveal>
                <Reveal>
                  <p className="text-gray-700 mb-8">
                    Login to get your unique referral code and start earning rewards when your friends join Leadlly.
                  </p>
                </Reveal>
                <Reveal>
                  <div className="max-w-xs mx-auto">
                    <GoogleLoginButton onLoginSuccess={handleLoginSuccess} />
                  </div>
                </Reveal>
              </div>
            ) : (
              <div>
                <Reveal>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-blue mb-6">
                    Your Referral Dashboard
                  </h2>
                </Reveal>
                
                <div className="mb-8">
                  <Reveal>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-700">Your Referral Code:</p>
                      <button
                        onClick={toggleCustomCodeInput}
                        className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                      >
                        {isCustomizing ? "Cancel" : "Create Custom Code"}
                      </button>
                    </div>
                  </Reveal>
                  
                  {isCustomizing ? (
                    <Reveal>
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <input
                            type="text"
                            value={customCode}
                            onChange={(e) => setCustomCode(e.target.value)}
                            placeholder="Enter custom code"
                            className="bg-purple-50 text-purple-800 font-mono text-xl py-2 px-4 rounded-l-lg flex-grow border-2 border-purple-100 focus:outline-none focus:border-purple-300"
                            maxLength={12}
                            disabled={isLoading}
                          />
                          <button
                            onClick={saveCustomCode}
                            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-r-lg disabled:bg-purple-400"
                            disabled={isLoading}
                          >
                            {isLoading ? "Saving..." : "Save"}
                          </button>
                        </div>
                        {customCodeError && (
                          <p className="text-red-500 text-sm">{customCodeError}</p>
                        )}
                        <p className="text-gray-500 text-xs">
                          Custom code must be 6-12 characters and can only contain letters and numbers.
                        </p>
                      </div>
                    </Reveal>
                  ) : (
                    <Reveal>
                      <div className="flex items-center">
                        <div className="bg-purple-100 text-purple-800 font-mono text-xl py-2 px-4 rounded-l-lg flex-grow">
                          {isLoading ? "Loading..." : referralCode}
                        </div>
                        <button
                          onClick={copyReferralCode}
                          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-r-lg disabled:bg-purple-400"
                          disabled={isLoading || !referralCode}
                        >
                          Copy
                        </button>
                      </div>
                    </Reveal>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Reveal>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="text-gray-700">Total Referrals</p>
                      <p className="text-3xl font-bold text-purple-600">
                        {isLoading ? "..." : referralStats.totalReferrals}
                      </p>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="text-gray-700">Pending</p>
                      <p className="text-3xl font-bold text-amber-500">
                        {isLoading ? "..." : referralStats.pendingReferrals}
                      </p>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="text-gray-700">Completed</p>
                      <p className="text-3xl font-bold text-green-600">
                        {isLoading ? "..." : referralStats.completedReferrals}
                      </p>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="text-gray-700">Rewards Earned</p>
                      <p className="text-3xl font-bold text-blue-600">
                        ₹{isLoading ? "..." : referralStats.rewards}
                      </p>
                    </div>
                  </Reveal>
                </div>
                
                <Reveal>
                  <button
                    onClick={handleLogout}
                    className="text-purple-600 hover:text-purple-800 font-medium disabled:text-purple-400"
                    disabled={isLoading}
                  >
                    {isLoading ? "Please wait..." : "Logout"}
                  </button>
                </Reveal>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-bold text-primary-blue mb-8 text-center">
              How It Works
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Share Your Code</h3>
                <p className="text-gray-600">Share your unique referral code with friends and family</p>
              </div>
            </Reveal>
            
            <Reveal>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Friends Join</h3>
                <p className="text-gray-600">Your friends sign up using your referral code</p>
              </div>
            </Reveal>
            
            <Reveal>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
                <p className="text-gray-600">Get exciting rewards for each successful referral</p>
              </div>
            </Reveal>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-8 text-white">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Referral Rewards
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-center mb-8">
              Earn exciting rewards for each friend who joins Leadlly using your referral code!
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">For You</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>₹100 for each successful referral</li>
                  <li>Premium features unlock at 5 referrals</li>
                  <li>Exclusive mentorship session at 10 referrals</li>
                </ul>
              </div>
            </Reveal>
            
            <Reveal>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">For Your Friends</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>₹50 discount on their first purchase</li>
                  <li>Free access to premium study materials</li>
                  <li>7-day trial of premium features</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}