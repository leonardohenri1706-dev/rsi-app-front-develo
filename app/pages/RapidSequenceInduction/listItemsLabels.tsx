import Image from "next/image";

import { ListItemProps } from "./interfaces";
import { TipsPopover } from "./TipsPopover";

export const listItemsLabels: ListItemProps[] = [
  { text: "Pages.RapidSequenceInduction.ListItems.1" },
  { text: "Pages.RapidSequenceInduction.ListItems.2" },
  {
    text: "Pages.RapidSequenceInduction.ListItems.3",
    ExtraContent: (
      <Image
        className="rounded-[1rem]"
        src="/ambu.jpeg"
        width={300}
        height={300}
        alt="Ambu"
      />
    ),
  },
  {
    text: "Pages.RapidSequenceInduction.ListItems.4",
    ExtraContent: <TipsPopover />,
  },
  { text: "Pages.RapidSequenceInduction.ListItems.5" },
  {
    text: "Pages.RapidSequenceInduction.ListItems.6",
    ExtraContent: (
      <Image
        className="rounded-[1rem]"
        src="/selick.jpeg"
        width={300}
        height={300}
        alt="Selick"
      />
    ),
  },
  {
    text: "Pages.RapidSequenceInduction.ListItems.7",
  },
];
