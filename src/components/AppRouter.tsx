import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import AxiosPage from "../minorPages/AxiosPage";
import CSSPage from "../mainPages/CSS";
import DOMPage from "../minorPages/DOM";
import GeneralIssues from "../mainPages/GeneralIssues";
import GitHubPage from "../minorPages/GitHub";
import HTMLPage from "../mainPages/HTML";
import HTTPPage from "../mainPages/HTTP";
import JavascriptPage from "../mainPages/Javascript";
import ReactPage from "../mainPages/ReactPage";
import ArrayMethodsPage from "../minorPages/ArrayMethods";
import ArrayTasksPage from "../minorPages/ArrayTasks";
import BrowserLinksPage from "../minorPages/BrowserLinks";
import DestructuringPage from "../minorPages/Destructuring";
import ErrorProcessingPage from "../minorPages/ErrorProcessing";
import JSONPage from "../minorPages/JSONPage";
import LinksVuePage from "../minorPages/LinksVue";
import NotfoundPage from "../minorPages/NotfoundPage";
import ObjectMethodsPage from "../minorPages/ObjectMethods";
import PromisePage from "../minorPages/PromisePage";
import VuePage from "../minorPages/VuePage";
import Layout from "./Layout/Layout";
import JavascriptFishkiPage from "../mainPages/JavascriptFishki";
import ReactFishkiPage from "../mainPages/ReactFishki";
import TypescriptPage from "../mainPages/TypescriptPage";
import TypescriptFishkiPage from "../mainPages/TypescriptFishki";
import WebsiteLayout from "../mainPages/WebsiteLayout";
import BarMenuPage from "../minorPages/BarMenu";
import LocalStoragePage from "../minorPages/LocalStoragePage";
import NumberMethods from "../minorPages/NumberMethods";
import StringMethods from "../minorPages/StringMethods";
import BrowserLinksGitHub from "../minorPages/BrowserLinksGitHub";
import BrowserLinksFireBase from "../minorPages/BrowserLinksFireBase";
import BrowserLinksDirectory from "../minorPages/BrowserLinksDirectory";
import BrowserLinksCssFrameworks from "../minorPages/BrowserLinksCssFrameworks";
import BrowserLinksTypescript from "../minorPages/BrowserLinksTypescript";
import BrowserLinksReact from "../minorPages/BrowserLinksReact";
import BrowserLinksNPM from "../minorPages/BrowserLinksNPM";
import BrowserLinksIconsLoaders from "../minorPages/BrowserLinksIconsLoaders";
import YouTubeTypescript from "../minorPages/YouTubeTypescript";
import YouTubeReact from "../minorPages/YouTubeReact";
import YouTubeInterview from "../minorPages/YouTubeInterview";
import YouTubeAuthor from "../minorPages/YouTubeAuthor";
import YouTube from "../minorPages/YouTube";

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
        <Route path="linksvue" element={<LinksVuePage />} />
        <Route path="objectMethods" element={<ObjectMethodsPage />} />
        <Route path="promise" element={<PromisePage />} />
        <Route path="vue" element={<VuePage />} />
        <Route path="typescript" element={<TypescriptPage />} />
        <Route path="typescriptFishki" element={<TypescriptFishkiPage />} />
        <Route path="websiteLayout" element={<WebsiteLayout />} />
        <Route path="barMenu" element={<BarMenuPage />} />
        <Route path="localStorage" element={<LocalStoragePage />} />
        <Route path="numberMethods" element={<NumberMethods />} />
        <Route path="stringMethods" element={<StringMethods />} />

        <Route path="browserLinksGitHub" element={<BrowserLinksGitHub />} />
        <Route path="browserLinksFireBase" element={<BrowserLinksFireBase />} />
        <Route path="browserLinksDirectory" element={<BrowserLinksDirectory />} />
        <Route path="browserLinksCssFrameworks" element={<BrowserLinksCssFrameworks />} />
        <Route path="browserLinksTypescript" element={<BrowserLinksTypescript />} />
        <Route path="browserLinksReact" element={<BrowserLinksReact />} />
        <Route path="browserLinksNPM" element={<BrowserLinksNPM />} />
        <Route path="browserLinksIconsLoaders" element={<BrowserLinksIconsLoaders />} />
        <Route path="youTubeTypescript" element={<YouTubeTypescript />} />
        <Route path="youTubeReact" element={<YouTubeReact />} />
        <Route path="youTubeInterview" element={<YouTubeInterview />} />
        <Route path="youTubeAuthor" element={<YouTubeAuthor />} />
        <Route path="youTube" element={<YouTube />} />

        {/* <Route path="" element={<NotfoundPage />} />
        <Route path="" element={<NotfoundPage />} />
        <Route path="" element={<NotfoundPage />} /> */}

        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
