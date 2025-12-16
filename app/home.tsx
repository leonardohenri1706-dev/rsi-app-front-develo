"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

import { PageLayout } from "./components";
import pages from "./routes";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {pages.map(({ isPrivate, Component, name, path }) => (
            <Route
              key={path}
              path={path}
              element={
                <PageLayout title={t(`Index.${name}`)} isPrivate={isPrivate}>
                  <Component />
                </PageLayout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
};

export default Home;
