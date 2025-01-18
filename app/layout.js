import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EPIESSCAPADES",
  description: "Welcome to EpiEscapades! Your ultimate platform for discovering and booking thrilling adventures. From hiking and road trips to unique travel experiences, we partner with top organizations to bring you a diverse range of events. Stay updated with our real-time feed of exciting activities and join our vibrant community of adventurers. Embark on your next epic escapade today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
