import Header from "./header";

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-rows-layout h-screen gap-4">
      <Header />

      {children}
    </div>
  );
}

export default Layout;
