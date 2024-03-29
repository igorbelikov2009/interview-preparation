import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Interviews from "../pages/Interviews";
import CSSPage from "../pages/CSS";
import DOMPage from "../pages/DOM";
import GeneralIssues from "../pages/GeneralIssues";
import GitHubPage from "../pages/GitHub";
import HTTPPage from "../pages/HTTP";
import JavascriptPage from "../pages/Javascript";
import ReactPage from "../pages/ReactPage";
import ArrayMethodsPage from "../pages/ArrayMethods";
import DestructuringPage from "../pages/Destructuring";
import ErrorProcessingPage from "../pages/ErrorProcessing";
import JSONPage from "../pages/JSONPage";
import NotfoundPage from "../pages/NotfoundPage";
import VuePage from "../pages/VuePage";
import Layout from "./Layout/Layout";
import JavascriptFishkiPage from "../pages/JavascriptFishki";
import ReactRouter from "../pages/ReactRouter";
import TypescriptPage from "../pages/TypescriptPage";
import WebDevelopment from "../pages/WebDevelopment";
import WebStorage from "../pages/WebStorage";
import NumberMethods from "../pages/NumberMethods";
import StringMethods from "../pages/StringMethods";
import FireBase from "../pages/FireBase";
import ReferenceBooks from "../pages/ReferenceBooks";
import FrameworksCSS from "../pages/FrameworksCSS";
import LinksNPM from "../pages/LinksNPM";
import IconsLoaders from "../pages/IconsLoaders";
import YouTubeTypescript from "../pages/YouTubeTypescript";
import YouTubeReact from "../pages/YouTubeReact";
import YouTubeAuthor from "../pages/YouTubeAuthor";
import YouTube from "../pages/YouTube";
import YouTubeJavascript from "../pages/YouTubeJavascript";
import GeneralLinks from "../pages/GeneralLinks";
import YouTubeTasksJavascript from "../pages/YouTubeTasksJavascript";
import RegularExpression from "../pages/RegularExpression";
import TasksFromInterviews from "../pages/TasksFromInterviews";
import TasksFromMinin from "../pages/TasksFromMinin";
import LinksTypescript from "../pages/LinksTypescript";
import HTML from "../pages/HTML";
import TasksForTypescript from "../pages/TasksForTypescript";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GeneralIssues />} />
        <Route path="generalLinks" element={<GeneralLinks />} />
        <Route path="css" element={<CSSPage />} />
        <Route path="dom" element={<DOMPage />} />
        <Route path="github" element={<GitHubPage />} />
        <Route path="http" element={<HTTPPage />} />
        <Route path="javascript" element={<JavascriptPage />} />
        <Route path="javascriptFishki" element={<JavascriptFishkiPage />} />
        <Route path="react" element={<ReactPage />} />
        <Route path="reactRouter" element={<ReactRouter />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="arrayMethods" element={<ArrayMethodsPage />} />
        <Route path="destructuring" element={<DestructuringPage />} />
        <Route path="error" element={<ErrorProcessingPage />} />
        <Route path="json" element={<JSONPage />} />
        <Route path="vue" element={<VuePage />} />
        <Route path="typescript" element={<TypescriptPage />} />
        <Route path="webDevelopment" element={<WebDevelopment />} />
        <Route path="webStorage" element={<WebStorage />} />
        <Route path="numberMethods" element={<NumberMethods />} />
        <Route path="stringMethods" element={<StringMethods />} />
        <Route path="fireBase" element={<FireBase />} />
        <Route path="referenceBooks" element={<ReferenceBooks />} />
        <Route path="frameworksCSS" element={<FrameworksCSS />} />
        <Route path="linksNPM" element={<LinksNPM />} />
        <Route path="iconsLoaders" element={<IconsLoaders />} />
        <Route path="youTubeTypescript" element={<YouTubeTypescript />} />
        <Route path="youTubeReact" element={<YouTubeReact />} />
        <Route path="youTubeAuthor" element={<YouTubeAuthor />} />
        <Route path="youTube" element={<YouTube />} />
        <Route path="youTubeJavascript" element={<YouTubeJavascript />} />
        <Route path="youTubeTasksJavascript" element={<YouTubeTasksJavascript />} />
        <Route path="regularExpression" element={<RegularExpression />} />
        <Route path="tasksFromInterviews" element={<TasksFromInterviews />} />
        <Route path="tasksFromMinin" element={<TasksFromMinin />} />
        <Route path="linksTypescript" element={<LinksTypescript />} />
        <Route path="html" element={<HTML />} />
        <Route path="tasksForTypescript" element={<TasksForTypescript />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
