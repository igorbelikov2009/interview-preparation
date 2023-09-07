import { linksArrayMethods } from "./arrayMethodsData";
import { linksCSS, linksCSSFishki, linksFrameworksCSS } from "./cssData";
import { linksDestructuring } from "./destructuringData";
import { linksDOM } from "./domData";
import { linksErrorProcessing } from "./errorProcessingData";
import { linksFireBase } from "./fireBaseData";
import { linksGitHub } from "./gitHubData";
import { linksHTTP } from "./httpData";
import { linksIconsLoaders } from "./iconsLoadersData";
import { ILinkInfo } from "../models/types";
import { linksJavascript } from "./javascriptData";
import { linksJavascriptFishki } from "./javascriptFishkiData";
import { linksJSON } from "./jsonData";
import { linksWebStorage } from "./webStorageData";
import { linkNPM } from "./npmData";
import { linksNumberMethods } from "./numberMethodsData";
import { linksReactPage } from "./reactData";
import { linksReactRouter } from "./reactRouterData";
import { linksReferenceBooks } from "./referenceBooksData";
import { linksStringMethods } from "./stringMethodsData";
import { linksWebDevelopment } from "./webDevelopmentData";
import { linksTypescript } from "./typescriptLinksData";
import { linksYouTube } from "./youTubeData";

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
  .concat(linksIconsLoaders)
  .concat(linksYouTube);

export { generalLinks };
