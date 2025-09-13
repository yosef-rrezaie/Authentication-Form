"use client";
import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { redirectHandler } from "@/lib/redirects";
import { submitHandler } from "@/lib/SubmitHandler";
import { onBlurHandler } from "@/lib/BlurHandler";
import { useLoginMutation } from "@/hooks/useLoginMutation";

function LoginPage() {
  const router = useRouter();
  const mutation = useLoginMutation();
  const [invalidMessage, setInvalidMessage] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const input = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    redirectHandler(router);
    input.current?.focus();
  } , []);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setInvalidMessage("");
  }

  return (
    <main className="min-h-dvh grid place-items-center bg-slate-50 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
        <div className="text-center space-y-1">
          <h1 className="text-xl sm:text-2xl font-semibold">ورود | ثبت‌نام</h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            سلام! لطفاً شماره موبایل خود را وارد کنید.
          </p>
        </div>

        <form
          className="mt-6 sm:mt-8"
          onSubmit={(e) => submitHandler(e, invalidMessage, mutation)}
        >
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm sm:text-base text-slate-700"
            >
              شماره موبایل
            </label>

            <input
              value={inputValue}
              onChange={onChangeHandler}
              onBlur={() => onBlurHandler(inputValue, setInvalidMessage)}
              id="phone"
              type="tel"
              ref={input}
              placeholder="مثال: 09123456789"
              dir="rtl"
              className={[
                "w-full rounded-xl border bg-white mt-3 px-3 py-2.5 sm:py-3 text-sm sm:text-base outline-none",
                "placeholder:text-slate-400",
                "border-slate-300 focus:border-rose-600  focus:ring-1 focus:ring-rose-600/20 ",
              ].join(" ")}
            />

            <div className="text-xs sm:text-sm text-rose-600">
              {invalidMessage && (
                <p className="text-xs sm:text-sm text-rose-600">
                  {invalidMessage}
                </p>
              )}
            </div>
          </div>

          <div className="relative">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={[
                "inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 sm:py-3 mt-6 sm:mt-8 text-sm sm:text-base font-medium text-white",
                "bg-rose-600 hover:bg-rose-700",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-600",
                "disabled:bg-rose-300 disabled:pointer-events-none",
              ].join(" ")}
            >
              ورود
            </button>
            {mutation.isPending && (
              <Loader2 className="h-5 w-5 animate-spin absolute top-[56%] text-white left-[3%]" />
            )}
          </div>

          <p className="text-xs sm:text-[13px] md:text-sm mt-5 text-slate-500 text-center">
            با ورود، شرایط استفاده را می‌پذیرید.
          </p>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
