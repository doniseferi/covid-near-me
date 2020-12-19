import type { AppProps } from "next/app";
import "../styles.css";

function CovidNearMe({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default CovidNearMe;
