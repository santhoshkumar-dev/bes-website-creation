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
} from "@heroui/react";

const navItems = ["Home", "Products", "About", "Contact"];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      height={92}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left: Logo */}
      <NavbarBrand>
        <Link href="#">
          <div className="w-16">
            <img src="logo.png" alt="Logo" />
          </div>
        </Link>
      </NavbarBrand>

      {/* Desktop Nav */}
      <NavbarContent justify="end" className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <NavbarItem key={item}>
            <Link href="#" color="foreground">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Toggle */}
      <NavbarMenuToggle className="md:hidden" />

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6 pb-6">
        {navItems.map((item) => (
          <NavbarMenuItem key={item}>
            <Link
              href="#"
              className="w-full text-default-600"
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
