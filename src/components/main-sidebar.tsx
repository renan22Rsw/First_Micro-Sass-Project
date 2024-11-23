"use client";

import { usePathname } from "next/navigation";
import {
  SideBar,
  SideBarHeader,
  SideBarMain,
  SideBarNav,
  SideBarNavMain,
  SideBarNavLink,
  SideBarNavHeader,
  SideBarHeaderTitle,
  SideBarFooter,
} from "./sidebar";

import { HomeIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import UserDropDown from "./user-dropdown";
import Logo from "./logo";

export const MainSideBar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <SideBar>
      <SideBarHeader>
        <Logo />
      </SideBarHeader>
      <SideBarMain className="flex flex-grow flex-col">
        <SideBarNav>
          <SideBarNavMain>
            <SideBarNavLink active={isActive("/login")} href="/login">
              <HomeIcon className="mr-3 h-5 w-5" />
              Tarefas
            </SideBarNavLink>
            <SideBarNavLink
              active={isActive("/login/settings")}
              href="/login/settings"
            >
              <MixerVerticalIcon className="mr-5 h-3 w-5" />
              Configurações
            </SideBarNavLink>
          </SideBarNavMain>
        </SideBarNav>

        <SideBarNav className="mt-auto">
          <SideBarNavHeader>
            <SideBarHeaderTitle>Links extras</SideBarHeaderTitle>
          </SideBarNavHeader>
          <SideBarNavMain>
            <SideBarNavLink href="/">Precisa de ajuda?</SideBarNavLink>
            <SideBarNavLink href="/">Site</SideBarNavLink>
          </SideBarNavMain>
        </SideBarNav>
      </SideBarMain>
      <SideBarFooter>
        <UserDropDown />
      </SideBarFooter>
    </SideBar>
  );
};
