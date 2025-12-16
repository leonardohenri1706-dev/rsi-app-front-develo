import Image from "next/image";

export interface Option {
  imageSrc: string;
  caption?: string;
  label: string;
}

interface OptionProps {
  onChange?: (newValue: string) => void;
  withCheckedText?: boolean;
  option: Option;
  value?: string;
  size?: number;
  width?: string;
}

export const ImageWithLabelAndCaptionOption: React.FC<OptionProps> = ({
  withCheckedText = true,
  width = "w-[12rem]",
  size = 100,
  onChange,
  option,
  value,
}) => {
  const { imageSrc, caption, label } = option;

  const checkedText = label === value ? "( X )" : "( )";

  return (
    <div
      className={`flex flex-col items-center justify-start cursor-pointer ${width}`}
      onClick={() => onChange?.(label)}
    >
      <span className="flex items-center justify-start gap-[1rem]">
        {withCheckedText ? <p>{checkedText}</p> : null}

        <p>{label}</p>
      </span>

      <Image src={imageSrc} alt={label + caption} width={size} height={size} />

      {caption ? (
        <p className="text-center text-[0.75rem] text-[#666]">{caption}</p>
      ) : null}
    </div>
  );
};
