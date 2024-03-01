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
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
