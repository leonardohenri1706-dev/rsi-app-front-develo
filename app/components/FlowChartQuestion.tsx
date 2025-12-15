interface Props {
  question: string;
}

export const FlowChartQuestion: React.FC<Props> = ({ question }) => (
  <div className="flex flex-col lg:h-[10rem] lg:w-[25rem] w-[80vw] h-[8rem] items-center justify-center bg-[#90C7BE77] rounded-[3rem]">
    <p className="text-black font-bold lg:text-[1.325rem] text-[0.9rem]">
      {question}
    </p>
  </div>
);
