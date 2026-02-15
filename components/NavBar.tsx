"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { ChevronDown } from "lucide-react";

const serviceItems = [
  { name: "All Services", href: "/services" },
  { name: "ISO Management Systems", href: "/services/iso" },
  { name: "API Compliance & Technical", href: "/services/api-q1" },
  { name: "NDT Services", href: "/services/ndt" },
  { name: "Welding Services", href: "/services/welding" },
  { name: "Digital Systems", href: "/services/digital" },
  { name: "Inspection & Audit", href: "/services/inspection" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Industries", href: "/industries" },
  { name: "Why BESCERT", href: "/why-bes" },
  { name: "Global Presence", href: "/global-presence" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/* Left: Logo */}
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 md:w-12">
            <img src="/logo.png" alt="BESCERT Logo" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-bes-primary">BESCERT</span>
            <span className="text-xs text-gray-600">Technical Services</span>
          </div>
        </Link>
      </NavbarBrand>

      {/* Desktop Nav */}
      <NavbarContent justify="end" className="hidden md:flex gap-6">
        {navItems.map((item) =>
          item.hasDropdown ? (
            <Dropdown key={item.name}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent font-medium text-foreground text-[1rem]"
                    endContent={<ChevronDown className="w-4 h-4" />}
                    radius="sm"
                    variant="light"
                  >
                    {item.name}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Services"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {serviceItems.map((service) => (
                  <DropdownItem
                    key={service.name}
                    href={service.href}
                    className="py-2"
                  >
                    {service.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem key={item.name}>
              <Link href={item.href} color="foreground" className="font-medium">
                {item.name}
              </Link>
            </NavbarItem>
          ),
        )}
      </NavbarContent>

      {/* Mobile Toggle */}
      <NavbarMenuToggle className="md:hidden" />

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6 pb-6">
        {navItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            {item.hasDropdown ? (
              <div className="space-y-2">
                <div className="font-semibold text-default-700">
                  {item.name}
                </div>
                <div className="pl-4 space-y-2">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-default-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={item.href}
                className="w-full text-default-600"
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
