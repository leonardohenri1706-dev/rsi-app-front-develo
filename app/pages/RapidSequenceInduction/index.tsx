import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { listItemsLabels } from "./listItemsLabels";
import { ListItem } from "./ListItem";
import { useTranslation } from "react-i18next";

const useGoToLastPage = () => {
  const {
    goToDifficultVentilation,
    goToDifficultIntubation,
    goToAwakeIntubation,
  } = useRoutes();

  return () => {
    const difficultIntubation = localStorage.getItem("isDifficultIntubation");
    if (difficultIntubation === "false") return goToDifficultIntubation();

    const difficultVentilation = localStorage.getItem("isDifficultVentilation");
    if (difficultVentilation === "false") return goToDifficultVentilation();

    return goToAwakeIntubation();
  };
};

export const RapidSequenceInduction: React.FC = () => {
  const { goToAfterAnesthesicInduction } = useRoutes();
  const { t } = useTranslation("common");
  const goToLastPage = useGoToLastPage();

  const listItems = listItemsLabels.map((item) => ({
    text: t(item.text),
    ExtraContent: item.ExtraContent,
  }));

  const renderListItems = listItems.map((item, index) => (
    <ListItem key={index} item={item} index={index} />
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[79%] !lg:h-[79%] !pt-[0.5rem] !lg:pt-[1rem] !pb-0 text-black text-[0.875rem] px-5 lg:px-2 !overflow-y-hidden">
        <ol className="flex flex-col w-full h-full gap-[1rem] list-decimal overflow-y-auto pt-[1rem]">
          {renderListItems}
        </ol>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToLastPage} label={t("Navigation.GoBack")} />

        <Button
          onClick={goToAfterAnesthesicInduction}
          label={t("Navigation.Next")}
        />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
