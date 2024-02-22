import IconBookmark from "../../icons/IconBookmark";
import Paragraph from "../../typographies/Paragraph";

type ButtonProps = {
  content: string;
  css: string;
  isIcon: boolean;
  isMobile?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  clicked?: boolean;
};

const Component = ({
  content,
  css,
  isIcon,
  isMobile,
  isDisabled,
  onClick,
  clicked,
}: ButtonProps) => {
  return (
    <button
      className={`${css} flex rounded-full font-bold ${isMobile ? "hidden" : ""}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isIcon && clicked !== undefined && <IconBookmark clicked={clicked} />}
      <Paragraph kind="p" content={content} css="self-center px-5" />
    </button>
  );
};

export default Component;
