"use client";

import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import { usePageContext } from "@/app/store";
import { useWindowSize } from "@/app/hooks";

const icon = {
  true: AiOutlineMenuUnfold, // Menu is open
  false: AiOutlineMenuFold,  // Menu is closed
};

export const MenuButton: React.FC = () => {
  const { menuIsOpen, setMenuIsOpen } = usePageContext();
  const { isMediumOrSmaller } = useWindowSize();

  const onClick = () => setMenuIsOpen((old) => !old);

  // On mobile (isMediumOrSmaller is true), the icon shows 'unfold' when menu is closed (false)
  // and 'fold' when menu is open (true).
  // On desktop (isMediumOrSmaller is false), the icon shows 'fold' when menu is closed (false)
  // and 'unfold' when menu is open (true).
  // This logic was inverted for desktop.
  const iconKey = String(menuIsOpen); // Simplified: true for open, false for closed

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