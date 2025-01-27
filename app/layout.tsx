import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navbar1 from "./components/navbar/Navbar1";

export const metadata: Metadata = {
  title: "İstcode Blog Page",
  description: "İstcode Blog Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar1 />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
