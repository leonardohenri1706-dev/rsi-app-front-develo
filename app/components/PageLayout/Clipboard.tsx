import { usePageContext } from "../../store";

interface Props {
  children: React.ReactNode;
}

export const clipBoardStyling = {
  className: `
    border border-1 border-black rounded-[40px] relative
    padding-[40px 70px 30px 70px]
    bg-[#e6e6e6] 
  `,
  style: {
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
};

export const Clipboard = ({ children }: Props) => {
  return (
    <div
      className={`${clipBoardStyling.className} w-full h-full z-[3]`}
      style={clipBoardStyling.style}
    >
      {/* <div
        className={`
          absolute lg:-top-[2.5rem] -top-[1.75rem] left-[50%] transform translate-x-[-50%]
          lg:w-[25rem] lg:h-[5rem] w-[80vw] h-[3rem]
          flex justify-center items-center
          border border-1 border-black
          bg-[#e6e6e6]
          rounded-full
        `}
        style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
      >
        <div
          className={`
            absolute left-[50%] transform translate-x-[-50%] lg:-top-[2.25rem] -top-[2rem]
            border border-1 border-black border-b-0
            flex justify-center items-center
            rounded-b-none rounded-t-[2rem]
            w-[8.3rem] lg:h-[2.25rem] h-[2rem]
            bg-[#e6e6e6]
          `}
        >
          <div
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" }}
            className="w-[1.25rem] h-[1.25rem] rounded-full bg-[#00c9aa] mt-[0.5rem] border border-black"
          />
        </div>
      </div> */}

      {children}
    </div>
  );
};
