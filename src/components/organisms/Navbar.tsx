"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineLayout, AiOutlineMenu } from "react-icons/ai";
import { DesktopMenu } from "../molecules/DesktopMenu";
import { MobileMenu } from "../molecules/MobileMenu";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: "home", path: "/" },
    { name: "works", path: "/projects" },
    { name: "about-me", path: "/about-me" },
    { name: "contact", path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`sticky top-0 z-50 bg-background transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between py-6 px-5">
          <div className="flex items-center">
            <AiOutlineLayout className="text-3xl" />
            <h1 className="md:text-3xl font-bold ml-2">Portfolio</h1>
          </div>

          <DesktopMenu
            menuItems={menuItems}
            pathname={pathname}
            handleNavigation={handleNavigation}
          />

          <div className="md:hidden flex items-center">
            <AiOutlineMenu
              className="text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          {isMenuOpen && (
            <MobileMenu
              menuItems={menuItems}
              pathname={pathname}
              handleNavigation={handleNavigation}
            />
          )}
        </div>
      </div>
    </div>
  );
};
