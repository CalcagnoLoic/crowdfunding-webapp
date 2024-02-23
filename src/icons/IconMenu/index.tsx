type IconProps = {
  isOpen: boolean;
  setIsOpen: React.MouseEventHandler<SVGElement>;
};

const Icon = ({ isOpen, setIsOpen }: IconProps) =>
  isOpen ? (
    <svg
      width="15"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      className="z-20 cursor-pointer"
      onClick={setIsOpen}
    >
      <path
        d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
        fill="#FFFFFF"
        fillRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      width="16"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      className="z-20 cursor-pointer"
      onClick={setIsOpen}
    >
      <g fill="#FFFFFF" fillRule="evenodd">
        <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
      </g>
    </svg>
  );

export default Icon;
