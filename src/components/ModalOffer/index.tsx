import { useState } from "react";
import OfferLayout from "../../layout/OfferLayout";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";
import PledgeSection from "../PledgeSection";

type ModalOfferProps = {
  title: string;
  subtitle?: string;
  id: string;
  offer: string;
  isDisabled?: true;
  isFreeOffer?: boolean;
  daysLeft?: string;
};

const Component = ({
  title,
  subtitle,
  id,
  offer,
  isDisabled,
  isFreeOffer,
  daysLeft,
}: ModalOfferProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <OfferLayout css={`mt-8 ${isChecked ? "" : "border-keppel"} `}>
      <div className={isDisabled ? "opacity-30" : "cursor-pointer"}>
        <div className="flex justify-between">
          <label
            htmlFor={id}
            className={`flex  ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            <input
              type="radio"
              name="selectOffer"
              id={id}
              disabled={isDisabled}
              className="w-4"
            />
            <div
              className="ml-4 flex flex-col md:flex-row"
              onClick={handleClick}
            >
              <Heading
                kind="h2"
                content={title}
                css={`font-bold ${isDisabled ? "" : "hover:text-keppel"}`}
              />

              {subtitle && (
                <Heading
                  kind="h3"
                  content={subtitle}
                  css="text-keppel mt-2 md:mt-0 md:ml-4"
                />
              )}
            </div>
          </label>

          {daysLeft && (
            <div className="self-center">
              <div className="flex">
                <Paragraph
                  kind="p"
                  content={daysLeft}
                  css="text-xl md:text-2xl font-black text-codGray self-center"
                />
                <Paragraph
                  kind="p"
                  content="left"
                  css="text-boulder ml-3 self-center"
                />
              </div>
            </div>
          )}
        </div>

        <Paragraph
          kind="p"
          content={offer}
          css="ml-7 mt-3 leading-7 text-boulder"
        />

        {!isChecked && !isDisabled && !isFreeOffer && <PledgeSection />}
      </div>
    </OfferLayout>
  );
};

export default Component;
