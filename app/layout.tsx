import type { Metadata } from "next";
import localFont from "next/font/local";
import { Ubuntu, Lato, Roboto, Open_Sans, Montserrat, Nunito, Source_Sans_3, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/navigation/footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const ubuntu = Ubuntu({
  weight: ["300", "400", "500"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
})

const lato = Lato({
  weight: ["400", "700"], // Normal and Bold for headers
  variable: "--font-lato",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500"], // Light, Normal, and Medium for body text and titles
  variable: "--font-roboto",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ["300", "400", "600"], // Light, Regular, and Semi-Bold for body text and titles
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"], // Regular for headers, Bold for main header
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["300", "400", "600", "700"], // Light, Regular, and Semi-Bold for body text and titles
  variable: "--font-nunito",
  subsets: ["latin"],
});

const sourceSansPro = Source_Sans_3({
  weight: ["300", "400", "600", "700"], // Light, Regular, and Semi-Bold for body text
  variable: "--font-source-sans-pro",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"], // Regular for headers, Bold for main header
  variable: "--font-poppins",
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["300", "400", "500"], // Light, Regular, and Medium for body text
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Currie Lab",
  description: "Currie Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${lato.variable} ${roboto.variable} ${openSans.variable} ${montserrat.variable} ${nunito.variable} ${sourceSansPro.variable} ${poppins.variable} ${raleway.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <div className="flex-grow flex-row max-w-full overflow-auto">
                {children}
            </div>
            <Footer />
        </div>
      </body>
    </html>
  );
}
