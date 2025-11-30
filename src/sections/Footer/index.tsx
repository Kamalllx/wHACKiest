import React, { useState } from "react";
import { StarLeft, StarRight } from "@/assets/img";
import { ContentWrapper, SectionWrapper } from "@/components/base";
import { SectionId } from "@/constants";
import { LargeBodyBold } from "@/styles";
import styled from "styled-components";

import OrganizerCarousel from "./carousel";
import { Organizer } from "./constants";

const Footer: React.FC = () => {
  const [selectedOrganizer, setSelectedOrganizer] = useState<Organizer | null>(
    null
  );

  const handleOnLeave = () => {
    setSelectedOrganizer(null);
  };

  const handleOnHover = (organizer: Organizer) => {
    setSelectedOrganizer(organizer);
  };

  return (
    <SectionWrapper
      onClick={() => {
        if (selectedOrganizer) {
          setSelectedOrganizer(null);
        }
      }}
      id={SectionId.FOOTER}
      
    >
      <ContentWrapper>
        <HeadingContainer>
          <StarContainer>
            <img
              loading="lazy"
              src={StarLeft}
              className="star-left"
              alt="star-left"
            />
            <img
              loading="lazy"
              src={StarRight}
              className="star-right"
              alt="star-right"
            />
          </StarContainer>

          <LargeBodyBold>
            Made with{" "}
            <span role="img" aria-label="blue heart emoji">
              💙
            </span>{" "}
            by <ConditionalBreak /> CodeRIT & Dept of CSE{" "}
          </LargeBodyBold>
          <TeamMemberNameContainer>
            {selectedOrganizer ? (
              <LargeBodyBold>
                {selectedOrganizer.name}, {selectedOrganizer.team}{" "}
                {selectedOrganizer.emoji ? (
                  <span role="img" aria-label="Organizer's favourite emoji">
                    {selectedOrganizer.emoji}
                  </span>
                ) : null}
              </LargeBodyBold>
            ) : null}
          </TeamMemberNameContainer>
        </HeadingContainer>
      </ContentWrapper>

      <ContentWrapper>
        <BottomFooterContainer>
          <Divider />
          <FooterLinks>
            <div className="footer-group">
              <a
                className="footer-link"
                href="/code-of-conduct"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code of Conduct
              </a>
              <a
                className="footer-link"
                href="/travel-guidelines"
                target="_blank"
                rel="noopener noreferrer"
              >
                Travel Guidelines
              </a>
              <a
                className="footer-link"
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </div>
            <div className="footer-group">
              <p className="footer-link">Copyright © CodeRIT, 2025</p>
            </div>
          </FooterLinks>
        </BottomFooterContainer>
      </ContentWrapper>
    </SectionWrapper>
  );
};

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
  margin-top: 24px;
  gap: 8px;

  position: relative;

  p {
    text-align: center;
  }
`;

const StarContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 480px;
  padding-right: 152px;
  pointer-events: none;
  user-select: none;

  @media (max-width: 1280px) {
    padding-right: 100px;
  }

  @media (max-width: 1024px) {
    gap: 320px;
    padding-right: 80px;
  }

  @media (max-width: 834px) {
    padding-right: 65px;
    gap: 30vw;
  }

  @media (max-width: 768px) {
    padding-right: 55px;

    gap: 30vw;
  }

  .star-left {
    left: 0;
    padding-top: 140px;
    width: 480px;

    @media (max-width: 1280px) {
      padding-top: 100px;
      width: 360px;
    }

    @media (max-width: 1024px) {
      padding-top: 60px;
      width: 240px;
    }

    @media (max-width: 768px) {
      padding-top: 0px;
      width: 180px;
    }
  }

  .star-right {
    right: 10%; // this needs to change for responsiveness
    padding-bottom: 140px;
    width: 360px;

    @media (max-width: 1280px) {
      padding-bottom: 100px;
      width: 270px;
    }

    @media (max-width: 1024px) {
      padding-bottom: 80px;
      width: 180px;
    }

    @media (max-width: 768px) {
      padding-bottom: 100px;
      width: 140px;
    }
  }
`;

const ConditionalBreak = styled.br`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const TeamMemberNameContainer = styled.div`
  height: 28px;
`;

const BottomFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 64px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text.dark.gray};

  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterLinks = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  margin: 36px 0;
  justify-content: space-between;

  .footer-group {
    display: flex;
    gap: 16px;
  }

  .footer-link {
    color: ${({ theme }) => theme.colors.text.dark.white};
    text-decoration: none;
    padding: 0px;
    margin: 0px;
    font-family: "Satoshi";
    font-size: 16px;
    font-weight: 400;
  }

  a {
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.text.dark.gray};
    }
  }

  @media (max-width: 1280px) {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin: 64px 0;

    .footer-group {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Footer;

