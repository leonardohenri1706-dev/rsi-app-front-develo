import { useEffect } from "react";

import { LogoOnClipboard } from "@/app/components/PageLayout/LogoOnClipboard";
import { BaseLayout } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useTranslation } from "react-i18next";

export const Cover: React.FC = () => {
  const { goToLogin } = useRoutes();
  const { t } = useTranslation("common");

  useEffect(() => {
    setTimeout(() => {
      goToLogin();
    }, 1200);
  }, []);

  return (
    <BaseLayout.Root>
      <BaseLayout.Content
        className={`!pt-[18rem] transition-opacity animate-fade-out`}
      >
        <LogoOnClipboard size={500} show />

        <p className="text-xl font-bold text-center text-gray-700">
          {t("Pages.Cover.Title")}
        </p>
      </BaseLayout.Content>
    </BaseLayout.Root>
  );
};
