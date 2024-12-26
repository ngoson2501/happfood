import { useEffect, useState } from "react";

type LoginStat = {
  day: number; // 1 = Monday, 7 = Sunday
  count: number;
};

const useFetchWeeklyLogins = () => {
  const [data, setData] = useState<LoginStat[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/logins/stats/weekly");
        if (!response.ok) {
          throw new Error("Failed to fetch login data");
        }
        const result: LoginStat[] = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetchWeeklyLogins;
