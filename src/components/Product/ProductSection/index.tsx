import { ProductStatProps } from "../../../types/type";
import {
  textBambooStand,
  textBlackEdition,
  textMahoganyEdition,
  textSection,
} from "../../../data/data";
import { textSectionBis } from "../../../data/data";

import BoxLayout from "../../../layout/BoxLayout";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import BoxOffer from "../../BoxOffer";
import { useOfferContext } from "../../../hooks/useOfferContext";

const Component = ({ positionCSS }: ProductStatProps) => {
  const { offerLeftBamboo, offerLeftBlack } = useOfferContext();
  return (
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

        <BoxOffer
          titleOffer="Bamboo Stand"
          positionCSS="mt-10"
          amount="$25"
          offer={textBambooStand}
          offerLeft={offerLeftBamboo}
        />
        <BoxOffer
          titleOffer="Black Edition Stand"
          positionCSS="mt-5"
          amount="$75"
          offer={textBlackEdition}
          offerLeft={offerLeftBlack}
        />
        <BoxOffer
          titleOffer="Mahogany Special Edition"
          positionCSS="mt-5"
          amount="$200"
          offer={textMahoganyEdition}
          offerLeft={0}
          isDisabled={true}
        />
      </>
    </BoxLayout>
  );
};
export default Component;
