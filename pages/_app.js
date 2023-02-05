import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
