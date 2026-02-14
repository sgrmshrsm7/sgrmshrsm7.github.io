import "./globals.css";
import { Handlee } from "next/font/google";

const handlee = Handlee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handlee",
});

export const metadata = {
  title: "Sagar Mishra",
  description: "Sagar Mishra's portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${handlee.variable}`}>{children}</body>
    </html>
  );
}
