import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "../src/lib/get-url";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authjs.session-token");
  const pathname = request.nextUrl.pathname;

  if (pathname === "/auth" && token) {
    return NextResponse.redirect(new URL(getUrl("/login")));
  }

  if (pathname.includes("/login") && !token) {
    return NextResponse.redirect(new URL(getUrl("/auth")));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

/*
Middleware que  previne caso o user não esteja logado,
seja redirecionado para auth, caso ele esteja logado, 
ele será redirecionado para login
*/
