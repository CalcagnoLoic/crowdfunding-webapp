type LineProps = {
  isMobile: boolean;
};

const Component = ({ isMobile }: LineProps) =>
  isMobile ? (
    <div className="mx-auto my-6 block h-[1px] w-[80px] bg-dustyGray"></div>
  ) : (
    <div className="h-[63px] w-[1px] bg-dustyGray"></div>
  );

export default Component;
