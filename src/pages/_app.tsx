// _app.tsx
import { useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Dynamically load the OneSignal SDK script
    const script = document.createElement("script");
    script.src = "https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js";
    script.async = true;
    document.head.appendChild(script);

    // Clean up the script on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>{/* Add any other head elements you need */}</Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
