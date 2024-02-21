import IconBookmark from "../../icons/IconBookmark";
import Paragraph from "../../typographies/Paragraph";

type ButtonProps = {
  content: string;
  css: string;
  isIcon: boolean;
  isMobile?: boolean;
};

const Component = ({ content, css, isIcon, isMobile }: ButtonProps) => {
  return (
    <button
      className={`${css} flex cursor-pointer rounded-full font-bold ${isMobile ? "hidden" : ""}`}
    >
      {isIcon && <IconBookmark />}
      <Paragraph kind="p" content={content} css="self-center px-5" />
    </button>
  );
};

export default Component;
