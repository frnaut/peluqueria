
import SidebarContainer from "@/components/dashboard/sidebar/sidebar_container";
import { BreadCrumbs } from "@/components/ui/bread_crumbs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Sistema de gestion de peluquerias",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="w-full flex">
                    <aside className="w-1/4 h-scree">
                        <SidebarContainer />
                    </aside>
                    <div className="w-3/4 h-screen bg-blue-100">
                        <BreadCrumbs />
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
