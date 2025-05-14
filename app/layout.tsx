import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./Provider";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aliurduar Best Gym || Journey London",
  description:
    "At Alipurduar Join Journey London for world-class fitness classes, expert trainers, and a vibrant community.Journey London is Alipurduar's best gym.",
  keywords: [
    "Journey London",
    "Alipurduar best gym",
    "best gym at alipurduar",
    "best gym in alipurduar",
    "gym",
    "fitness",
    "Strength Training",
    "Gym Membership",
    "Alipurduar best gym",
    "Alipurduar gym",
    "gym near me",
    "fitness classes",
    "personal training",
    "group classes",
    "wellness",
    "fitness community",
  ],
  authors: [
    { name: "Rajib Debnath", url: "https://rajibdev.site" },
    { name: "Journey London Team" },
  ],
  creator: "Rajib Debnath",
  publisher: "Journey London",
  metadataBase: new URL("https://gym-website-nine-ashen.vercel.app"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
    verification: {
    google: "_GTq0A5GV7IW1YOJWfbhONPfG2vXApsL70BzTzIbn8A", // ✅ This adds your Google Search Console tag
  },
  openGraph: {
    title: "Journey London | Premium Fitness Experience with best gym at Alipurduar",
    description:
      "Discover your strongest self with unlimited classes, expert trainers, and no joining fees. Join Journey London today.",
    url: "https://gym-website-nine-ashen.vercel.app",
    siteName: "Journey London",
    images: [
      {
        url: "/home/logo.svg", // ✅ String path to public folder image
        width: 1200,
        height: 630,
        alt: "Journey London - Fitness Studio",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journey London | Premium Fitness Experience",
    description:
      "Your transformation starts here. Explore our unlimited fitness classes and community-driven wellness programs.",
    creator: "@journeylondon",
    images: ["/home/logo.svg"], // ✅ Use string path
  },
  icons: {
    icon: "/home/logo.svg",
    shortcut: "/home/logo.svg",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#000000",
  category: "Fitness",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          storageKey="theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
