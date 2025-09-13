import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

function redirectHandler(router: AppRouterInstance): void {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const picture = localStorage.getItem("picture");

  if (!name || !email || !picture) {
    router.replace("/login");
    return;
  }

  if (name && email && picture) {
    router.replace("/dashboard");
    return;
  }
}

export { redirectHandler };
