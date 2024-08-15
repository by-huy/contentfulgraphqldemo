import localFont from "next/font/local";
import "./globals.css";
import { SmoothScrollProvider } from "./_context/SmoothScrollProvider";
import Navbar from "./_components/common/Header";
import Footer from "./_components/common/Footer";
import GridDebugTool from "./_debug/GridDebug";

const overusedgrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-VF.woff2",
    },
  ],
  display: "block",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "100 900",
  variable: "--font-overusedgrotesk",
});

export const metadata = {
  // metadataBase: new URL(''),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "",
  description: "",
  openGraph: {
    url: "",
    siteName: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${overusedgrotesk.variable}`}>
      <body className="font-overusedgrotesk antialiased">
        <GridDebugTool />
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
