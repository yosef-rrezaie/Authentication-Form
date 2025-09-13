import { removeLocalStorage } from "./LocalStorageAddRm";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const handelGetOut = (router: AppRouterInstance): void => {
  removeLocalStorage();
  router.replace("/login");
};

export { handelGetOut };
