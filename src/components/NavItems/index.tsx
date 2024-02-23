import { NavContent } from "../../data/data";

type NavItemsProps = {
  ulStyle: string;
  liStyle: string;
  forwardedRef?: React.RefObject<HTMLUListElement>};

const Component = ({ ulStyle, liStyle, forwardedRef }: NavItemsProps) => (
  <ul className={ulStyle} ref={forwardedRef}>
    {NavContent.map((item) => (
      <li key={item.id} className={liStyle}>
        <a href="#">{item.content}</a>
      </li>
    ))}
  </ul>
);

export default Component;
