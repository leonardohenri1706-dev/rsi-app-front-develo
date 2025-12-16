import {
  BaseButtonsContainer as Buttons,
  BaseContentContainer as Content,
} from ".";

interface Props {
  children: React.ReactNode;
}

const Root: React.FC<Props> = ({ children }) => <>{children}</>;
export const BaseLayout = { Root, Buttons, Content };
