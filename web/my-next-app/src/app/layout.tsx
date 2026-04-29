import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900">
        <nav className="bg-zinc-500 shadow-md">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Ankit Dev</h1>

            <div className="flex gap-6 font-medium">
              <Link href="/" className="hover:text-emerald-400 transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-emerald-400 transition">
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-emerald-400 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
