"use client";

import { redirectHandler } from "@/lib/redirects";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    redirectHandler(router);
  }, []);

  return <></>;
}
