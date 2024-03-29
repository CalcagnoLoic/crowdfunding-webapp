import { LayoutProps } from "../../types/interface";

const Layout = ({ children, css }: LayoutProps) => (
  <div className={`${css} rounded-xl border-[1px] bg-white`}>{children}</div>
);

export default Layout;
