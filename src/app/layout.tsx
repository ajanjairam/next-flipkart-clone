import "./globals.css";
import { NavBar } from "@/components";

export const metadata = {
    title: "Flipkart Clone",
    description: "Clone by @ajanjairam",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen font-roboto">
                <NavBar />
                {children}
            </body>
        </html>
    );
}
