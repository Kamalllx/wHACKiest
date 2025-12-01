import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "wHACKiest 2025 | Organized by CodeRIT & Dept of CSE",
  description: "Experience wHACKiest 2025 - a two-phase hackathon with Ideathon (Dec 1-10) and 24-hour on-campus hackathon (Dec 12-13). ₹50,000 prize pool. Organized by CodeRIT and Department of Computer Science and Engineering, RIT Bengaluru.",
  openGraph: {
    title: "wHACKiest 2025",
    description: "Two-phase hackathon with ₹50,000 prize pool. Ideathon (Dec 4-7) + 24-hour hackathon (Dec 12-13) at RIT Bengaluru.",
    url: "https://coderit.netlify.app/",
    siteName: "wHACKiest 2025",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CodeRIT",
    creator: "@CodeRIT",
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}