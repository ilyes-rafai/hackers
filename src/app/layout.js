import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Kufam, Poppins } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

const poppins = Poppins({
        subsets: ["latin"],
        weight: ["300", "400", "500", "600", "700"],
        variable: "--font-poppins",
});

const kufam = Kufam({
        subsets: ["arabic"],
        weight: ["400", "500", "600", "700"],
        variable: "--font-kufam",
});

export default async function RootLayout({ children }) {
        const locale = await getLocale();
        const messages = await getMessages();

        const fontClass = locale === "ar" ? kufam.className : poppins.className;

        return (
                <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className="h-full antialiased">
                        <body className={`${fontClass} overflow-x-hidden text-white bg-black h-screen`}>
                                <NextIntlClientProvider messages={messages}>
                                        {children}
                                        <ScrollToTop />
                                </NextIntlClientProvider>
                        </body>
                </html>
        );
}
