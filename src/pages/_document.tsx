import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ReactElement } from 'react';
import { GA_TRACKING_ID } from '../lib/helper/gtag';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="" />

          <meta
            name="description"
            content="Official Internal hackathon of Delhi Technical Campus"
          />

          <meta name="author" content="Ishqdehlvi" />

          <meta name="robots" content="index, follow" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://inzi.me/"
          />
          <meta
            property="og:title"
            content="Internal Hackathon | Delhi Technical Campus"
          />
          <meta
            property="og:description"
            content="Official Internal hackathon of Delhi Technical Campus."
          />
          <meta property="og:image" content="/HomePreview.png" />

          {/* Twitter  */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://inzi.me/"
          />
          <meta
            property="twitter:title"
            content="Internal Hackathon | Delhi Technical Campus"
          />
          <meta
            property="twitter:description"
            content="Official Internal hackathon of Delhi Technical Campus."
          />
          <meta property="twitter:image" content="/HomePreview.png" />

          <meta name="theme-color" content="#111119" />
          <link rel="apple-touch-icon" href="" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,700&family=Roboto+Mono&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Iceland&display=swap"
            rel="stylesheet"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="ga-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
