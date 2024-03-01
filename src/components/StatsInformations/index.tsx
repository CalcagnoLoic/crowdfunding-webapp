import Typographies from "../../typographies/Paragraph";

type StatProps = {
  title: string | number;
  subtitle: string;
  css?: string
};

const Component = ({ title, subtitle, css }: StatProps) => (
  <div className={`${css} flex-col`}>
    <Typographies
      kind="p"
      css="text-codGray font-extrabold text-4xl"
      content={title}
    />
    <Typographies kind="p" css="text-boulder mt-3" content={subtitle} />
  </div>
);

export default Component;
