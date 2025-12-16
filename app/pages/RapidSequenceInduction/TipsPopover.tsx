import { BsLightbulb } from "react-icons/bs";

import { RapidSequenceInductionTips } from "@/app/components/RapidSequenceInductionTips";
import Popover from "@/app/components/Popover";

export const TipsPopover: React.FC = () => (
  <Popover placement="top">
    <Popover.Trigger>
      <button className="inline-flex gap-2 bg-yellow-200 rounded-full p-2 cursor-pointer hover:bg-yellow-300 active:transform active:translate-y-0.5">
        <BsLightbulb size={20} />
        <span>Dicas</span>
      </button>
    </Popover.Trigger>

    <Popover.Content>
      <RapidSequenceInductionTips />
    </Popover.Content>
  </Popover>
);
