"use client";

import { motion, useCycle } from "framer-motion";
import React, { useEffect, useState } from "react";
import { SectionId } from "@/constants";
import { theme } from "@/styles";
import { mediaQueries, useDeviceSize } from "@/utils";
import {
  useScrollDirection,
  ScrollDirection,
} from "@/utils/hooks/useScrollDirection";
import styled from "styled-components";

import Logo from "../base/Logo";

import { NAVBAR_HEIGHT_PX, NavBarProps } from "./constants";
import Menu from "./menu";
import MobileMenu from "./mobileMenu";
import MobileMenuHamburger from "./mobileMenuHamburger";

export type TContainerProps = {
  isScrolledDown: boolean;
  isHidden: boolean;
  background: string;
};

const Navbar: React.FC<NavBarProps> = ({
  notMainPage,
  colour = theme.colors.text.dark.white,
}) => {
  const scrollDirection = useScrollDirection({
    initialDirection: ScrollDirection.DOWN,
    thresholdPixels: 10,
  });
  const isMediumOrSmaller = useDeviceSize("medium");

  const [isScrolledDown, setScrolledDown] = useState(false);
  const [mobileMenuOpen, toggleMobileMenuOpen] = useCycle(false, true);

  useEffect(() => {
    const scrollContainer = document.getElementById("container");
    const historyContainer = document.getElementById("about");
    /**
     * Change the appearance of the nav bar when a user
     * scrolls down the page.
     */
    const checkScrolledDown = () => {
      const historyBoundingRect = historyContainer?.getBoundingClientRect();
      const hasScrolledDown =
        (scrollContainer?.scrollTop || 0) > 0 &&
        (historyBoundingRect?.top || 0) - window.innerHeight <= 0;
      setScrolledDown(hasScrolledDown);
    };

    scrollContainer?.addEventListener("scroll", checkScrolledDown);
    checkScrolledDown();
    return () =>
      scrollContainer?.removeEventListener("scroll", checkScrolledDown);
  }, []);

  const isHidden = isScrolledDown && scrollDirection === ScrollDirection.DOWN;

  return isMediumOrSmaller !== undefined ? (
    <Container
      isHidden={isHidden}
      isScrolledDown={isScrolledDown}
      background="transparent"
    >
      <InnerContainer>
        <div
          style={{
            marginRight: "auto",
            marginLeft: isMediumOrSmaller ? "24px" : "0px",
            marginTop: 10,
            marginBottom: 10,
            alignSelf: "center",
          }}
        >
          <a href={`/#${SectionId.HERO}`} aria-label="Home">
            <Logo colour={colour} />
          </a>
        </div>

        {isMediumOrSmaller ? (
          <motion.div
            animate={mobileMenuOpen ? "open" : "closed"}
            style={{ zIndex: 10, margin: "auto 24px auto 0" }}
          >
            <MobileMenuHamburger
              toggle={() => toggleMobileMenuOpen()}
              colour={colour}
            />
          </motion.div>
        ) : (
          <Menu notMainPage={notMainPage} colour={colour} />
        )}

        {isMediumOrSmaller && (
          <MobileMenu
            isHidden={isHidden}
            isOpen={mobileMenuOpen}
            toggleIsOpen={toggleMobileMenuOpen}
          />
        )}
      </InnerContainer>
    </Container>
  ) : null;
};

const Container = styled.nav.attrs<TContainerProps>(
  ({ isScrolledDown, background, isHidden }) => ({
    style: {
      backgroundColor: isScrolledDown ? background : "transparent",
      transform: isHidden
        ? `translateY(-${NAVBAR_HEIGHT_PX}px)`
        : "translateY(0)",
    },
  })
)<TContainerProps>`
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;

  z-index: 99;
  backdrop-filter: blur(30px);

  transition: background-color 250ms, transform 250ms;
`;

const InnerContainer = styled.div`
  max-width: 1202px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1202px) {
    margin: 0px 32px;
  }

  ${mediaQueries.tablet} {
    margin: auto;
  }
`;

export default Navbar;

