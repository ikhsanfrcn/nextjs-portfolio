// src/components/templates/MainTemplate.tsx
import React, { ReactNode } from "react";
import { Navbar } from "../organisms/Navbar";
import { Footer } from "../organisms/Footer";

interface MainTemplateProps {
  children: ReactNode; // Ini untuk menerima elemen-elemen anak
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <div className="mx-auto">
      {/* Navbar dan bagian lain di template */}
      <header>
        <Navbar />
      </header>

      {/* Konten halaman */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
