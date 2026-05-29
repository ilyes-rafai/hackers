import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Alexandria, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
        subsets: ["latin"],
        weight: ["300", "400", "500", "600", "700"],
        variable: "--font-poppins",
});

const alexandria = Alexandria({
        subsets: ["arabic"],
        weight: ["300", "400", "500", "600", "700"],
        variable: "--font-alexandria",
});

export default async function RootLayout({ children }) {
        const locale = await getLocale();
        const messages = await getMessages();

        const fontClass = locale === "ar" ? alexandria.className : poppins.className;

        return (
                <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className="h-full antialiased">
                        <body className={`${fontClass} overflow-x-hidden text-white bg-black h-screen`}>
                                <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
                        </body>
                </html>
        );
}
