import "../styles/globals.css";
import Footer from "./footer";

export const metadata = {
  title: "Catalog — Premium Multi-Category",
  description: "Browse Cars, Bikes, Phones & Computers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
