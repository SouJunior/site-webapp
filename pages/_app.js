import Script from "next/script";
import "../styles/globals.css";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`        
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K8DHZSKV');
        `}
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L5P4NG9T9Y');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
