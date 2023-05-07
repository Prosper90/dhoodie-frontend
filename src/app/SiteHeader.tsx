"use client";

import React from "react";
import { usePathname } from "next/navigation";
import HeaderLogged from "@/components/Header/HeaderLogged";
import Header from "@/components/Header/Header";

const SiteHeader = () => {
  let pathname = usePathname();

  return  <HeaderLogged />;
};

export default SiteHeader;
