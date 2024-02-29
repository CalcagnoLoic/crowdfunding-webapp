import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <Paragraph
    kind="p"
    css="mt-20 border-t-[1px] bg-white p-5 text-center"
    content={
      <>
        Coded with love by{" "}
        <a
          href="https://github.com/CalcagnoLoic"
          target="_blank"
          rel="noopener noreferrer"
        >
          @CalcagnoLoic 🎉
        </a>
      </>
    }
  />
);

export default Component;
