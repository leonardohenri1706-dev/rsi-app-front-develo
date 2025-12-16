import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import { usePageContext } from "@/app/store";
import { useWindowSize } from "@/app/hooks";

const icon = {
  true: AiOutlineMenuUnfold,
  false: AiOutlineMenuFold,
};

export const MenuButton: React.FC = () => {
  const { menuIsOpen, setMenuIsOpen } = usePageContext();
  const { isMediumOrSmaller } = useWindowSize();

  const onClick = () => setMenuIsOpen((old) => !old);

  const iconKey = isMediumOrSmaller ? String(!menuIsOpen) : String(menuIsOpen);

  const Icon = icon[iconKey as keyof typeof icon];

  return (
    <div
      className="absolute top-[1rem] md:lg:top-[1.25rem] lg:left-[1.25rem] left-[1rem] cursor-pointer lg:p-2 p-1 bg-[#90C7BE] hover:bg-[#62C8B8] rounded-md transition-all active:translate-y-1 z-[10]"
      onClick={onClick}
    >
      <Icon className="text-black lg:text-[1.5rem] text-[1.25rem]" />
    </div>
  );
};
