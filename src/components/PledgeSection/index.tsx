import Line from "../Line";
import Paragraph from "../../typographies/Paragraph";
import Button from "../Button";

const Component = () => {
  return (
    <>
      <Line isMobile={true} additionnalCSS="w-full my-6" />

      <div className="flex flex-col justify-between md:flex-row">
        <Paragraph
          kind="span"
          content="Enter your pledge"
          css="text-boulder justify-center md:justify-start self-center"
        />
        <form className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row">
          <label className="absolute ml-2 mt-4  text-boulder md:ml-5 md:mt-0 md:block md:self-center">
            $
          </label>
          <input
            type="text"
            name=""
            id=""
            className="self-center rounded-full border-[1px] border-gallery px-5 py-4 pl-5 text-end font-extrabold active:border-keppel"
          />
          <Button
            isIcon={false}
            content="Continue"
            css="bg-keppel text-sm md:text-base text-white px-5 py-4 hover:bg-genoa ease-in-out transition duration-300 text-center"
          />
        </form>
      </div>
    </>
  );
};

export default Component;
