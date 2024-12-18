import "./globals.css";
import { Inter } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AuthProvider } from "@/app/(context)/auth-context";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            <AuthProvider>{children}</AuthProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
