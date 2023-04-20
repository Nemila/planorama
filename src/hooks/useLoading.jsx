import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setIsLoading(true));
    router.events.on("routeChangeComplete", () => setIsLoading(false));
  }, [router.events]);

  return { isLoading };
};
export default useLoading;
