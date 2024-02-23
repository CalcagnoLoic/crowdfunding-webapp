import { ProductStatProps } from "../../../types/type";
import { textSection } from "../../../data/data";
import { textSectionBis } from "../../../data/data";

import BoxLayout from "../../../layout/BoxLayout";
import Heading from "../../../typographies/Heading";
import OfferSection from "../../OfferSection";
import Paragraph from "../../../typographies/Paragraph";

const Component = ({ positionCSS }: ProductStatProps) => (
  <BoxLayout
    css={`
      ${positionCSS} p-6 md:p-12
    `}
  >
    <>
      <Heading
        kind="h2"
        content="About this project"
        css="text-codGray font-bold text-xl mt-3 md:mt-0"
      />

      <Paragraph
        kind="p"
        content={textSection}
        css="text-boulder mt-8 leading-7"
      />
      <Paragraph
        kind="p"
        content={textSectionBis}
        css="text-boulder mt-8 leading-7"
      />

      <OfferSection />
    </>
  </BoxLayout>
);

export default Component;
