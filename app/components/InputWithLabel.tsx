import type { IconType } from "react-icons";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { useState } from "react";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (value: string) => void;
  password?: boolean;
  label: string;
}

enum PasswordType {
  PASSWORD = "password",
  TEXT = "text",
}

export const InputWithLabel: React.FC<Props> = ({
  password,
  onChange,
  label,
  ...props
}) => {
  const [type, setType] = useState<PasswordType>(PasswordType.PASSWORD);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputType = password ? type : "text";

  const Icon: IconType =
    type === PasswordType.PASSWORD ? PiEyeBold : PiEyeClosedBold;

  const onClickEye = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    if (type === PasswordType.PASSWORD) setType(PasswordType.TEXT);
    else setType(PasswordType.PASSWORD);
  };

  const showIcon = password && isFocused;

  return (
    <div className="text-black text-[1rem] lg:text-[1rem] w-full relative">
      <b className="ml-[1rem]">{label}</b>

      <input
        className="w-full h-[3rem] border-t-none border-l-none border-r-none border-b-2 border-black bg-[#E6E6E6] pl-[1rem] focus:outline-none focus:bg-[#EEE] rounded-md rounded-b-none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        type={inputType}
        {...props}
      />

      {showIcon ? (
        <Icon
          className="absolute right-[0.5rem] top-[2.125rem] cursor-pointer text-[#010101] hover:text-[#555] transition-all"
          onMouseDown={onClickEye}
          onClick={onClickEye}
          size={32}
        />
      ) : null}
    </div>
  );
};
