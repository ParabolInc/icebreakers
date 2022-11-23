import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IBM_Plex_Sans } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

function IcebreakersApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${ibmPlexSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default IcebreakersApp;
