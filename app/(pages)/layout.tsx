// app/(pages)/layout.tsx

import Link from "next/link";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <h1>Pratique!</h1>
        <h2>
          para fazer da melhor forma use um caderno para realizar os cálculos
          necessários.
        </h2>
      </header>
      <main>{children}</main>
      <footer>
        <Link href={"/"}>Página inicial</Link>
        <p>&copy; 2025 - Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
