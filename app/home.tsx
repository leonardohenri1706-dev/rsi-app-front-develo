"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useMemo, Suspense } from "react";

import type { RouteProps } from "./routes";
import { PageLayout } from "./components";
import pages from "./routes";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const Pages = useMemo(
    () =>
      pages.map(({ path, name, isPrivate, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <PageLayout titleKey={`Index.${name}`} isPrivate={isPrivate}>
              <Component />
            </PageLayout>
          }
        />
      )),
    []
  );

  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="w-screen h-screen flex items-center justify-center text-xl font-bold">
              Carregando...
            </div>
          }
        >
          <Routes>{Pages}</Routes>
        </Suspense>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
};

export default Home;
