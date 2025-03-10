import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative overflow-hidden">
        {/* <InteractiveBackground /> */}
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
