// src/components/templates/MainTemplate.tsx
import React, { ReactNode } from "react";
import { Navbar } from "../organisms/Navbar";
import { Footer } from "../organisms/Footer";

interface MainTemplateProps {
  children: ReactNode; // Ini untuk menerima elemen-elemen anak
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <div>
      {/* Navbar dan bagian lain di template */}
      <header className="sticky top-0 z-50 bg-background shadow-md">
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
