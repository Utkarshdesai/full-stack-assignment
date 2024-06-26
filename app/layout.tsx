import { ReduxProvider } from "@/redux/provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        <Toaster />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
