import { useRouter } from "expo-router";
import { useState } from "react";

export default function useSerachHandler() {
  const router = useRouter();
  const [q, setQ] = useState("");

  function Seraching() {
    router.push({ pathname: "/Serach" as any, params: { q } });
  }

  return { q, setQ, Seraching };
}
