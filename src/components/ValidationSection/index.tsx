import { validityMessage } from "../../data/data";

import Button from "../Button";
import Heading from "../../typographies/Heading";
import IconValidity from "../../icons/IconValidity";
import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <>
    <div className="opacity z-40 bg-codGray"></div>
    <div className="absolute left-1/2 top-36 z-40 w-4/5 -translate-x-1/2 rounded-xl bg-white px-6 py-10 md:top-96 md:w-[540px] md:px-12 md:py-12">
      <IconValidity />
      <Heading
        kind="h1"
        content="Thanks for your support!"
        css="text-center font-extrabold text-2xl mt-8"
      />
      <Paragraph
        kind="p"
        content={validityMessage}
        css="text-boulder text-center mt-5 leading-7"
      />

      <Button content="Got it!" css="btn block mx-auto mt-8" />
    </div>
  </>
);

export default Component;
