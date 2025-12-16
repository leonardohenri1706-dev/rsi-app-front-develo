import type { SetStateAction, Dispatch } from "react";
import React, { useContext, createContext, useState } from "react";

interface PageContextProps {
  setPatientType: Dispatch<SetStateAction<PatientTypeEnum | null>>;
  patientType: PatientTypeEnum | null;
  title: string;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
  menuIsOpen: boolean;
  setLastPage: Dispatch<SetStateAction<string>>;
  lastPage: string;
}

export const PageContext = createContext({} as PageContextProps);

export const usePageContext = () => {
  const context = useContext(PageContext);

  if (!context)
    throw new Error("usePageContext must be used within a PageContextProvider");

  return context;
};

interface Props {
  children: React.ReactNode;
  title: string;
}

export enum PatientTypeEnum {
  NOT_ICU = "Não UTI",
  ICU = "UTI",
}

const PageContextProvider: React.FC<Props> = ({ children, title }) => {
  const [patientType, setPatientType] = useState<PatientTypeEnum | null>(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [lastPage, setLastPage] = useState<string>("");

  const value: PageContextProps = {
    title,
    setPatientType,
    patientType,
    menuIsOpen,
    setMenuIsOpen,
    setLastPage,
    lastPage,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
