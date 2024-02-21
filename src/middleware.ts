import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const sensitiveRoutes = ["/dashboard"];
const authRoutes = ["/login"];
const DEFAULT_LOGIN_REDIRECT = "/dashboard";

export default withAuth(
  async function middleware(req) {
    const isSensitiveRoute = sensitiveRoutes.includes(req.nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(req.nextUrl.pathname);
    const isLoggedIn = await getToken({ req });

    if (isAuthRoute) {
      if (isLoggedIn) {
        return NextResponse.redirect(
          new URL(DEFAULT_LOGIN_REDIRECT, req.nextUrl)
        );
      }

      return NextResponse.next();
    }

    if (!isLoggedIn && isSensitiveRoute) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
