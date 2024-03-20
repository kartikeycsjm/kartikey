import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
const inter = Inter({ subsets: ["latin"] });
import Footer from "./_components/Footer";
export const metadata = {
  title: "Kartikey Mishra",
  description: "My Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000625] w-full min-h-screen flex justify-between items-center flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
