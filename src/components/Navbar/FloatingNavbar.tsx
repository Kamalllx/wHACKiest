"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconInfoCircle,
  IconTrophy,
  IconQuestionMark,
  IconCode,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { SectionId } from "@/constants";

const FloatingNavbar: React.FC = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-300" />
      ),
      href: `#${SectionId.HERO}`,
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-300" />
      ),
      href: `#${SectionId.ABOUT}`,
    },
    {
      title: "Prizes",
      icon: (
        <IconTrophy className="h-full w-full text-neutral-300" />
      ),
      href: "#prizes",
    },
    {
      title: "Problem Statements",
      icon: (
        <IconCode className="h-full w-full text-neutral-300" />
      ),
      href: "#problem-statements",
    },
    {
      title: "FAQ",
      icon: (
        <IconQuestionMark className="h-full w-full text-neutral-300" />
      ),
      href: `#${SectionId.FAQ}`,
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-300" />
      ),
      href: "https://instagram.com/coderit",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-300" />
      ),
      href: "https://linkedin.com/company/coderit",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-300" />
      ),
      href: "mailto:coderit@ritchennai.edu.in",
    },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex items-center justify-center px-4">
      <FloatingDock
        items={links}
        desktopClassName="bg-neutral-900/90 backdrop-blur-md border border-neutral-700/50"
        mobileClassName="fixed bottom-6 right-6"
      />
    </div>
  );
};

export default FloatingNavbar;
