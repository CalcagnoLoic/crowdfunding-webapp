import BoxOfferLayout from "../../layout/BoxOfferLayout";
import Button from "../Button";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";

interface OfferProps {
  titleOffer: string;
  positionCSS: string;
  amount: string;
  offer: string;
  daysLeft: number;
  isDisabled?: boolean;
}

const Component = ({
  titleOffer,
  positionCSS,
  amount,
  offer,
  daysLeft,
  isDisabled,
}: OfferProps) => (
  <BoxOfferLayout css={positionCSS}>
    <div className={isDisabled ? "opacity-40" : ""}>
      <div className="md:flex md:justify-between">
        <Heading kind="h3" content={titleOffer} css="font-bold text-lg" />
        <Paragraph
          kind="span"
          content={`Pledge ${amount} or more`}
          css="text-keppel"
        />
      </div>

      <Paragraph
        kind="p"
        content={offer}
        css="mt-6 text-boulder leading-7 tracking-wider"
      />

      <div className="mt-7 flex flex-col md:flex-row md:justify-between">
        <div className=" flex ">
          <Paragraph
            kind="p"
            content={daysLeft}
            css="text-4xl font-black text-codGray self-center"
          />
          <Paragraph
            kind="p"
            content="left"
            css="text-boulder ml-3 self-center"
          />
        </div>

        <div className="mt-4 md:mt-2 md:self-center">
          <Button
            isIcon={false}
            content={`${isDisabled ? "Out Of Stock" : "Select Reward"}`}
            css={`btn ${isDisabled ? "bg-boulder text-white cursor-not-allowed hover:bg-boulder" : "cursor-pointer"}`}
            isDisabled={true}
          />
        </div>
      </div>
    </div>
  </BoxOfferLayout>
);

export default Component;
