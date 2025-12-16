import type {
  PopoverArrowProps,
  PopoverBodyProps,
  PopoverProps,
  PopoverCloseButtonProps,
  PopoverContentProps,
  PopoverHeaderProps,
  PopoverFooterProps,
} from "@chakra-ui/react";
import {
  Popover as ChakraPopover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
} from "@chakra-ui/react";

interface PopoverHelper extends React.FC<PopoverProps> {
  children: React.ReactNode;
  Trigger: typeof PopoverTrigger;
  Header: typeof PopoverHeader;
  Body: typeof PopoverBody;
  Footer: typeof PopoverFooter;
  Anchor: typeof PopoverAnchor;
  Arrow: typeof PopoverArrow;
  CloseButton: typeof PopoverCloseButton;
  Content: typeof PopoverContent;
}

const Popover = ChakraPopover as unknown as PopoverHelper;

Popover.Anchor = PopoverAnchor;
Popover.Arrow = PopoverArrow;
Popover.Body = PopoverBody;
Popover.CloseButton = PopoverCloseButton;
Popover.Content = PopoverContent;
Popover.Header = PopoverHeader;
Popover.Footer = PopoverFooter;
Popover.Trigger = PopoverTrigger;

export type {
  PopoverArrowProps,
  PopoverBodyProps,
  PopoverCloseButtonProps,
  PopoverContentProps,
  PopoverHeaderProps,
  PopoverFooterProps,
  PopoverProps,
};

export default Popover;
