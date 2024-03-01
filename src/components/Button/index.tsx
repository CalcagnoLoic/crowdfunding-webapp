import { ButtonProps } from "../../types/type";

import Paragraph from "../../typographies/Paragraph";

const Component = ({ content, css, isDisabled, onClick }: ButtonProps) => {
  return (
    <>
      <button
        className={`${css} relative flex rounded-full font-bold `}
        disabled={isDisabled}
        onClick={onClick}
        type="submit"
      >
        <Paragraph
          kind="p"
          content={content}
          css="px-5 self-center block mx-auto"
        />
      </button>
    </>
  );
};

export default Component;
