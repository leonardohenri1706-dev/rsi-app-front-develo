import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { useTranslation } from "react-i18next";

interface Reference {
  text: string;
  link?: string;
}

const references: Reference[] = [
  {
    text: "Miraglia D. Cardiopulmonary resuscitation and risk of transmission of acute respiratory infections to rescuers: A systematic review snapshot. Vol. 5, Journal of Emergency and Critical Care Medicine. AME Publishing Company; 2021. ",
  },
  {
    text: "Chrimes N. The Vortex: a universal ‘high-acuity implementation tool’ for emergency airway management. Br J Anaesth [Internet]. 2016 Sep;117(July):i20–7. Available from:",
    link: "https://linkinghub.elsevier.com/retrieve/pii/S0007091217337650",
  },
  {
    text: "Frerk C, Mitchell VS, McNarry AF, Mendonca C, Bhagrath R, Patel A, et al. Difficult Airway Society 2015 guidelines for management of unanticipated difficult intubation in adults. Br J Anaesth [Internet]. 2015 Dec;115(6):827–48. Available from:",
    link: "https://linkinghub.elsevier.com/retrieve/pii/S0007091217314319",
  },
  {
    text: "Apfelbaum JL, Hagberg CA, Connis RT, Abdelmalak BB, Agarkar M, Dutton RP, et al. 2022 American Society of Anesthesiologists Practice Guidelines for Management of the Difficult Airway. Vol. 136, Anesthesiology. 2022. 31–81 p. ",
  },
  {
    text: "Lundstrøm LH, Vester-Andersen M, Møller AM, Charuluxananan S, L’Hermite J, Wetterslev J. Poor prognostic value of the modified Mallampati score: A meta-analysis involving 177 088 patients. Vol. 107, British Journal of Anaesthesia. Oxford University Press; 2011. p. 659–67. ",
  },
  {
    text: "Quintard H, l’Her E, Pottecher J, Adnet F, Constantin JM, De Jong A, et al. Experts’ guidelines of intubation and extubation of the ICU patient of French Society of Anaesthesia and Intensive Care Medicine (SFAR) and French-speaking Intensive Care Society (SRLF). Ann Intensive Care [Internet]. 2019 Dec 22;9(1):13. Available from:",
    link: "https://annalsofintensivecare.springeropen.com/articles/10.1186/s13613-019-0483-1",
  },
  {
    text: "Ahmad I, El‐Boghdadly K, Bhagrath R, Hodzovic I, McNarry AF, Mir F, et al. Difficult Airway Society guidelines for awake tracheal intubation (ATI) in adults. Anaesthesia [Internet]. 2020 Apr 14;75(4):509–28. Available from:",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/anae.14904",
  },
];

export const References: React.FC = () => {
  const { goToAboutTheAuthor } = useRoutes();
  const { t } = useTranslation("common");

  const renderReferences = references.map((reference, index) => (
    <li key={index} className="mb-[1rem]">
      <p className="text-black">
        {reference.text}{" "}
        {reference.link && (
          <a
            className="text-blue-500 hover:underline"
            href={reference.link}
            target="_blank"
            rel="noreferrer"
          >
            {reference.link}
          </a>
        )}
      </p>
    </li>
  ));

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!justify-around !h-[80%] !pt-[0.25rem] !pb-[1rem]">
        <ul className="h-full w-full text-black text-[0.75rem] items-center justify-center lg:px-4 px-5 list-decimal overflow-y-auto">
          {renderReferences}
        </ul>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button onClick={goToAboutTheAuthor} label={t("Navigation.GoBack")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
