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
