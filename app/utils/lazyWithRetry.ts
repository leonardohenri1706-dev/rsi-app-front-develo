import { lazy } from "react";
import { NODE_ENV } from "./env";

const lazyWithRetry = (componentImport: any) =>
  lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem("page-has-been-force-refreshed") || "false"
    );

    try {
      const component = await componentImport();

      window.localStorage.setItem("page-has-been-force-refreshed", "false");

      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        window.localStorage.setItem("page-has-been-force-refreshed", "true");

        if (NODE_ENV === "production") return window.location.reload();
      }

      throw error;
    }
  });

export default lazyWithRetry;
