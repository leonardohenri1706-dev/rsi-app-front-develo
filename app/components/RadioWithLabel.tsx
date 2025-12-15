interface Props {
  onChange: (newValue: string) => void;
  optionLabels?: string[];
  options: string[];
  label: string;
  value: string;
}

interface OptionProps {
  onChange: (newValue: string) => void;
  optionLabel?: string;
  option: string;
  value: string;
}

const Option: React.FC<OptionProps> = ({
  option,
  optionLabel,
  value,
  onChange,
}) => {
  const checkedText = option === value ? "( X )" : "( )";

  return (
    <span
      className="flex items-center justify-start lg:gap-[1rem] gap-[0.5rem] cursor-pointer lg:text-[1rem] text-[0.75rem]"
      onClick={() => onChange(option)}
    >
      <p>{checkedText}</p>

      <p>{optionLabel ?? option}</p>
    </span>
  );
};

export const RadioWithLabel: React.FC<Props> = ({
  optionLabels,
  onChange,
  options,
  label,
  value,
}) => {
  const renderOptions = options.map((option, index) => {
    const optionLabel = optionLabels?.[index];

    return (
      <Option
        optionLabel={optionLabel}
        onChange={onChange}
        option={option}
        value={value}
        key={option}
      />
    );
  });

  return (
    <div className="text-black text-[1rem] lg:text-[1rem] w-full relative">
      <b className="ml-[1rem]">{label}</b>

      <div className="flex items-center justify-around w-full lg:gap-[1rem] gap-[0.5rem] mt-[1rem]">
        {renderOptions}
      </div>
    </div>
  );
};
