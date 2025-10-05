"use client";

import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <h1>Temas de exercícios práticos de aprendizados.</h1>

      <h1>Temas</h1>
      <ul>
        <li><Link href="/matematica">Matemática</Link></li>
        <li>Português</li>
      </ul>
    </>
  );
}
