interface Props {
  Input?: JSX.Element;
  centered?: boolean;
  parameter: string;
  score?: string;
}

export const TableRow: React.FC<Props> = ({
  parameter,
  centered,
  score,
  Input,
}) => {
  const [identifier, rest] = parameter.split(":");

  const conditionalCentered = centered ? "text-center" : "";

  return (
    <tr key={parameter} className="border-b border-black py-1">
      <td
        className={`w-1/2 pl-[2rem] border-r border-black ${conditionalCentered}`}
      >
        <b>{identifier}:</b>
        {rest ?? ""}
      </td>
      <td className="w-1/2 text-center">{score ?? Input}</td>
    </tr>
  );
};
