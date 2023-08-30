import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { SSRProvider } from "react-bootstrap";
import "../styles/global.scss";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
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
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-YJG4PLMY31"
            ></Script>
            <Script
                id="1"
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
