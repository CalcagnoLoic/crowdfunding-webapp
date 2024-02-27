export type ProductStatProps = {
  positionCSS: string;
};

export type NavContent = {
  id: number;
  content: string;
};

export type ButtonProps = {
  content: string;
  css: string;
  isIcon: boolean;
  isMobile?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  clicked?: boolean;
};
