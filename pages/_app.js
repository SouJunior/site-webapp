import Script from "next/script";
import "../styles/globals.css";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-L5P4NG9T9Y"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L5P4NG9T9Y');
        `}
      </Script>
      {/* <Script
        async
        id="google-adsense"
        src={
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7597091185548852"
        }
        strategy="afterInteractive"
        data-ad-client="ca-pub-7597091185548852"
        crossorigin="anonymous"
        onError={(e) => {
          console.error("Erro ao carregar script", e);
        }}
      ></Script> */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
