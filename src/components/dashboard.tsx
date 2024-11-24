import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type DashboardProps<T = unknown> = {
  children: ReactNode;
  className?: string;
} & T;

export const DashboardPage = ({ children, className }: DashboardProps) => {
  return <section className={cn(["h-screen", className])}>{children}</section>;
};

export const DashboardPageHeader = ({
  children,
  className,
}: DashboardProps) => {
  return <header className={cn(["p-6", className])}>{children}</header>;
};

export const DashboardPageHeaderTitle = ({
  children,
  className,
}: DashboardProps) => {
  return (
    <span
      className={cn(["text-lg uppercase text-muted-foreground", className])}
    >
      {children}
    </span>
  );
};

export const DashboardPageHeaderNav = ({
  children,
  className,
}: DashboardProps) => {
  return <nav className={cn(["", className])}>{children}</nav>;
};

export const DashboardPageMain = ({ children, className }: DashboardProps) => {
  return <main className={cn(["p-6", className])}>{children}</main>;
};
