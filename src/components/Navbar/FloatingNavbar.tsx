"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconTrophy,
  IconCalendarEvent,
  IconCode,
  IconInfoCircle,
  IconChartBar,
  IconHeart,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconUserPlus,
} from "@tabler/icons-react";
import { SectionId } from "@/constants";

const FloatingNavbar: React.FC = () => {
  const links = [
    {
      title: "Prizes",
      icon: <IconTrophy className="h-full w-full text-neutral-300" />,
      href: `#${SectionId.PRIZES}`,
    },
    {
      title: "Timeline",
      icon: <IconCalendarEvent className="h-full w-full text-neutral-300" />,
      href: `#${SectionId.TIMELINE}`,
    },
    {
      title: "PS",
      icon: <IconCode className="h-full w-full text-neutral-300" />,
      href: `#${SectionId.PROBLEM_STATEMENTS}`,
    },
    {
      title: "About",
      icon: <IconInfoCircle className="h-full w-full text-neutral-300" />,
      href: `#${SectionId.ABOUT}`,
      hideOnMobile: true,
    },
    {
      title: "Stats",
      icon: <IconChartBar className="h-full w-full text-neutral-300" />,
      href: `#${SectionId.STATS}`,
    },
    {
      title: "Sponsors",
      icon: <IconHeart className="h-full w-full text-neutral-300" />,
      href: `#${SectionId.TESTIMONIALS}`,
    },
    {
      title: "Register",
      icon: <IconUserPlus className="h-full w-full text-green-400" />,
      href: "/register",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-neutral-300" />,
      href: "https://instagram.com/code_rit",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
      href: "https://www.linkedin.com/company/coderitclub",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-neutral-300" />,
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
