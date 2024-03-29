type BookmarkProps = {
  clicked: boolean;
};

const Icon = ({ clicked }: BookmarkProps) => (
  <svg
    width="56"
    height="56"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-3 cursor-pointer md:ml-0"
  >
    <g fill="none" fillRule="evenodd">
      <circle
        fill={clicked ? "#147B74" : "#2F2F2F"}
        cx="28"
        cy="28"
        r="28"
        className={`${clicked ? "bg-genoa" : "hover:fill-boulder"} transition duration-500 ease-in-out `}
      />
      <path
        fill={clicked ? "#FFF" : "#B1B1B1"}
        d="M23 19v18l5-5.058L33 37V19z"
      />
    </g>
  </svg>
);

export default Icon;
