import { MainSideBar } from "@/components/main-sidebar";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid min-h-screen grid-cols-[16rem_1fr]">
      <MainSideBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
