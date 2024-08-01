import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inventory Management System",
  description:
    "Created by a combination of Next.js and Material-UI including ReactJS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" />
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
