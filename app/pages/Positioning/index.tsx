import {
  ImageWithLabelAndCaptionOption,
  BaseLayout,
  Button,
  Option,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useTranslation } from "react-i18next";

export const Positioning: React.FC = () => {
  const {
    goToRespiratoryTractCheckUpMacocha,
    goToInternationalRecommendations,
  } = useRoutes();

  const { t } = useTranslation("common");

  const imagesOptions: Option[] = [
    {
      imageSrc: "/olfative position.png",
      label: t("Pages.Positioning.Images.1.Label"),
      caption: t("Pages.Positioning.Images.1.Caption"),
    },
    {
      imageSrc: "/ramp position.png",
      label: t("Pages.Positioning.Images.2.Label"),
      caption: t("Pages.Positioning.Images.2.Caption"),
    },
  ];

  const renderImages = imagesOptions.map((option) => (
    <ImageWithLabelAndCaptionOption
      withCheckedText={false}
      key={option.label}
      option={option}
      width="w-20rem"
      size={400}
    />
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[75%] overflow-x-hidden overflow-y-hidden pb-[2rem] !pt-[1rem] !justify-center">
        <div className="flex items-center justify-center text-black text-[1.125rem] gap-[5rem]">
          {renderImages}
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToRespiratoryTractCheckUpMacocha}
          label={t("Navigation.GoBack")}
        />

        <Button
          onClick={goToInternationalRecommendations}
          label={t("Navigation.Next")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
