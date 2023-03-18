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
import LinksPage from "../minorPages/Links";
import DestructuringPage from "../minorPages/Destructuring";
import ErrorProcessingPage from "../minorPages/ErrorProcessing";
import JSONPage from "../minorPages/JSONPage";
import NotfoundPage from "../minorPages/NotfoundPage";
import ObjectMethodsPage from "../minorPages/ObjectMethods";
import PromisePage from "../minorPages/PromisePage";
import VuePage from "../minorPages/VuePage";
import Layout from "./Layout/Layout";
import JavascriptFishkiPage from "../mainPages/JavascriptFishki";
import ReactRouter from "../mainPages/ReactRouter";
import TypescriptPage from "../mainPages/TypescriptPage";
import TypescriptFishkiPage from "../mainPages/TypescriptFishki";
import WebsiteLayout from "../mainPages/WebsiteLayout";
import BarMenuPage from "../minorPages/BarMenu";
import LocalStoragePage from "../minorPages/LocalStoragePage";
import NumberMethods from "../minorPages/NumberMethods";
import StringMethods from "../minorPages/StringMethods";
import FireBase from "../minorPages/FireBase";
import ReferenceBooks from "../minorPages/ReferenceBooks";
import FrameworksCSS from "../minorPages/FrameworksCSS";
import LinksNPM from "../minorPages/LinksNPM";
import LinksIconsLoaders from "../minorPages/LinksToIconsLoaders";
import YouTubeTypescript from "../minorPages/YouTubeTypescript";
import YouTubeReact from "../minorPages/YouTubeReact";
import YouTubeInterview from "../minorPages/YouTubeInterview";
import YouTubeAuthor from "../minorPages/YouTubeAuthor";
import YouTube from "../minorPages/YouTube";
import YouTubeCSS from "../minorPages/YouTubeCSS";
import YouTubeJavascript from "../minorPages/YouTubeJavascript";
import CSSFishki from "../minorPages/CSSFishki";
import Mobx from "../minorPages/Mobx";

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
        <Route path="reactRouter" element={<ReactRouter />} />
        <Route path="axios" element={<AxiosPage />} />
        <Route path="arrayMethods" element={<ArrayMethodsPage />} />
        <Route path="arraytasks" element={<ArrayTasksPage />} />
        <Route path="links" element={<LinksPage />} />
        <Route path="destructuring" element={<DestructuringPage />} />
        <Route path="error" element={<ErrorProcessingPage />} />
        <Route path="json" element={<JSONPage />} />
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
        <Route path="fireBase" element={<FireBase />} />
        <Route path="referenceBooks" element={<ReferenceBooks />} />
        <Route path="frameworksCSS" element={<FrameworksCSS />} />
        <Route path="linksNPM" element={<LinksNPM />} />
        <Route path="linksIconsLoaders" element={<LinksIconsLoaders />} />
        <Route path="cssFishki" element={<CSSFishki />} />
        <Route path="youTubeTypescript" element={<YouTubeTypescript />} />
        <Route path="youTubeReact" element={<YouTubeReact />} />
        <Route path="youTubeInterview" element={<YouTubeInterview />} />
        <Route path="youTubeAuthor" element={<YouTubeAuthor />} />
        <Route path="youTube" element={<YouTube />} />
        <Route path="youTubeCSS" element={<YouTubeCSS />} />
        <Route path="youTubeJavascript" element={<YouTubeJavascript />} />
        <Route path="mobx" element={<Mobx />} />

        {/* <Route path="" element={<NotfoundPage />} />
        <Route path="" element={<NotfoundPage />} />
        <Route path="" element={<NotfoundPage />} /> */}

        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
