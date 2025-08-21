import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import CookieConsent from "@/components/cookie-consent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Rafał Gołąb - DevOps & Cloud Architect",
  description:
    "Professional CV and portfolio of Rafał Gołąb - DevOps Engineer, Cloud Architect, DevSecOps and SRE specialist",
  keywords:
    "DevOps, Cloud Architecture, DevSecOps, SRE, AWS, Azure, Kubernetes, Docker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable}`}
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="page-root">
            <Navigation />
            <main>{children}</main>
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
