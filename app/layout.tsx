import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({
  subsets: ["latin"],
  display: 'auto',
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: "RendezVibe",
  description: "RendezVibe is a platform for event managmement",
  icons: {
    icon: "/assets/images.logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>

  );
}
