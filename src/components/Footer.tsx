"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 text-center text-sm text-muted-foreground">
      <div className="container px-4 md:px-6">
        <p>&copy; {new Date().getFullYear()} PPDB SMA/SMK Unitomo Surabaya. All rights reserved.</p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;