interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | JSX.Element;
}

export const Button: React.FC<Props> = ({ label, ...props }) => (
  <button
    {...props}
    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", ...props.style }}
    className={`
        bg-[#FFEC65] hover:filter hover:brightness-125 transition-all
        text-black font-bold lg:text-[0.8rem] text-[0.75rem] uppercase
        active:transform active:translate-y-1
        flex justify-center items-center 
        lg:w-[10rem] lg:h-[4rem] 
        w-[6rem] h-[3rem]
        rounded-full
        ${props.className}
    `}
  >
    {label}
  </button>
);
