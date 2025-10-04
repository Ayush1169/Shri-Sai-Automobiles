import "@/styles/globals.css";
import type { AppProps } from "next/app";
import WhatsappButton from "../pages/components/whatsapp"; // ← import it

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsappButton /> {/* ← Add it here, outside page */}
    </>
  );
}
