import {
  ImageWithLabelAndCaptionOption,
  BaseLayout,
  Button,
  Option,
} from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useTranslation } from "react-i18next";

export const RespiratoryTractCheckUpImages: React.FC = () => {
  const {
    goToRespiratoryTractCheckUpMallampati,
    goToRespiratoryTractCheckUpMacocha,
  } = useRoutes();

  const { t } = useTranslation("common");

  const imagesOptions: Option[] = [
    {
      imageSrc: "/Mallampati4 example.png",
      label: t("Pages.RespiratoryTractCheckUpImages.1.Label"),
    },
    {
      imageSrc: "/micrognatia.png",
      label: t("Pages.RespiratoryTractCheckUpImages.2.Label"),
    },
    {
      imageSrc: "/extensao ruim.png",
      label: t("Pages.RespiratoryTractCheckUpImages.3.Label"),
    },
    {
      imageSrc: "/abertura de boca ruim.png",
      label: t("Pages.RespiratoryTractCheckUpImages.4.Label"),
    },
  ];

  const renderImages = imagesOptions.map((option) => (
    <ImageWithLabelAndCaptionOption
      withCheckedText={false}
      key={option.label}
      option={option}
      size={110}
    />
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[75%] overflow-x-hidden overflow-y-hidden pb-[2rem] !gap-[1rem] !pt-[0rem]">
        <div
          className="flex flex-wrap items-start justify-center text-black text-[1.125rem] gap-[1rem] lg:gap-[2rem]"
          style={{ rowGap: "0.5rem" }}
        >
          {renderImages}
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToRespiratoryTractCheckUpMallampati}
          label={t("Navigation.GoBack")}
        />

        <Button
          onClick={goToRespiratoryTractCheckUpMacocha}
          label={t("Navigation.Next")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
