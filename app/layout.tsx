import "./globals.css";
import { Handlee } from "next/font/google";

const handlee = Handlee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handlee",
});

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
