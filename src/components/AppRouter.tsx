import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import AxiosPage from "../minorPages/AxiosPage";
import CSSPage from "../mainPages/CSSPage";
import DOMPage from "../minorPages/DOMPage";
import GeneralIssues from "../mainPages/GeneralIssues";
import GitHubPage from "../minorPages/GitHubPage";
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
import JavascriptFishkiPage from "../mainPages/JavascriptFishkiPage";
import ReactFishkiPage from "../mainPages/ReactFishkiPage";
import TypescriptPage from "../mainPages/TypescriptPage";
import TypescriptFishkiPage from "../mainPages/TypescriptFishkiPage";
import WebsiteLayout from "../mainPages/WebsiteLayout";
import BarMenuPage from "../minorPages/BarMenuPage";
import LocalStoragePage from "../minorPages/LocalStoragePage";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GeneralIssues />} />
        <Route path="css" element={<CSSPage />} />
        <Route path="dom" element={<DOMPage />} />
        <Route path="github" element={<GitHubPage />} />
        <Route path="html" element={<HTMLPage />} />
        <Route path="http" element={<HTTPPage />} />
        <Route path="javascript" element={<JavascriptPage />} />
        <Route path="javascriptFishki" element={<JavascriptFishkiPage />} />
        <Route path="react" element={<ReactPage />} />
        <Route path="reactFishki" element={<ReactFishkiPage />} />
        <Route path="axios" element={<AxiosPage />} />
        <Route path="arrayMethods" element={<ArrayMethodsPage />} />
        <Route path="arraytasks" element={<ArrayTasksPage />} />
        <Route path="browserlinks" element={<BrowserLinksPage />} />
        <Route path="destructuring" element={<DestructuringPage />} />
        <Route path="error" element={<ErrorProcessingPage />} />
        <Route path="json" element={<JSONPage />} />
        <Route path="linksjavascript" element={<LinksJavascriptPage />} />
        <Route path="linksvue" element={<LinksVuePage />} />
        <Route path="objectMethods" element={<ObjectMethodsPage />} />
        <Route path="promise" element={<PromisePage />} />
        <Route path="vue" element={<VuePage />} />
        <Route path="typescript" element={<TypescriptPage />} />
        <Route path="typescriptFishki" element={<TypescriptFishkiPage />} />
        <Route path="websiteLayout" element={<WebsiteLayout />} />
        <Route path="barMenu" element={<BarMenuPage />} />
        <Route path="localStorage" element={<LocalStoragePage />} />

        {/* <Route path="" element={<NotfoundPage />} />
        <Route path="" element={<NotfoundPage />} /> */}
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
