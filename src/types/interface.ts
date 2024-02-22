interface TypographiesProps {
  content: string | number;
  css?: string;
}

export interface HeadingProps extends TypographiesProps {
  kind: "h1" | "h2" | "h3";
}

export interface ParagraphProps extends TypographiesProps {
  kind: "p" | "span";
}

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  css?: string;
}
