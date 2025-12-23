import { useRouter, usePathname } from "next/navigation";

import { usePageContext } from "../store";
import pages from "../routes";

interface Return {
  goBack: () => void;
  goToForgotPassword: () => void;
  goToNewPassword: () => void;
  goToRegistration: () => void;
  goToCover: () => void;
  goToLogin: () => void;
  goToRespiratoryTractCheckUp: () => void;
  goToRespiratoryTractCheckUpMallampati: () => void;
  goToRespiratoryTractCheckUpImages: () => void;
  goToRespiratoryTractCheckUpMacocha: () => void;
  goToInternationalRecommendations: () => void;
  goToPositioning: () => void;
  goToVortexScheme: () => void;
  goToDifficultIntubation: () => void;
  goToDifficultVentilation: () => void;
  goToRapidSequenceInduction: () => void;
  goToAwakeIntubation: () => void;
  goToAfterAnesthesicInduction: () => void;
  goToLaryngealMask: () => void;
  goToCervicalAccess: () => void;
  goToCervicalAccessVideo: () => void;
  goToRapidSequenceInductionTips: () => void;
  goToFlowChartGeneralVision: () => void;
  goToSummaryVideo: () => void;
  goToWhatAboutAnesthetists: () => void;
  goToAboutTheAuthor: () => void;
  goToReferences: () => void;
}

const pathsThatShouldSetLastPage = [
  "/rapid-sequence-induction",
  "/awake-intubation",
];

export const useRoutes = (): Return => {
  const { setLastPage, lastPage } = usePageContext();
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "pt-BR";

  const routes = pages.reduce((routes: Return, page) => {
    const { path } = page;
    const routerName = page.routerName as keyof Return;

    routes[routerName] = () => {
      // Check if current path (without locale) is in the list
      // pathname is like /pt-BR/some-page
      const cleanPath = pathname.replace(`/${currentLocale}`, "") || "/";

      const shouldSetLastPage = pathsThatShouldSetLastPage.includes(cleanPath);

      if (shouldSetLastPage) setLastPage(pathname); // Store full path including locale

      const targetPath = `/${currentLocale}${path === "/" ? "" : path}`;
      router.push(targetPath);
    };

    return routes;
  }, {} as Return);

  routes.goBack = () => {
    if (lastPage) {
      router.push(lastPage);
      setLastPage("");
    } else {
      router.back();
    }
  };

  return routes;
};
