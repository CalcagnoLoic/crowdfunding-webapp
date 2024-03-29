import Button from "../Button";
import Heading from "../../typographies/Heading";
import OfferLayout from "../../layout/OfferLayout";
import Paragraph from "../../typographies/Paragraph";

interface OfferProps {
  titleOffer: string;
  positionCSS: string;
  amount: string;
  offer: string;
  offerLeft: number;
  isDisabled?: boolean;
}

const Component = ({
  titleOffer,
  positionCSS,
  amount,
  offer,
  offerLeft,
  isDisabled,
}: OfferProps) => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <OfferLayout css={positionCSS}>
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
              content={offerLeft}
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
              content={`${isDisabled ? "Out Of Stock" : "Select Reward"}`}
              css={`btn ${isDisabled ? "bg-boulder text-white cursor-not-allowed hover:bg-boulder" : "cursor-pointer"}`}
              onClick={handleClick}
              isDisabled={isDisabled}
            />
          </div>
        </div>
      </div>
    </OfferLayout>
  );
};
export default Component;
