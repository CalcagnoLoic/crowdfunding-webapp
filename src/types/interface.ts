interface TypographiesProps {
  content: string;
  css?: string;
}

export interface HeadingProps extends TypographiesProps {
  kind: "h1" | "h2";
}

export interface ParagraphProps extends TypographiesProps {
  kind: "p" | "span";
}
