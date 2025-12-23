
export interface RouteProps {
  isPrivate: boolean;
  routerName: string;
  indexName?: string;
  indexed?: boolean;
  name: string;
  path: string;
}

const pages: RouteProps[] = [
  {
    name: "ForgotPassword",
    path: "/forgot-password",
    routerName: "goToForgotPassword",
    isPrivate: false,
  },
  {
    name: "NewPassword",
    path: "/new-password",
    routerName: "goToNewPassword",
    isPrivate: false,
  },
  {
    name: "Registration",
    path: "/registration",
    routerName: "goToRegistration",
    isPrivate: false,
  },
  {
    name: "Cover",
    path: "/",
    routerName: "goToCover",
    isPrivate: false,
  },
  {
    name: "Login",
    path: "/login",
    routerName: "goToLogin",
    indexed: true,
    isPrivate: false,
  },
  {
    name: "DifficultIntubation",
    path: "/difficult-intubation",
    routerName: "goToDifficultIntubation",
    indexed: true,
    isPrivate: true,
  },
  {
    name: "DifficultVentilation",
    path: "/difficult-ventilation",
    routerName: "goToDifficultVentilation",
    indexed: true,
    isPrivate: true,
  },
  {
    name: "RapidSequenceInduction",
    path: "/rapid-sequence-induction",
    routerName: "goToRapidSequenceInduction",
    indexed: true,
    isPrivate: true,
  },
  {
    name: "AwakeIntubation",
    path: "/awake-intubation",
    routerName: "goToAwakeIntubation",
    indexed: true,
    isPrivate: true,
  },
  {
    name: "AfterAnesthesicInduction",
    path: "/after-anesthesic-induction",
    routerName: "goToAfterAnesthesicInduction",
    indexed: true,
    isPrivate: true,
  },
  {
    name: "LaryngealMask",
    path: "/laryngeal-mask",
    routerName: "goToLaryngealMask",
    indexed: true,
    isPrivate: true,
  },
  {
    name: "CervicalAccess",
    path: "/cervical-access",
    routerName: "goToCervicalAccess",
    indexed: true,
    isPrivate: true,
  },
  {
    name: "CervicalAccessVideo",
    path: "/cervical-access-video",
    routerName: "goToCervicalAccessVideo",
    indexed: true,
    isPrivate: true,
  },
  {
    name: "SummaryVideo",
    path: "/summary-video",
    routerName: "goToSummaryVideo",
    indexed: true,
    isPrivate: true,
  },
  {
    name: "WhatAboutAnesthetists",
    path: "/what-about-anesthetists",
    routerName: "goToWhatAboutAnesthetists",
    indexed: true,
    isPrivate: true,
  },
  {
    name: "AboutTheAuthor",
    path: "/about-the-author",
    routerName: "goToAboutTheAuthor",
    indexed: true,
    isPrivate: true,
  },
  {
    name: "References",
    path: "/references",
    routerName: "goToReferences",
    indexed: true,
    isPrivate: true,
  },
];

export default pages;
