import type { AppProps } from "next/app";
import { Inter, Roboto } from "@next/font/google";
import localFont from "@next/font/local";
import "../styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

const clashDisplay = localFont({
  src: "./clash-display-variable.ttf",
});
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-clash-display: ${clashDisplay.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
          --font-roboto: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
