import Heading from "../../typographies/Heading";
import IconLogo from "../../icons/IconLogo";
import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <div className="relative rounded-xl bg-white py-8 ">
    <IconLogo
      isMainLogo={false}
      css="absolute -top-7 left-1/2 -translate-x-1/2"
    />

    <Heading kind="h1" content="mastercraft bamboo monitor riser" />

    <Paragraph
      kind="p"
      content="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
      css="mt-4 px-8 text-center text-boulder"
    />
  </div>
);

export default Component;
