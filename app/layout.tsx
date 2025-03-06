import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryClientProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Teachers-Pet.ai",
    description: "AI tools for teachers",
    icons: {
        icon: "/teacher-emoji-favicon.svg",
    },
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
            <html lang="en">
            <link rel="icon" href="/app/icon.ico" sizes="any"/>
            <body className={inter.className}>
            <QueryProvider>{children}</QueryProvider>
            </body>
            </html>
    );
}
