
import { Poppins } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { ThemeProvider } from "@/components/shared/theme-provider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/Footer";
import NavBar from "@/components/shared/NavBar";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "Khanna Badoosh",
  description: "Khanna Badoosh offers exclusive travel packages to breathtaking destinations, combining adventure, comfort, and cultural exploration. Discover handpicked experiences, seamless bookings, and unforgettable journeys—all in one place.",
  icons: {
    icon: 'favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <body className={poppins.className}>
          <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"/>
                <NavBar />
          {children}
          <Footer/>
        </body>
      </ThemeProvider>
    </html>
  );
}