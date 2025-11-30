"use client"

import type React from "react"
import { useState } from "react"
import styled from "styled-components"
import NextLink from "next/link"

const CalendarIconSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const LockIconSvg = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const ProblemStatements: React.FC = () => {
  const [activeTab, setActiveTab] = useState("track1")

  const tabs = [
    {
      title: "Track 1",
      value: "track1",
      content: (
        <TabContent>
          <TrackTitle>To Be Announced</TrackTitle>
          <TrackDescription>
            Problem statements will be revealed on December 4th, 2025 at 2:00 PM during the Grand Inauguration at ESB
            Seminar Hall 1.
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
          <TrackTitle>To Be Announced</TrackTitle>
          <TrackDescription>
            Problem statements will be revealed on December 4th, 2025 at 2:00 PM during the Grand Inauguration at ESB
            Seminar Hall 1.
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
          <TrackTitle>To Be Announced</TrackTitle>
          <TrackDescription>
            Problem statements will be revealed on December 4th, 2025 at 2:00 PM during the Grand Inauguration at ESB
            Seminar Hall 1.
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
          <TrackTitle>To Be Announced</TrackTitle>
          <TrackDescription>
            Problem statements will be revealed on December 4th, 2025 at 2:00 PM during the Grand Inauguration at ESB
            Seminar Hall 1.
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
          <TrackTitle>To Be Announced</TrackTitle>
          <TrackDescription>
            Problem statements will be revealed on December 4th, 2025 at 2:00 PM during the Grand Inauguration at ESB
            Seminar Hall 1.
          </TrackDescription>
          <CountdownBadge>Coming Soon</CountdownBadge>
        </TabContent>
      ),
    },
  ]

  return (
    <SectionWrapper>
      <ContentContainer>
        <HeadingContainer>
          <MainHeading>Problem Statements</MainHeading>
          <Subheading>Choose your track and innovate</Subheading>
        </HeadingContainer>

        <AnnouncementBanner>
          <BannerIcon>
            <CalendarIconSvg />
          </BannerIcon>
          <BannerActionWrapper>
            <BannerTextWrapper>
              <BannerTitle>Mark Your Calendar</BannerTitle>
              <BannerDescription>
                Problem statements will be released on <strong>December 4th, 2025 at 2:00 PM</strong>
              </BannerDescription>
              <BannerVenue>Join us at ESB Seminar Hall 1 at 2:30 PM for the Grand Inauguration</BannerVenue>
            </BannerTextWrapper>
            <RegisterButtonInBanner href="/register">
              Register Now
              <ArrowIcon />
            </RegisterButtonInBanner>
          </BannerActionWrapper>
        </AnnouncementBanner>

        <TabsSection>
          <TabNavigation>
            {tabs.map((tab) => (
              <TabButton key={tab.value} data-active={activeTab === tab.value} onClick={() => setActiveTab(tab.value)}>
                {tab.title}
              </TabButton>
            ))}
          </TabNavigation>

          <TabContentContainer>
            {tabs.map((tab) => (
              <TabContentWrapper key={tab.value} data-active={activeTab === tab.value}>
                {tab.content}
              </TabContentWrapper>
            ))}
          </TabContentContainer>
        </TabsSection>
      </ContentContainer>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  width: 100%;
  background: transparent;
  position: relative;
  overflow: hidden;
  padding: 80px 24px;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 140px;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 40px;
  }
`

const HeadingContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subheading = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const AnnouncementBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 24px;
    gap: 20px;
  }
`

const BannerIcon = styled.div`
  color: rgba(255, 255, 255, 0.8);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BannerActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

const BannerTextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const BannerTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`

const BannerDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;

  strong {
    color: rgba(255, 255, 255, 0.95);
  }
`

const BannerVenue = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  margin: 0;
`

  const RegisterButtonInBanner = styled(NextLink)`
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    font-size: 1rem;
    font-weight: 600;
    color: #0a0e27;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%);
    border: 1.5px solid rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    flex-shrink: 0;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.05);
      transition: left 0.4s ease;
    }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 32px rgba(255, 255, 255, 0.25);
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.95) 100%);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 0.95rem;
    width: 100%;
    justify-content: center;
  }
`

const TabsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: -20px;
`

const TabNavigation = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 12px;
  width: fit-content;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 12px;
  }
`

interface TabButtonProps {
  "data-active"?: boolean
}

const TabButton = styled.button<TabButtonProps>`
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${(props) => (props["data-active"] ? "#ffffff" : "rgba(255, 255, 255, 0.6)")};
  background: ${(props) => (props["data-active"] ? "rgba(255, 255, 255, 0.15)" : "transparent")};
  border: ${(props) => (props["data-active"] ? "1px solid rgba(255, 255, 255, 0.25)" : "1px solid transparent")};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    opacity: ${(props) => (props["data-active"] ? 1 : 0)};
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    color: #ffffff;
    background: ${(props) => (props["data-active"] ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.08)")};
    border-color: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.85rem;
  }
`

const TabContentContainer = styled.div`
  position: relative;
  min-height: 350px;

  @media (max-width: 768px) {
    min-height: 320px;
  }
`

interface TabContentWrapperProps {
  "data-active"?: boolean
}

const TabContentWrapper = styled.div<TabContentWrapperProps>`
  position: absolute;
  inset: 0;
  opacity: ${(props) => (props["data-active"] ? 1 : 0)};
  transform: ${(props) => (props["data-active"] ? "translateY(0)" : "translateY(20px)")};
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: ${(props) => (props["data-active"] ? "auto" : "none")};
`

const TabContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding: 48px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    padding: 32px 24px;
    min-height: 300px;
  }
`

const TrackTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const TrackDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  margin: 0;
  line-height: 1.6;
`

const CountdownBadge = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  padding: 10px 20px;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.15);
  }
`

export default ProblemStatements
