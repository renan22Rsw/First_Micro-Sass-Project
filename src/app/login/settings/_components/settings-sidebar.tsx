"use client";

import {
  SideBarNav,
  SideBarNavMain,
  SideBarNavLink,
} from "@/components/sidebar";
import { usePathname } from "next/navigation";

const SettingsSideBar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside>
      <SideBarNav>
        <SideBarNavMain>
          <SideBarNavLink
            href="/login/settings"
            active={isActive("/login/settings")}
          >
            My profile
          </SideBarNavLink>
          <SideBarNavLink
            href="/login/settings/theme"
            active={isActive("settings/theme")}
          >
            Theme
          </SideBarNavLink>
          <SideBarNavLink
            href="/login/settings/billing"
            active={isActive("settings/billing")}
          >
            Billing
          </SideBarNavLink>
        </SideBarNavMain>
      </SideBarNav>
    </aside>
  );
};

export default SettingsSideBar;
