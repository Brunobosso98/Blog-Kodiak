import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X, Menu, Facebook, Instagram, MessageCircle, MapPin, Clock, Phone, Mail } from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

function Header() {
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
    { name: "Implementação", href: "https://kodiakerp.com.br/", sectionId: "implementation" },
    { name: "Módulos", href: "https://kodiakerp.com.br/", sectionId: "modules" },
    { name: "Benefícios", href: "https://kodiakerp.com.br/", sectionId: "benefits" },
    { name: "Blog", href: "#blog", sectionId: "#", className: "text-[#101075]" },
    { name: "Contato", href: "https://kodiakerp.com.br/", sectionId: "contact" }
  ];
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: "fixed top-0 z-50 w-full border-b backdrop-blur-md",
      style: { backgroundColor: "rgba(243, 236, 236, 0.5)" },
      children: /* @__PURE__ */ jsxs("nav", { className: "container mx-auto flex h-16 items-center justify-between px-4", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("div", { className: "relative h-16 w-16", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/kodiak-logo.png",
            alt: "Kodiak Logo",
            className: "object-contain h-full w-full"
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex md:gap-x-8", children: navigation.map((item) => /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: cn(
              "text-sm font-medium transition-colors duration-300",
              item.name === "Blog" ? "text-[#101075] font-semibold" : activeSection === item.sectionId ? "text-[#1B1AFF] font-semibold" : "text-gray-700 hover:text-[#101075]"
            ),
            onClick: (e) => {
              e.preventDefault();
              document.querySelector(item.href)?.scrollIntoView({
                behavior: "smooth"
              });
            },
            children: item.name
          },
          item.name
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("a", { target: "_blank", href: "https://conttrotech.autosky.cloud", children: /* @__PURE__ */ jsx(
            Button,
            {
              variant: "ghost",
              className: "hidden md:inline-flex hover:text-primary hover:bg-white/90 transition-all duration-300 border-2 border-[#101075] hover:scale-102",
              children: "Login"
            }
          ) }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/5519989386246?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kodiak%20ERP", target: "_blank", children: /* @__PURE__ */ jsx(
            Button,
            {
              className: "hidden md:inline-flex bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105",
              children: "Solicitar Demonstração"
            }
          ) }),
          /* @__PURE__ */ jsxs(Sheet, { open: isOpen, onOpenChange: setIsOpen, children: [
            /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, className: "md:hidden", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" }) }) }),
            /* @__PURE__ */ jsx(SheetContent, { side: "right", className: "w-[300px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 pt-10", children: [
              navigation.map((item) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.href,
                  className: cn(
                    "text-lg font-medium transition-colors duration-300",
                    activeSection === item.sectionId ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                  ),
                  onClick: (e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth"
                    });
                    setIsOpen(false);
                  },
                  children: item.name
                },
                item.name
              )),
              /* @__PURE__ */ jsx("a", { target: "_blank", href: "https://conttrotech.autosky.cloud", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "w-full justify-start hover:text-primary", children: "Login" }) }),
              /* @__PURE__ */ jsx("a", { href: "https://wa.me/5519989386246?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kodiak%20ERP", target: "_blank", children: /* @__PURE__ */ jsx(Button, { className: "w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105", children: "Solicitar Demo" }) })
            ] }) })
          ] })
        ] })
      ] })
    }
  );
}

function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative mt-20 bg-gradient-to-br from-primary/90 via-primary to-blue-900", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex md:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 md:mb-0 space-y-3", children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/kodiakfooter.png",
              alt: "Kodiak Logo",
              className: "object-contain h-[50px] w-[200px]"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-200 max-w-md", children: "Transformando a gestão industrial com soluções tecnológicas inovadoras para impulsionar o crescimento do seu negócio." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex space-x-6", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://www.facebook.com/conttrotechsistemas/",
                className: "text-gray-600 transition-colors duration-300 hover:text-blue-600",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Facebook" }),
                  /* @__PURE__ */ jsx(Facebook, { className: "h-6 w-6" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://www.instagram.com/kodiakerp/",
                className: "text-gray-600 transition-colors duration-300 hover:text-blue-600",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Instagram" }),
                  /* @__PURE__ */ jsx(Instagram, { className: "h-6 w-6" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://wa.me/5519989386246?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Kodiak%20ERP.",
                className: "text-gray-600 transition-colors duration-300 hover:text-[#25D366]",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "WhatsApp" }),
                  /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold uppercase text-white", children: "Navegação" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-gray-200 space-y-4", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Clientes" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Benefícios" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Módulos" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Contato" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold uppercase text-white", children: "Informações" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-gray-200 space-y-4", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "Rua da Imprensa, 189",
                  /* @__PURE__ */ jsx("br", {}),
                  "Itapira - SP"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                "Seg à Sex: 07:15 - 17:30"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold uppercase text-white", children: "Contato" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-gray-200 space-y-4", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: "(11) 9999-9999" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: "contato@kodiak.com.br" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: "São Paulo, SP" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "my-6 border-gray-200/20 sm:mx-auto" }),
      /* @__PURE__ */ jsxs("div", { className: "sm:flex sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-200 sm:text-center", children: "2025 Kodiak. Todos os direitos reservados." }),
        /* @__PURE__ */ jsxs("div", { className: "flex mt-4 space-x-5 sm:justify-center sm:mt-0", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-200 hover:text-white transition-colors", children: "Termos de Uso" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-200 hover:text-white transition-colors", children: "Privacidade" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" })
  ] });
}

export { Footer as F, Header as H };
