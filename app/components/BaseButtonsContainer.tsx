interface Props {
  children: React.ReactNode;
  className?: string;
}

export const BaseButtonsContainer: React.FC<Props> = ({
  children,
  className,
}) => (
  <div
    className={`absolute flex items-center justify-around w-full h-[5rem] bottom-[1rem] px-[0.5rem] md:px-[1rem] lg:px-[2rem] ${className}`}
  >
    {children}
  </div>
);
