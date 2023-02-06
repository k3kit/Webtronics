import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import localFont from "@next/font/local";
import "../styles/main.scss";

const inter = Inter({
  weight: ["600", "400"],
  style: "normal",
  variable: "--inter-font",
});
const ClashDisplay = localFont({
  src: [
    {
      path: "./ClashDisplay-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--clash-display",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --clash-display: ${ClashDisplay.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
