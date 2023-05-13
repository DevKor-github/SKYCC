import { Html, Head, Main, NextScript } from "next/document";
import GlobalStyle from "../styles/Globalstyle";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
