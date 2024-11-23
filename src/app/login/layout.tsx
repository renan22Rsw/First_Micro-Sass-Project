import {
  SideBar,
  SideBarFooter,
  SideBarHeader,
  SideBarHeaderTitle,
  SideBarMain,
  SideBarNav,
  SideBarNavLink,
  SideBarNavMain,
} from "@/components/sidebar";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[16rem_1fr]">
      <SideBar>
        <SideBarHeader>
          <h1>oi</h1>
        </SideBarHeader>
        <SideBarMain>
          <SideBarNav>
            <SideBarNavMain>
              <SideBarNavLink href="/login">Tarefas</SideBarNavLink>
              <SideBarNavLink href="/login/settings">
                Configurações
              </SideBarNavLink>
            </SideBarNavMain>
          </SideBarNav>

          <SideBarNav>
            <SideBarHeader>
              <SideBarHeaderTitle>Links extras</SideBarHeaderTitle>
            </SideBarHeader>
            <SideBarNavMain>
              <SideBarNavLink href="/">Precisa de ajuda?</SideBarNavLink>
              <SideBarNavLink href="/">Site</SideBarNavLink>
            </SideBarNavMain>
          </SideBarNav>
        </SideBarMain>
        <SideBarFooter>
          <h1>user</h1>
        </SideBarFooter>
      </SideBar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
