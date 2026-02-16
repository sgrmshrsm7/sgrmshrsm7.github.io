import "./globals.scss";
import { Handlee } from "next/font/google";

const handlee = Handlee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handlee",
});

export const metadata = {
  title: "Sagar Mishra | Senior Software Engineer",
  description:
    "Senior Software Engineer with 4 years of experience specializing in building high-performance, responsive, scalable web architectures using React, TypeScript, and Next.js. Skilled in performance optimization, mentoring, and building high-impact, efficient solutions. Known for enhancing performance, minimizing latency, and streamlining operations.",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Sagar Mishra" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sgrmshrsm7.github.io",
    site_name: "Sagar Mishra | Senior Software Engineer",
    title: "Sagar Mishra | Senior Software Engineer",
    description:
      "Senior Software Engineer with 4 years of experience specializing in building high-performance, responsive, scalable web architectures using React, TypeScript, and Next.js. Skilled in performance optimization, mentoring, and building high-impact, efficient solutions. Known for enhancing performance, minimizing latency, and streamlining operations.",
    images: [
      {
        url: "https://sgrmshrsm7.github.io/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sagar Mishra | Senior Software Engineer",
      },
    ],
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
