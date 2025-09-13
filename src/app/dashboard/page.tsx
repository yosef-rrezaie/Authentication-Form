"use client";
import { useEffect, useState } from "react";
import { removeLocalStorage } from "@/lib/LocalStorageAddRm";

interface UserName {
  title: string;
  first: string;
  last: string;
}

interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

function DashboardPage() {
  const [name, setName] = useState<UserName | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [picture, setPicture] = useState<UserPicture | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedPic = localStorage.getItem("picture");

    if (storedName) {
      try {
        setName(JSON.parse(storedName));
      } catch {
        setName(null);
      }
    }

    if (storedEmail) {
      try {
        setEmail(JSON.parse(storedEmail));
      } catch {
        setEmail(null);
      }
    }

    if (storedPic) {
      try {
        setPicture(JSON.parse(storedPic));
      } catch {
        setPicture(null);
      }
    }
  }, []);

  const handleLogout = () => {
    removeLocalStorage();
  };

  return (
    <main className="min-h-dvh grid place-items-center bg-slate-50 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
        <div className="text-center space-y-4">
          <h1 className="text-xl sm:text-2xl font-semibold">داشبورد</h1>

          {picture && (
            <img
              src={picture.medium}
              alt="User"
              className="mx-auto rounded-full w-24 h-24 border-2 border-rose-600 shadow-sm"
            />
          )}

          {name ? (
            <p className="text-base sm:text-lg font-medium text-rose-600">
            {name.first} {name.last} خوش آمدی
            </p>
          ) : (
            <p className="text-base sm:text-lg font-medium text-rose-600">
              👋 خوش آمدی کاربر عزیز
            </p>
          )}

          {email && (
            <p className="text-sm sm:text-base text-slate-600">{email}</p>
          )}
        </div>

        <button
          onClick={handleLogout}
          className={[
            "inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 sm:py-3 mt-8 text-sm sm:text-base font-medium text-white",
            "bg-rose-600 hover:bg-rose-700",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-600",
          ].join(" ")}
        >
           خروج
        </button>
      </div>
    </main>
  );
}

export default DashboardPage;
