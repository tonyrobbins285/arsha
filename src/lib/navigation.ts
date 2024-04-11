export const generateMainNavRoutes = (pathname: string) => {
  return [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/services",
      label: "Services",
      active: pathname === "/services",
    },
    {
      href: "/porfolio",
      label: "Porfolio",
      active: pathname === "/porfolio",
    },
    {
      href: "/team",
      label: "Team",
      active: pathname === "/team",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ];
};

// "Home", "About", "Services", "Porfolio", "Team", "Contact";
