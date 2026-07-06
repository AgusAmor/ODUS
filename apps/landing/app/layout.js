import { Inter, Manrope } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "ODUS Centro Médico",
  description: "Humanized Precision in Healthcare",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="bg-tertiary text-neutral font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
