import { usePageContext } from "@/app/store";
import Image from "next/image";

const useLogoSize = () => {
  const { title } = usePageContext();
  const isLoginPage = title === "Login";

  if (isLoginPage) return 330;

  return 220;
};

const useTopClass = () => {
  const { title } = usePageContext();
  const isCover = title === "Capa";
  const isLoginPage = title === "Login";

  if (isCover) return "top-[4rem]";

  if (isLoginPage) return "top-[0.75rem]";

  return "top-[0.75rem]";
};

interface Props {
  show?: boolean;
  size?: number;
}

export const LogoOnClipboard: React.FC<Props> = ({
  size: parsedSize,
  show,
}) => {
  const { title: contextTitle } = usePageContext();
  const topClass = useTopClass();
  const size = useLogoSize();

  const isCover = contextTitle === "Capa";
  if (isCover && !show) return null;

  const title = isCover ? "" : contextTitle;

  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 ${topClass} flex flex-col justify-center items-center w-full gap-[1rem] px-1`}
    >
      <p className="lg:text-[0.9rem] text-[0.8rem] font-bold uppercase text-[#01584B] max-w-[14rem] lg:max-w-none text-center h-[2.5rem] flex items-center">
        {title.toUpperCase()}
      </p>

      <Image
        height={parsedSize ?? size}
        width={parsedSize ?? size}
        alt="Logo of RSI App"
        src="/logo_full.svg"
        objectFit="contain"
        quality={100}
      />
    </div>
  );
};
