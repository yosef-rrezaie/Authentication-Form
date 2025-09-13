"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { addLocalStorage } from "@/lib/LocalStorageAddRm";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const res = await axios.get("https://randomuser.me/api/?results=1&nat=us");
      return res.data;
    },
    onSuccess: (data) => {
      addLocalStorage(data.results);
      router.replace("/dashboard");
      toast.success("به داشبورد منتقل می شوید");
    },
  });
}
