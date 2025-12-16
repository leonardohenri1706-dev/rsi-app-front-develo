import { useTranslation } from "react-i18next";

export const RapidSequenceInductionTips: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col w-1/2 h-full justify-center">
      <div className="flex flex-col w-fit h-fit justify-center gap-[2rem] bg-red-300 rounded-3xl p-3 lg:p-3">
        <span>
          <b>{t("Components.RapidSequenceInductionTips.ATTENTION")}</b>
          <p>{t("Components.RapidSequenceInductionTips.REDUCE_DOSAGE")}</p>
          <p>{t("Components.RapidSequenceInductionTips.HYPNOTICS_EFFECT")}</p>
        </span>

        <span>
          <b>{t("Components.RapidSequenceInductionTips.Caution.Title")}</b>
          <p>{t("Components.RapidSequenceInductionTips.Caution.Content")}</p>
        </span>
      </div>
    </div>
  );
};
