import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

export type SideBarGenericProps<T = unknown> = {
  children: ReactNode;
  className?: string;
} & T;

export type SideBarLinkProps = {
  href: string;
};

export const SideBar = ({ children, className }: SideBarGenericProps) => {
  return (
    <aside className={cn(["border-r border-border", className])}>
      {children}
    </aside>
  );
};

export const SideBarHeader = ({ children, className }: SideBarGenericProps) => {
  return (
    <header className={cn(["border-r border-border", className])}>
      {children}
    </header>
  );
};

export const SideBarHeaderTitle = ({
  children,
  className,
}: SideBarGenericProps) => {
  return (
    <h2 className={cn(["border-r border-border", className])}>{children}</h2>
  );
};

export const SideBarMain = ({ children, className }: SideBarGenericProps) => {
  return (
    <main className={cn(["border-r border-border", className])}>
      {children}
    </main>
  );
};

export const SideBarNav = ({ children, className }: SideBarGenericProps) => {
  return (
    <nav className={cn(["border-r border-border", className])}>{children}</nav>
  );
};

export const SideBarNavHeader = ({
  children,
  className,
}: SideBarGenericProps) => {
  return (
    <header className={cn(["border-r border-border", className])}>
      {children}
    </header>
  );
};

export const SideBarNavMain = ({
  children,
  className,
}: SideBarGenericProps) => {
  return (
    <header className={cn(["border-r border-border", className])}>
      {children}
    </header>
  );
};

export const SideBarNavHeaderTitle = ({
  children,
  className,
}: SideBarGenericProps) => {
  return (
    <h4 className={cn(["border-r border-border", className])}>{children}</h4>
  );
};

export const SideBarNavLink = ({
  children,
  className,
  href,
}: SideBarGenericProps<SideBarLinkProps>) => {
  return (
    <Link href={href} className={cn(["border-r border-border", className])}>
      {children}
    </Link>
  );
};

export const SideBarFooter = ({ children, className }: SideBarGenericProps) => {
  return (
    <footer className={cn(["border-r border-border", className])}>
      {children}
    </footer>
  );
};
