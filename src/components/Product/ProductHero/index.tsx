import BoxLayout from "../../../layout/BoxLayout";
import Button from "../../Button";
import Heading from "../../../typographies/Heading";
import IconLogo from "../../../icons/IconLogo";
import Paragraph from "../../../typographies/Paragraph";

import Bookmark from "../../Bookmark";

const Component = () => {
  return (
    <BoxLayout css="relative py-8 ">
      <IconLogo
        isMainLogo={false}
        css="absolute -top-7 left-1/2 -translate-x-1/2"
      />

      <Heading
        kind="h1"
        content="mastercraft bamboo monitor riser"
        css="px-8 text-center text-xl font-bold capitalize text-codGray md:text-3xl lg:mt-5"
      />

      <Paragraph
        kind="p"
        content="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
        css="mt-4 px-8 text-center text-boulder"
      />

      <div className="mt-10 flex justify-center px-2 md:justify-between md:px-12">
        <Button content="Back this project" css="btn cursor-pointer" />

        <Bookmark />
      </div>
    </BoxLayout>
  );
};

export default Component;
