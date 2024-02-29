import { LayoutProps } from "../../types/interface";

const Layout = ({ children, css }: LayoutProps) => (
  <div
    className={`${css}  rounded-xl border-[1px]  p-6 md:px-8 md:py-9`}
  >
    {children}
  </div>
);

export default Layout;
