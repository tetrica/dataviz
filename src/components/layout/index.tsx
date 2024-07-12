import Header from "./header";

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-rows-layout h-screen gap-4">
      <Header />

      <div className="p-4 flex flex-col items-center">{children}</div>
    </div>
  );
}

export default Layout;
