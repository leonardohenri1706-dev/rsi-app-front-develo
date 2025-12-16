import {
  ImageWithLabelAndCaptionOption,
  Option,
} from "./ImageWithLabelAndCaptionOption";

interface Props {
  onChange: (newValue: string) => void;
  options: Option[];
  label: string;
  value: string;
}

export const RadioWithLabelImageAndCaption: React.FC<Props> = ({
  onChange,
  options,
  label,
  value,
}) => {
  const renderOptions = options.map((option) => (
    <ImageWithLabelAndCaptionOption
      onChange={onChange}
      key={option.label}
      option={option}
      value={value}
    />
  ));

  return (
    <div className="text-black text-[1rem] lg:text-[1rem] h-full w-full relative">
      <b className="ml-[1rem]">{label}</b>

      <div
        className="flex flex-wrap justify-center gap-[1rem] lg:gap-[1rem] overflow-y-auto"
        style={{ rowGap: "0.5rem" }}
      >
        {renderOptions}
      </div>
    </div>
  );
};
