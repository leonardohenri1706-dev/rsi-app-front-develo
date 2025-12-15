import { BaseLayout, Button } from "@/app/components";
import { useTranslation } from "react-i18next";

const buttonsClassName = "!w-[20rem] !h-[7rem]";

const emptyFunction = () => null;

export const PatientType: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[75%]">
        <Button
          className={buttonsClassName}
          onClick={emptyFunction}
          label={t("Pages.PatientType.Buttons.ICU")}
        />

        <Button
          className={buttonsClassName}
          onClick={emptyFunction}
          label={t("Pages.PatientType.Buttons.NotICU")}
        />
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={emptyFunction} label={t("Navigation.GoBack")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
