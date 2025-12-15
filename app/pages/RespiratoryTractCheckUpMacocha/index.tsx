import { JSX, useState } from "react";

import { BaseLayout, Button } from "@/app/components";
import { useRoutes } from "@/app/hooks";
import { TableRow } from "./TableRow";
import { useTranslation } from "react-i18next";

const commonClassNames = "text-center text-[1.25rem] mt-[0.5rem] font-bold";

const getText = (sum: number): JSX.Element => {
  if (sum === 0)
    return (
      <p className={`${commonClassNames} flex flex-col`}>
        <span className="text-green-500">{"≤"} 3 - IOT* não difícil</span>

        <span className="text-red-500">{">"} 3 - IOT* difícil</span>
      </p>
    );

  if (sum > 3)
    return <p className={`${commonClassNames} text-red-500`}>IOT* difícil</p>;

  return (
    <p className={`${commonClassNames} text-green-500`}>IOT* não difícil</p>
  );
};

export const RespiratoryTractCheckUpMacocha: React.FC = () => {
  const { goToRespiratoryTractCheckUpImages, goToPositioning } = useRoutes();
  const { t } = useTranslation("common");

  const [macochaSum, setMacochaSum] = useState<number>(0);

  const tableData = [
    { parameter: t("RespiratoryTractCheckUpMacocha.TableData.1"), score: "5" },
    { parameter: t("RespiratoryTractCheckUpMacocha.TableData.2"), score: "3" },
    { parameter: t("RespiratoryTractCheckUpMacocha.TableData.3"), score: "1" },
    { parameter: t("RespiratoryTractCheckUpMacocha.TableData.4"), score: "1" },
    { parameter: t("RespiratoryTractCheckUpMacocha.TableData.5"), score: "1" },
    { parameter: t("RespiratoryTractCheckUpMacocha.TableData.6"), score: "1" },
    { parameter: t("RespiratoryTractCheckUpMacocha.TableData.7"), score: "1" },
  ];

  const renderTableData = tableData.map(({ parameter, score }) => (
    <TableRow key={parameter} parameter={parameter} score={score} />
  ));

  const onChangeMacochaSum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const onlyNumbers = value.replace(/\D/g, "");

    setMacochaSum(Number(onlyNumbers));
  };

  const text = getText(macochaSum);

  return (
    <BaseLayout.Root>
      <BaseLayout.Content className="!h-[85%] !lg:h-[75%] pb-[1rem] !gap-[1rem] !pt-[0rem] !justify-around">
        <div className="lg:overflow-hidden overflow-y-auto w-full">
          <table className="text-black w-full">
            <thead className="text-[1.25rem]">
              <tr className="border-b-2 border-black">
                <th className="border-r border-black w-1/2 text-center">
                  {t(
                    "RespiratoryTractCheckUpMacocha.TableData.Header.Parameter"
                  )}
                </th>
                <th className="w-1/2 text-center">
                  {t("RespiratoryTractCheckUpMacocha.TableData.Header.Score")}
                </th>
              </tr>
            </thead>

            <tbody className="text-[1rem]">
              {renderTableData}

              <TableRow
                Input={
                  <input
                    className="w-full text-center bg-transparent outline-none"
                    onChange={onChangeMacochaSum}
                    value={`${macochaSum || ""}`}
                    type="text"
                  />
                }
                parameter={t(
                  "RespiratoryTractCheckUpMacocha.TableData.Header.Sum"
                )}
                centered
              />
            </tbody>
          </table>

          {text}

          <p className={`text-center text-[0.75rem] mt-[0.5rem] text-gray-500`}>
            {t("RespiratoryTractCheckUpMacocha.TableData.Footer.IOT")}
          </p>
        </div>
      </BaseLayout.Content>

      <BaseLayout.Buttons>
        <Button
          onClick={goToRespiratoryTractCheckUpImages}
          label={t("Navigation.GoBack")}
        />

        <Button onClick={goToPositioning} label={t("Navigation.Next")} />
      </BaseLayout.Buttons>
    </BaseLayout.Root>
  );
};
