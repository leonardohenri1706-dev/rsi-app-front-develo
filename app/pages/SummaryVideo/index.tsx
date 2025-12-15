import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useTranslation } from "react-i18next";

export const SummaryVideo: React.FC = () => {
  const { goToCervicalAccessVideo, goToWhatAboutAnesthetists } = useRoutes();
  const { t } = useTranslation("common");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem]">
        <video className="!w-full !h-full" autoPlay controls>
          <source src="/pre-oxygenation.mp4" type="video/mp4" />
        </video>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToCervicalAccessVideo}
          label={t("Navigation.GoBack")}
        />

        <Button
          onClick={goToWhatAboutAnesthetists}
          label={t("Navigation.Next")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
