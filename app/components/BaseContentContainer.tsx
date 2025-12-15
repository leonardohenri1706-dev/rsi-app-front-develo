interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const BaseContentContainer: React.FC<Props> = ({
  className,
  children,
  style,
}) => (
  <div
    className={`flex flex-col items-center justify-start w-full h-full pt-[1rem] px-[0.5rem] md:px-[1rem] lg:px-[2rem] text-black ${className}`}
    style={style}
  >
    {children}
  </div>
);
