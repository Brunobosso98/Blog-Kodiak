import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { HiMenu } from "react-icons/hi";
import { useState, useEffect } from "react";
import { cn } from '../lib/utils';


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Implementação", href: "https://kodiakerp.com.br/", sectionId: "implementation"},
    { name: "Módulos", href: "https://kodiakerp.com.br/", sectionId: "modules" },
    { name: "Benefícios", href: "https://kodiakerp.com.br/", sectionId: "benefits" },
    { name: "Blog", href: "#blog", sectionId: "#", className: 'text-[#101075]' },
    { name: "Contato", href: "https://kodiakerp.com.br/", sectionId: "contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b backdrop-blur-md"
            style={{ backgroundColor: "rgba(243, 236, 236, 0.5)"}}>
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <div className="relative h-16 w-16">
            <img
              src="/kodiak-logo.png"
              alt="Kodiak Logo"
              className="object-contain h-full w-full"
            />
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                item.name === "Blog" 
                  ? "text-[#101075] font-semibold"
                  : activeSection === item.sectionId
                    ? "text-[#1B1AFF] font-semibold"
                    : "text-gray-700 hover:text-[#101075]"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a target="_blank" href="https://conttrotech.autosky.cloud">
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex hover:text-primary hover:bg-white/90 transition-all duration-300 border-2 border-[#101075] hover:scale-102"
            >
              Login
            </Button>
          </a>
          <a href="https://wa.me/5519989386246?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kodiak%20ERP" target="_blank">
          <Button 
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Solicitar Demonstração
          </Button>
          </a>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <HiMenu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 pt-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors duration-300",
                      activeSection === item.sectionId
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth"
                      });
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <a target="_blank" href="https://conttrotech.autosky.cloud">
                <Button variant="ghost" className="w-full justify-start hover:text-primary">
                  Login
                </Button>
                </a>
                <a href="https://wa.me/5519989386246?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kodiak%20ERP" target="_blank">
                <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                  Solicitar Demo
                </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
