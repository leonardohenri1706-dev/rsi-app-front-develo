import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export const Background = ({ children }: Props) => (
  <div
    className="fixed inset-0 h-screen w-screen bg-cover bg-center cursor-auto"
    style={{ backgroundImage: "url(/background.png)" }}
  >
    <Image
      className="absolute !bottom-0 !-left-[16rem] !w-[75%] !h-[75%] !top-[unset] z-[-1] cursor-auto"
      alt="illustration of two doctors in medical uniforms"
      src="/undraw_doctors_p6aq 1.svg"
      objectFit="contain"
      quality={100}
      layout="fill"
    />
    {children}
  </div>
);
