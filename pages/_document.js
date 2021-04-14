import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>
            Professional Football Coaching-Ages 4-12 | We Make Footballers
          </title>

          <meta charSet="utf-8" />
          <meta
            name="description"
            content="We Make Footballers is a UK wide football coaching company for kids aged 4 to 12 of all abilties.
                        We offer professional and fun training to help children develop their football skills."
          />

          <link rel="shortcut icon" href="/static/assets/favicon.jpg" />
          <link rel="stylesheet" href="/static/css/style.css" />
          <link rel="stylesheet" href="/static/css/font.css" />
          <link rel="stylesheet" href="/static/css/custom.css" />
          <link rel="stylesheet" href="/static/css/hover.css" />
          <link rel="stylesheet" href="/static/css/button.css" />

          <script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
          ></script>

          <script
            type="text/javascript"
            src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
            async
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
