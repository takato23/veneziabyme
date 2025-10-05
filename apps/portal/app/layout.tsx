import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venezia By Me Portal",
  description:
    "Plataforma corporativa para gestionar heladerías multi-país: ventas, producción y compliance fiscal."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-sand text-ink antialiased">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-16">
          <header className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-primary">
              Venezia By Me
            </p>
            <h1 className="text-4xl font-semibold text-ink">
              Control maestro para cadenas de heladerías
            </h1>
            <p className="max-w-2xl text-base text-muted">
              Orquestamos ventas, producción y cumplimiento fiscal en Argentina, Chile y Brasil con
              una plataforma SaaS segura y preparada para escalar.
            </p>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="text-xs text-muted">
            © {new Date().getFullYear()} Venezia By Me. Todos los derechos reservados.
          </footer>
        </div>
      </body>
    </html>
  );
}
