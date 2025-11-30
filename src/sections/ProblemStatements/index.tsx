"use client";

import React from "react";
import styled from "styled-components";
import NextLink from "next/link";
import { ContentWrapper, SectionWrapper } from "@/components/base";
import { Heading1, Heading2, LargeBodyMedium, theme } from "@/styles";
import { mediaQueries } from "@/utils/responsive";
import { Tabs } from "@/components/ui/tabs";
import { SectionId } from "@/constants/section";

const CalendarIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const LockIconSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const ProblemStatements: React.FC = () => {
  const tabs = [
    {
      title: "Track 1",
      value: "track1",
      content: (
        <TabContent>
          <TrackTitle><LockIconSvg /> To Be Announced</TrackTitle>
          <TrackDescription>
            Problem statements will be revealed on December 4th, 2025 at 2:00 PM
            during the Grand Inauguration at ESB Seminar Hall 1.
          </TrackDescription>
          <CountdownBadge>Coming Soon</CountdownBadge>
        </TabContent>
      ),
    },
    {
      title: "Track 2",
      value: "track2",
      content: (
        <TabContent>
          <TrackTitle><LockIconSvg /> To Be Announced</TrackTitle>
          <TrackDescription>
            Problem statements will be revealed on December 4th, 2025 at 2:00 PM
            during the Grand Inauguration at ESB Seminar Hall 1.
          </TrackDescription>
          <CountdownBadge>Coming Soon</CountdownBadge>
        </TabContent>
      ),
    },
    {
      title: "Track 3",
      value: "track3",
      content: (
        <TabContent>
          <TrackTitle><LockIconSvg /> To Be Announced</TrackTitle>
          <TrackDescription>
            Problem statements will be revealed on December 4th, 2025 at 2:00 PM
            during the Grand Inauguration at ESB Seminar Hall 1.
          </TrackDescription>
          <CountdownBadge>Coming Soon</CountdownBadge>
        </TabContent>
      ),
    },
    {
      title: "Track 4",
      value: "track4",
      content: (
        <TabContent>
          <TrackTitle><LockIconSvg /> To Be Announced</TrackTitle>
          <TrackDescription>
            Problem statements will be revealed on December 4th, 2025 at 2:00 PM
            during the Grand Inauguration at ESB Seminar Hall 1.
          </TrackDescription>
          <CountdownBadge>Coming Soon</CountdownBadge>
        </TabContent>
      ),
    },
    {
      title: "Open Innovation",
      value: "open",
      content: (
        <TabContent>
          <TrackTitle><LockIconSvg /> To Be Announced</TrackTitle>
          <TrackDescription>
            Problem statements will be revealed on December 4th, 2025 at 2:00 PM
            during the Grand Inauguration at ESB Seminar Hall 1.
          </TrackDescription>
          <CountdownBadge>Coming Soon</CountdownBadge>
        </TabContent>
      ),
    },
  ];

  return (
    <SectionWrapper id={SectionId.PROBLEM_STATEMENTS}>
      <StyledContentWrapper>
        <HeadingContainer>
          <Heading1>Problem Statements</Heading1>
          <StyledSubheading>Choose your track and innovate!</StyledSubheading>
        </HeadingContainer>

        <AnnouncementBanner>
          <BannerIcon><CalendarIconSvg /></BannerIcon>
          <BannerText>
            <BannerTitle>Mark Your Calendar!</BannerTitle>
            <BannerDescription>
              Problem statements will be released on <strong>December 4th, 2025 at 2:00 PM</strong>
            </BannerDescription>
            <BannerVenue>
              Join us at ESB Seminar Hall 1 at 2:30 PM for the Grand Inauguration!
            </BannerVenue>
          </BannerText>
        </AnnouncementBanner>

        <RegisterButtonContainer>
          <RegisterButton href="/register">
            Register Now
            <ArrowIcon />
          </RegisterButton>
        </RegisterButtonContainer>

        <TabsContainer>
          <Tabs
            tabs={tabs}
            containerClassName="justify-center bg-white/10 backdrop-blur-sm rounded-full p-2"
            activeTabClassName="bg-gradient-to-r from-purple-600 to-blue-600"
            tabClassName="text-white font-medium"
            contentClassName="mt-8"
          />
        </TabsContainer>
      </StyledContentWrapper>
    </SectionWrapper>
  );
};

const StyledContentWrapper = styled(ContentWrapper)`
  width: 100%;
  max-width: 1200px;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  ${mediaQueries.medium} {
    padding: 60px 24px;
    gap: 32px;
  }
`;

const HeadingContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledSubheading = styled(Heading2)`
  color: ${theme.colors.primary.purple};
`;

const AnnouncementBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border: 2px solid rgba(102, 126, 234, 0.5);
  border-radius: 20px;
  padding: 32px;
  max-width: 700px;
  width: 100%;

  ${mediaQueries.medium} {
    flex-direction: column;
    text-align: center;
    padding: 24px;
    gap: 16px;
  }
`;

const BannerIcon = styled.div`
  font-size: 48px;
  flex-shrink: 0;

  ${mediaQueries.medium} {
    font-size: 40px;
  }
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BannerTitle = styled.h3`
  font-family: "Castledown", sans-serif;
  font-size: 24px;
  color: white;
  margin: 0;

  ${mediaQueries.medium} {
    font-size: 20px;
  }
`;

const BannerDescription = styled(LargeBodyMedium)`
  color: rgba(255, 255, 255, 0.9);
`;

const BannerVenue = styled.p`
  color: ${theme.colors.primary.yellow};
  font-size: 14px;
  margin: 0;
`;

const TabsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  min-height: 400px;

  [perspective\\:1000px] {
    perspective: 1000px;
  }
`;

const TabContent = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  min-height: 300px;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);

  ${mediaQueries.medium} {
    padding: 32px 24px;
    min-height: 250px;
  }
`;

const TrackTitle = styled.h3`
  font-family: "Castledown", sans-serif;
  font-size: 32px;
  color: white;
  margin: 0;

  ${mediaQueries.medium} {
    font-size: 24px;
  }
`;

const TrackDescription = styled(LargeBodyMedium)`
  color: rgba(255, 255, 255, 0.9);
  max-width: 500px;
`;

const CountdownBadge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 12px 24px;
  border-radius: 100px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const RegisterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const RegisterButton = styled(NextLink)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #b91c1c 100%);
  background-size: 200% 200%;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background-position: 100% 50%;
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(220, 38, 38, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  ${mediaQueries.medium} {
    padding: 16px 32px;
    font-size: 1rem;
  }
`;

export default ProblemStatements;
