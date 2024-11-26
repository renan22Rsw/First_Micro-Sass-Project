import { MainSideBar } from "@/components/main-sidebar";
import { auth } from "@/services/auth";
import { PropsWithChildren } from "react";

export const Layout = async ({ children }: PropsWithChildren) => {
  const session = await auth();

  return (
    <div className="dark grid grid-cols-[16rem_1fr]">
      <MainSideBar user={session?.user} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
