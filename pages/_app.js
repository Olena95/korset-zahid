import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { SSRProvider } from "react-bootstrap";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}
