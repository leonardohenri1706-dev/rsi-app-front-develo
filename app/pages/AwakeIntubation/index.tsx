import { BaseLayout, Button } from "@/app/components";
import { useTranslation } from "react-i18next";
import { useRoutes } from "@/app/hooks";

import { ListItem } from "../RapidSequenceInduction/ListItem";
import { listItemsLabels } from "./listItemsLabels";

export const AwakeIntubation: React.FC = () => {
  const {
    goToAfterAnesthesicInduction,
    goToRapidSequenceInduction,
    goToDifficultVentilation,
  } = useRoutes();
  const { t } = useTranslation("common");

  const listItems = listItemsLabels.map((label) => ({
    text: t(label.text),
  }));

  const renderListItems = listItems.map((item, index) => (
    <ListItem key={index} item={item} index={index} />
  ));

  const onClickOnNotSuccess = () => {
    localStorage.setItem("awakeIntubationNotASuccess", "true");
    goToRapidSequenceInduction();
  };

  const onClickOnNext = () => {
    localStorage.setItem("awakeIntubationNotASuccess", "false");
    goToAfterAnesthesicInduction();
  };

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[79%] !lg:h-[79%] !pt-[0rem] !lg:pt-[1rem] !pb-0 text-black text-[0.875rem] px-5 lg:px-2 !overflow-y-hidden">
        <ol className="flex flex-col w-full h-fit gap-[1rem] list-decimal overflow-y-auto">
          {renderListItems}
        </ol>

        <Button
          onClick={onClickOnNotSuccess}
          label={t("Pages.AwakeIntubation.NotSuccessful")}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToDifficultVentilation}
          label={t("Navigation.GoBack")}
        />

        <Button onClick={onClickOnNext} label={t("Navigation.Next")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
