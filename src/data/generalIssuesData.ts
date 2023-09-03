import { arrayCSS } from "../dataArchive.ts/cssData";
import { arrayDestructuringArrays, arrayDestructuringObjects } from "../dataArchive.ts/destructuringData";
import { arrayDOM } from "../dataArchive.ts/domData";
import { arrayErrorProcessing } from "../dataArchive.ts/errorProcessingData";
import { arrayGitHub } from "../dataArchive.ts/gitHubData";
import { arrayHTTP } from "../dataArchive.ts/httpData";
import { IObjectHeadingAnswers } from "../models/types";
import { arrayJavascript } from "./javascriptData";
import { arrayJavascriptFishki } from "./javascriptFishkiData";
import { arrayJSON } from "./jsonData";
import { arrayWebStorage } from "./webStorageData";
import { arrayNumberMethods } from "./numberMethodsData";
import { arrayReact } from "./reactData";
import { arrayReactRouter } from "./reactRouterData";
import { arrayStringMethods } from "./stringMethodsData";
import { arrayTypescript } from "./typescriptData";
import { arrayWebDevelopment } from "./webDevelopmentData";
import { arrayInterviews } from "./interviewsData";
import { arrayHTML } from "./htmlData";

const generalIssues: IObjectHeadingAnswers[] = arrayJavascript
  .concat(arrayJavascriptFishki)
  .concat(arrayJSON)
  .concat(arrayWebStorage)
  .concat(arrayNumberMethods)
  .concat(arrayStringMethods)
  .concat(arrayReact)
  .concat(arrayReactRouter)
  .concat(arrayTypescript)
  .concat(arrayWebDevelopment)
  .concat(arrayCSS)
  .concat(arrayDOM)
  .concat(arrayDestructuringArrays)
  .concat(arrayDestructuringObjects)
  .concat(arrayHTTP)
  .concat(arrayGitHub)
  .concat(arrayErrorProcessing)
  .concat(arrayInterviews)
  .concat(arrayHTML);

export { generalIssues };
