import Navigation from "./(components)/navigation";
import "./globals.css";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { auth, app } from "@/app/(lib)/firebase";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  console.log("root layout", auth);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Navigation />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
