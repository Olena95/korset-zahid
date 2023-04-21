import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { SSRProvider } from "react-bootstrap";
import "../styles/global.scss";
import Head from "next/head";

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}
