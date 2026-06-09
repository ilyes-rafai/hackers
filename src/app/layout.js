import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Alexandria, Poppins } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/theme-provider";
import Whatsapp from "./components/Whatsapp";
import "./globals.css";

const poppins = Poppins({
        subsets: ["latin"],
        weight: ["300", "400", "500", "600", "700"],
        variable: "--font-poppins",
});

const alexandria = Alexandria({
        subsets: ["arabic"],
        weight: ["400", "500", "600", "700"],
        variable: "--font-alexandria",
});

export default async function RootLayout({ children }) {
        const locale = await getLocale();
        const messages = await getMessages();

        const fontClass = locale === "ar" ? alexandria.className : poppins.className;

        return (
                <html
                        lang={locale}
                        dir={locale === "ar" ? "rtl" : "ltr"}
                        className="h-full antialiased"
                        suppressHydrationWarning
                >
                        <body className={`${fontClass} overflow-x-hidden dark:text-white dark:bg-black h-screen`}>
                                <ThemeProvider
                                        attribute="class"
                                        defaultTheme="system"
                                        enableSystem
                                        disableTransitionOnChange
                                >
                                        <NextIntlClientProvider messages={messages}>
                                                {children}
                                                <ScrollToTop />
                                                <Whatsapp />
                                        </NextIntlClientProvider>
                                </ThemeProvider>
                        </body>
                </html>
        );
}
