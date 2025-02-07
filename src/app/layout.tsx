import type { Metadata } from "next";
import "@/style/globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export const metadata: Metadata = {
  title: "Portfolio Roland Artmeladze",
  description: "Personal Portfolio Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scroll-hidden antialiased">
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}