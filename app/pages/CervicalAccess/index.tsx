import { BsCameraVideo } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";

const listItemsLabels: string[] = [
  "Pages.CervicalAccess.ListItems.0",
  "Pages.CervicalAccess.ListItems.1",
];

export const CervicalAccess: React.FC = () => {
  const { goToLaryngealMask, goToCervicalAccessVideo } = useRoutes();
  const { t } = useTranslation("common");

  const listItems = listItemsLabels.map((label) => t(label));

  const renderListItems = listItems.map((item, index) => (
    <li key={index} className="text-black">
      {item}
    </li>
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[1rem] !pb-[3rem]">
        <div className="flex flex-row h-full w-full text-black text-[1rem] items-center justify-center lg:px-5 px-8">
          <ul className="flex flex-col w-full h-full justify-center gap-[4rem] list-disc">
            <li>
              <b>{t("Pages.CervicalAccess.Cricotireoidostomia")}</b>

              <ol className="flex flex-col w-full h-full justify-center gap-[2rem] list-decimal">
                {renderListItems}
              </ol>
            </li>

            <li>
              <b>{t("Pages.CervicalAccess.Traqueostomia")}</b>
            </li>
          </ul>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToLaryngealMask}
          className="!w-[8rem]"
          label={t("Navigation.GoBack")}
        />

        <Button
          onClick={goToCervicalAccessVideo}
          className="!w-[8rem]"
          label={
            <span className="flex flex-row items-center">
              <BsCameraVideo size={20} className="mr-2" />
              {t("Pages.CervicalAccess.SeeTheVideo")}
            </span>
          }
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
