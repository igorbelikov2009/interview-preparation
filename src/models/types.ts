export interface ITopMenuLinks {
  children: string;
  to: string;
  isBackgroundWhite?: boolean;
}

export interface IFooterLinks {
  children: string;
  to: string;
}

export interface ITripleIcon {
  icon: string;
  light: boolean;
  hovered: boolean;
}

export interface ISidebarLink {
  itemName: string;
  id: string;
}

export interface IParagraph {
  paragraphs?: string[];
}

export interface IParagraphTask {
  paragraphsTask: string[];
}

export interface IParagraphBefore {
  paragraphs: string[];
}

export interface IObjectHeadingAnswers {
  heading: string;
  answer: string[];
  isParagraph?: boolean;
  isParagraphBefore?: boolean;
}

export interface IInterviewTasks {
  heading: string;
  answer: string[];
  isParagraph?: boolean;
  isParagraphBefore?: boolean;
  children?: React.ReactNode;
}

export interface IObjectTasks {
  heading: string;
  href: string;
  taskCode: string[];
}

export interface ILinkInfo {
  href: string;
  title: string;
}
