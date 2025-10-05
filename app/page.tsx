"use client";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <header>
        <h1>Temas de exercícios práticos de aprendizados.</h1>
      </header>
      <main>
        <h1>Temas</h1>
        <ul>
          <li>
            <Link href="/Matematica">Matemática</Link>
          </li>
          <li>Português</li>
          <li>Ciencias</li>
        </ul>
      </main>
    </>
  );
}
