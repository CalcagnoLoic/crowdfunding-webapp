import { LayoutProps } from "../../types/interface";

const Layout = ({ children, css, state }: LayoutProps) => (
  <div
    className={`${css} ${state ? "border-gallery" : "border-keppel border-2"} rounded-xl border-[1px]  p-6 md:px-8 md:py-9`}
  >
    {children}
  </div>
);

export default Layout;
