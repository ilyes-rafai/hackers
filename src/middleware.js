// src/middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
        // Get locale from cookie, default to 'en'
        const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";

        // Set the header so next-intl knows which locale to use
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("x-next-intl-locale", locale);

        return NextResponse.next({
                request: { headers: requestHeaders },
        });
}

export const config = {
        matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
