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

export const metadata = {
        title: 'DHAD Hackers',
        description: 'Ready to build your tech career? Join DHAD Hackers for expert-led training in coding, design, and ethical hacking. Choose your path: online or on-site in Oujda.',
        keywords: ['Coding', 'Design', 'Ethical Hacking', 'Tech Training', 'Oujda', 'DHAD Hackers', 'html', 'css', 'javascript', 'python', 'cybersecurity', 'web development', 'programming', 'technology', 'bootcamp', 'informatique', 'formation', 'en ligne', 'codage', 'conception', 'piratage éthique', 'Oujda'],
        authors: [{ name: 'Ilyes Rafai' }],
        creator: 'DHAD Hackers',
        publisher: 'DHAD Hackers',
        metadataBase: new URL('https://dhadhackers.com'),

        openGraph: {
                title: 'DHAD Hackers | Tech Training & Bootcamps',
                description: 'Ready to build your tech career? Join DHAD Hackers for expert-led training in coding, design, and ethical hacking.',
                url: 'https://dhadhackers.com',
                siteName: 'DHAD Hackers',
                locale: 'en_US',
                type: 'website',
                images: [
                        {
                                url: '/og-image.jpg',
                                width: 1200,
                                height: 630,
                                alt: 'DHAD Hackers',
                        },
                ],
        },

        // Twitter Cards
        twitter: {
                card: 'summary_large_image',
                title: 'DHAD Hackers | Tech Training',
                description: 'Join DHAD Hackers for expert-led training in coding, design, and ethical hacking.',
                images: ['/og-image.jpg'],
        },

        // Favicons and App Icons
        icons: {
                icon: '/favicon.ico',
                shortcut: '/favicon-16x16.png',
                apple: '/apple-touch-icon.png',
        },
};

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
