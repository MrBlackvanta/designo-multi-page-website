import { SiteFooter, SiteHeader } from "@/components/layout";
import { siteName, siteUrl } from "@/data";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata, Viewport } from "next";
import { Jost, League_Spartan } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const jostItalic = Jost({
  variable: "--font-jost-italic",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const homeTitle = `${siteName} | Award-winning design and digital branding`;
const description =
  "Designo is a creative agency building responsive websites, app experiences and brand identities. Ten years of work for startups, corporations and nonprofits.";

export const metadata: Metadata = {
  ...pageMetadata({
    title: homeTitle,
    shareTitle: homeTitle,
    description,
    path: "/",
  }),
  metadataBase: new URL(siteUrl),
  title: { default: homeTitle, template: `%s | ${siteName}` },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${jostItalic.variable} ${leagueSpartan.variable} antialiased`}
    >
      <body className="group/page flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="grow">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
