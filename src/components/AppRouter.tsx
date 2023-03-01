import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import AxiosPage from "../mainPages/AxiosPage";
import CSSPage from "../mainPages/CSSPage";
import DOMPage from "../mainPages/DOMPage";
import GeneralIssues from "../mainPages/GeneralIssues";
import GitHubPage from "../mainPages/GitHubPage";
import HTMLPage from "../mainPages/HTMLPage";
import HTTPPage from "../mainPages/HTTPPage";
import JavascriptPage from "../mainPages/JavascriptPage";
import ReactPage from "../mainPages/ReactPage";
import ArrayMethodsPage from "../minorPages/ArrayMethodsPage";
import ArrayTasksPage from "../minorPages/ArrayTasksPage";
import BrowserLinksPage from "../minorPages/BrowserLinksPage";
import DestructuringPage from "../minorPages/DestructuringPage";
import ErrorProcessingPage from "../minorPages/ErrorProcessingPage";
import JSONPage from "../minorPages/JSONPage";
import LinksJavascriptPage from "../minorPages/LinksJavascriptPage";
import LinksVuePage from "../minorPages/LinksVuePage";
import NotfoundPage from "../minorPages/NotfoundPage";
import ObjectMethodsPage from "../minorPages/ObjectMethodsPage";
import PromisePage from "../minorPages/PromisePage";
import VuePage from "../minorPages/VuePage";
import Layout from "./Layout/Layout";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GeneralIssues />} />
        <Route path="axios" element={<AxiosPage />} />
        <Route path="css" element={<CSSPage />} />
        <Route path="dom" element={<DOMPage />} />
        <Route path="github" element={<GitHubPage />} />
        <Route path="html" element={<HTMLPage />} />
        <Route path="http" element={<HTTPPage />} />
        <Route path="javascript" element={<JavascriptPage />} />
        <Route path="react" element={<ReactPage />} />
        <Route path="arraymethods" element={<ArrayMethodsPage />} />
        <Route path="arraytasks" element={<ArrayTasksPage />} />
        <Route path="browserlinks" element={<BrowserLinksPage />} />
        <Route path="destructuring" element={<DestructuringPage />} />
        <Route path="error" element={<ErrorProcessingPage />} />
        <Route path="json" element={<JSONPage />} />
        <Route path="linksjavascript" element={<LinksJavascriptPage />} />
        <Route path="linksvue" element={<LinksVuePage />} />
        <Route path="objectmethods" element={<ObjectMethodsPage />} />
        <Route path="promise" element={<PromisePage />} />
        <Route path="vue" element={<VuePage />} />
        {/* <Route path="" element={<NotfoundPage />} />
        <Route path="" element={<NotfoundPage />} /> */}
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
