"use client"
import { useState, useEffect } from "react";

// Define the User type
type User = {
  avatar: string;
  email: string;
  id: string;
  username: string;
};

const useUserInfo = (userId: string | null) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUserInfo = async () => {
      setLoading(true);  // Set loading to true when starting to fetch data
      setError(null);    // Reset previous errors

      try {
        const response = await fetch("/api/getUserInfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user info");
        }

        const data: User = await response.json();
        setUserInfo(data);  // Set the fetched data
      } catch (error) {
        console.error("Error fetching user info:", error);
        setError("Failed to fetch user info");
        setUserInfo(null);  // Reset userInfo in case of an error
      } finally {
        setLoading(false);  // Always set loading to false after fetch
      }
    };

    fetchUserInfo();
  }, [userId]);

  return { userInfo, loading, error };
};

export default useUserInfo;
