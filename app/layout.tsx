import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wissam Merhi",
  description: "About Wissam Merhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" />
        <script>var Alert = ReactBootstrap.Alert;</script>
      </head>
      <body
        className={roboto.className}
        style={{ background: "rgb(17 16 16)" }}
      >
        {children}
      </body>
    </html>
  );
}
