import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
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
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Rafał Gołąb - DevOps & Cloud Architect",
    description:
      "Professional CV and portfolio of Rafał Gołąb - DevOps Engineer, Cloud Architect, DevSecOps and SRE specialist",
    url: "https://rgolab.github.io",
    siteName: "Rafał Gołąb",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rafał Gołąb - DevOps & Cloud Architect",
    description:
      "Professional CV and portfolio of Rafał Gołąb - DevOps Engineer, Cloud Architect, DevSecOps and SRE specialist",
  },
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
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:dark:bg-gray-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-primary-600"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="page-root">
            <Navigation />
            <main>{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
