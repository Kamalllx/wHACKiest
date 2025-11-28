import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "wHACKiest | Organized by CodeRIT & Dept of CSE",
  description: "Experience wHACKiest - the ultimate hackathon experience organized by CodeRIT and Dept of CSE. 36 hours of building, mentorship, and diverse resources to make your ideas come to life!",
  openGraph: {
    title: "wHACKiest",
    description: "Experience wHACKiest - the ultimate hackathon experience organized by CodeRIT and Dept of CSE.",
    url: "https://whackiest.coderit.org",
    siteName: "wHACKiest",
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

