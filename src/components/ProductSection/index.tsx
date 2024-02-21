import BoxLayout from "../../layout/BoxLayout";
import { ProductStatProps } from "../../types/type";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";

import { textSection } from "../../data/data";
import { textSectionBis } from "../../data/data";

const Component = ({ positionCSS }: ProductStatProps) => (
  <BoxLayout
    css={`
      ${positionCSS} p-12
    `}
  >
    <>
      <Heading
        kind="h2"
        content="About this project"
        css="text-codGray font-bold text-xl"
      />

      <Paragraph kind="p" content={textSection} css="text-boulder mt-8" />
      <Paragraph kind="p" content={textSectionBis} css="text-boulder mt-8" />
    </>
  </BoxLayout>
);

export default Component;
