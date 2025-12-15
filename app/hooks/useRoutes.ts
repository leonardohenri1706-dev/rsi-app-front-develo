import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const routes = pages.reduce((routes: Return, page) => {
    const { path } = page;
    const routerName = page.routerName as keyof Return;

    routes[routerName] = () => {
      const shouldSetLastPage = pathsThatShouldSetLastPage.includes(
        window.location.pathname
      );

      if (shouldSetLastPage) setLastPage(window.location.pathname);

      navigate(path);
    };

    return routes;
  }, {} as Return);

  routes.goBack = () => {
    navigate(lastPage);
    setLastPage("");
  };

  return routes;
};
