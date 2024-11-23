import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export type SideBarGenericProps<T = unknown> = {
  children: ReactNode;
  className?: string;
} & T;

export type SideBarLinkProps = {
  href: string;
  active?: boolean;
};

export const SideBar = ({ children, className }: SideBarGenericProps) => {
  return (
    <aside
      className={cn([
        "flex flex-col space-y-6 border-r border-border",
        className,
      ])}
    >
      {children}
    </aside>
  );
};

export const SideBarHeader = ({ children, className }: SideBarGenericProps) => {
  return (
    <header className={cn(["border-b p-6", className])}>{children}</header>
  );
};

export const SideBarHeaderTitle = ({
  children,
  className,
}: SideBarGenericProps) => {
  return (
    <h2
      className={cn([
        "ml-3 mr-3 text-xs uppercase text-muted-foreground",
        className,
      ])}
    >
      {children}
    </h2>
  );
};

export const SideBarMain = ({ children, className }: SideBarGenericProps) => {
  return <main className={cn(["px-3", className])}>{children}</main>;
};

export const SideBarNav = ({ children, className }: SideBarGenericProps) => {
  return <nav className={cn(["", className])}>{children}</nav>;
};

export const SideBarNavHeader = ({
  children,
  className,
}: SideBarGenericProps) => {
  return <header className={cn(["", className])}>{children}</header>;
};

export const SideBarNavMain = ({
  children,
  className,
}: SideBarGenericProps) => {
  return (
    <header className={cn(["flex flex-col", className])}>{children}</header>
  );
};

export const SideBarNavHeaderTitle = ({
  children,
  className,
}: SideBarGenericProps) => {
  return <span className={cn(["", className])}>{children}</span>;
};

export const SideBarNavLink = ({
  children,
  className,
  href,
  active,
}: SideBarGenericProps<SideBarLinkProps>) => {
  return (
    <Link
      href={href}
      className={cn([
        "rounded-xs flex items-center px-3 py-2 text-sm",
        active && "bg-secondary",
        className,
      ])}
    >
      {children}
    </Link>
  );
};

export const SideBarFooter = ({ children, className }: SideBarGenericProps) => {
  return (
    <footer className={cn(["mt-auto border-t border-border p-6", className])}>
      {children}
    </footer>
  );
};
