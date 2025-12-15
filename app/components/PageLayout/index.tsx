"use client";

import { toast } from "react-toastify";
import { useEffect } from "react";

import { useRoutes } from "@/app/hooks";
import PageContextProvider from "@/app/store/PageContext";

import { LogoOnClipboard } from "./LogoOnClipboard";
import { LogoutButton } from "./LogoutButton";
import { Background } from "./Background";
import { MenuButton } from "./MenuButton";
import { Clipboard } from "./Clipboard";
import { Menu } from "./Menu";
import { useTranslation } from "react-i18next";

interface Props {
  children: React.ReactNode;
  isPrivate: boolean;
  title: string;
}

const PageLayoutWithoutContext: React.FC<Props> = ({ isPrivate, children }) => {
  const { goToLogin } = useRoutes();
  const { t } = useTranslation("common");

  useEffect(() => {
    const hasToken = window.localStorage.getItem("token");

    if (hasToken || !isPrivate) return;

    toast.error(t("General.NotLoggedInError"));
    goToLogin();
  }, [isPrivate]);

  return (
    <Background>
      <div className="flex w-screen lg:h-screen h-[100dvh] justify-center items-center">
        <div className="flex flex-col justify-start items-center relative w-full lg:w-[35rem] md:lg:h-[40rem] lg:h-[80%] h-[100dvh]">
          <Menu />

          <Clipboard>
            <MenuButton />

            {isPrivate && <LogoutButton />}

            <LogoOnClipboard />

            <div className="absolute left-1/2 transform -translate-x-1/2 top-[8rem] w-full h-[80%] overflow-hidden z-[3]">
              {children}
            </div>
          </Clipboard>
        </div>
      </div>
    </Background>
  );
};

export const PageLayout: React.FC<Props> = (props) => (
  <PageContextProvider title={props.title}>
    <PageLayoutWithoutContext {...props} />
  </PageContextProvider>
);
