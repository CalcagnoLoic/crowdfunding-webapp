import { HeadingProps } from "../../types/interface";

const Typographies = ({ kind, content, css }: HeadingProps) => {
  switch (kind) {
    case "h1":
      return (
        <h1 className="px-8 text-center text-xl font-bold capitalize text-codGray md:text-3xl lg:mt-5">
          {content}
        </h1>
      );

    case "h2":
      return <h2 className={css}>{content}</h2>;

    case "h3":
      return <h3 className={css}>{content}</h3>;
  }
};

export default Typographies;
