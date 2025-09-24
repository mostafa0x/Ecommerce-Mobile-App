import { useRouter } from "expo-router";

export function useBackHandler() {
  const router = useRouter();
  const canBack = router.canGoBack();

  return () => {
    if (canBack) {
      return router.back();
    } else {
      return router.push("/");
    }
  };
}
