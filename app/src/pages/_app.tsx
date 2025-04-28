import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[360px] h-[640px] rounded-2xl shadow-2xl overflow-hidden">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
