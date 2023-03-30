import { linksArrayMethods } from "../dataArchive.ts/arrayMethodsData";
import { linksCSS, linksCSSFishki, linksFrameworksCSS } from "../dataArchive.ts/cssData";
import { linksDestructuring } from "../dataArchive.ts/destructuringData";
import { linksDOM } from "../dataArchive.ts/domData";
import { linksErrorProcessing } from "../dataArchive.ts/errorProcessingData";
import { linksFireBase } from "../dataArchive.ts/fireBaseData";
import { linksGitHub } from "../dataArchive.ts/gitHubData";
import { linksHTTP } from "../dataArchive.ts/httpData";
import { linksIconsLoaders } from "../dataArchive.ts/iconsLoadersData";
import { ILinkInfo } from "../models/types";
import { linksJavascript } from "./javascriptData";
import { linksJavascriptFishki } from "./javascriptFishkiData";
import { linksJSON } from "./jsonData";
import { linksWebStorage } from "./webStorageData";
import { linkNPM } from "./npmData";
import { linksNumberMethods } from "./numberMethodsData";
import { linksObjectMethods } from "./objectMethodsData";
import { linksReactPage } from "./reactData";
import { linksReactRouter } from "./reactRouterData";
import { linksReferenceBooks } from "./referenceBooksData";
import { linksStringMethods } from "./stringMethodsData";
import { linksTypescript } from "./typescriptData";
import { linksWebDevelopment } from "./webDevelopmentData";

const generalLinks: ILinkInfo[] = linksJavascript
  .concat(linksJavascriptFishki)
  .concat(linksJSON)
  .concat(linksWebStorage)
  .concat(linkNPM)
  .concat(linksNumberMethods)
  .concat(linksStringMethods)
  .concat(linksReferenceBooks)
  .concat(linksReactPage)
  .concat(linksReactRouter)
  .concat(linksObjectMethods)
  .concat(linksTypescript)
  .concat(linksWebDevelopment)
  .concat(linksArrayMethods)
  .concat(linksCSS)
  .concat(linksCSSFishki)
  .concat(linksFrameworksCSS)
  .concat(linksDOM)
  .concat(linksDestructuring)
  .concat(linksErrorProcessing)
  .concat(linksFireBase)
  .concat(linksGitHub)
  .concat(linksHTTP)
  .concat(linksIconsLoaders);
export { generalLinks };
