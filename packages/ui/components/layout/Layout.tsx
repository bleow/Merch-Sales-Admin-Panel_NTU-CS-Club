import { NavBar } from "../navbar";
import { Footer } from "../footer";
import React from "react";
import { NavBarProps, FooterProps } from "ui";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  navbarProps: NavBarProps;
  footerProps: FooterProps;
  children: React.ReactNode;
}

export const Layout = ({ navbarProps, footerProps, children }: LayoutProps) => {
  return (
    <>
      <header>
        <title>NTU School of Computer Science & Engineering</title>
        <link rel="icon" href="/"></link>
      </header>

      <NavBar {...navbarProps} />
      <main>
        <Box bg="brand.blackAlpha.light" minH="91.7vh">{children}</Box>
      </main>
      <Footer {...footerProps} />
    </>
  );
};
