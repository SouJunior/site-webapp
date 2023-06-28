import Script from "next/script";
import "../styles/globals.css";
import { Layout } from "../components/Layout";
import PrivacyPolicy from "../components/commons/PrivacyPolicy/PrivacyPolicy";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-L5P4NG9T9Y"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L5P4NG9T9Y');
        `}
      </Script>
      <Component {...pageProps} />
      <PrivacyPolicy />
    </Layout>
  );
}

export default MyApp;
