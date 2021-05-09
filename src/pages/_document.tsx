import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initalProps = await Document.getInitialProps(ctx);
    return { ...initalProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Share your thoughts without compromise"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
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

export default CustomDocument;
