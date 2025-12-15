import { ListItemProps } from "./interfaces";

interface Props {
  item: ListItemProps;
  index: number;
}

export const ListItem: React.FC<Props> = ({ item, index }) => (
  <li className="text-black">
    <span className="inline-flex flex-col w-full gap-[0.5rem] lg:text-[1rem] text-[0.75rem]">
      {`${index + 1}. ${item.text}`}

      {item.ExtraContent && (
        <span className="flex flex-row justify-center w-full h-fit">
          {item.ExtraContent}
        </span>
      )}
    </span>
  </li>
);
