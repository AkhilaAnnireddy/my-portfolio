import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative overflow-hidden">
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
