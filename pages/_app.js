import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { SSRProvider } from "react-bootstrap";
import "../styles/global.scss";
import Head from "next/head";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
    return (
        <SSRProvider>
            <Head>
                <title>Корсет-захід</title>
                <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
                <meta
                    name="description"
                    content="Шукаєте ефективне вирішення проблеми з дитячим сколіозом? Корсет-захід пропонує найкращий метод сьогодення - 'Корсети Шено'. Заходьте на сайт та отримуйте більш детальну інфлрмацію!"
                />
            </Head>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </SSRProvider>
    );
}
