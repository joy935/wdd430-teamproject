import type { Metadata } from "next";
import { Inter, Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "A marketplace for artisans and crafters to showcase and sell their unique handcrafted items"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${firaCode.variable}`}>
        <header className="bg-backgroundDark text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-poppins font-bold">Handcrafted Haven</div>
            <nav>
              <ul className="flex space-x-6">
                <li>Home</li>
                <li>Products</li>
                <li>Sellers</li>
                <li>About</li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <button className="px-4 py-2 border border-electricBlue rounded">Login</button>
              <button className="px-4 py-2 bg-neonPink rounded">Register</button>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-backgroundDark text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© 2025 Handcrafted Haven. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}