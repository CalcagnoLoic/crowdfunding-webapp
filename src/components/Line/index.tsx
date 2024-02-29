type LineProps = {
  isMobile: boolean;
  additionnalCSS?: string;
};

const Component = ({ isMobile, additionnalCSS }: LineProps) =>
  isMobile ? (
    <div
      className={`${additionnalCSS} mx-auto my-6 block h-[1px] w-[80px] bg-dustyGray`}
    ></div>
  ) : (
    <div className="h-[63px] w-[1px] bg-dustyGray"></div>
  );

export default Component;
