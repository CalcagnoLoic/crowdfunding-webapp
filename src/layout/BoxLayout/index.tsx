interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  css: string;
}

const Layout = ({ children, css }: LayoutProps) => (
  <div className={`${css} rounded-xl border-[1px] bg-white`}>{children}</div>
);

export default Layout;
