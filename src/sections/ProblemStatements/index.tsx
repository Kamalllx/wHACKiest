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

import { SectionId } from "@/constants"

// Icon components for each track
const PlaneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>
)

const ShopIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const MediaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
    <line x1="7" y1="2" x2="7" y2="22"/>
    <line x1="17" y1="2" x2="17" y2="22"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <line x1="2" y1="7" x2="7" y2="7"/>
    <line x1="2" y1="17" x2="7" y2="17"/>
    <line x1="17" y1="17" x2="22" y2="17"/>
    <line x1="17" y1="7" x2="22" y2="7"/>
  </svg>
)

const SpaceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </svg>
)

const ProblemStatements: React.FC = () => {
  const [activeTab, setActiveTab] = useState("track1")

  const tabs = [
    {
      title: "PS 1",
      value: "track1",
      icon: <PlaneIcon />,
      color: "#10b981",
      content: (
        <TabContent data-color="#10b981">
          <TrackIcon style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}><PlaneIcon /></TrackIcon>
          <TrackTitle>Endless Trail</TrackTitle>
          <TrackDomain style={{ color: '#10b981' }}>Domain: Tourism & Hospitality</TrackDomain>
          <TrackPartner>Partner: Hampi Labs</TrackPartner>
          <TrackDescription>
            Propose any innovative idea that reimagines the future of travel, hospitality or exploration.
          </TrackDescription>
          <TrackDetails>
            Build for trip planning, accessibility, safety, sustainability, cultural discovery, local business engagement, hospitality experiences, or any aspect of travel that can be improved with technology.
          </TrackDetails>
          <TrackFormats>
            <FormatTag>Apps</FormatTag>
            <FormatTag>Maps</FormatTag>
            <FormatTag>Assistants</FormatTag>
            <FormatTag>Web Tools</FormatTag>
            <FormatTag>AR Experiences</FormatTag>
          </TrackFormats>
        </TabContent>
      ),
    },
    {
      title: "PS 2",
      value: "track2",
      icon: <ShopIcon />,
      color: "#f59e0b",
      content: (
        <TabContent data-color="#f59e0b">
          <TrackIcon style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}><ShopIcon /></TrackIcon>
          <TrackTitle>Build for Bharat</TrackTitle>
          <TrackDomain style={{ color: '#f59e0b' }}>Domain: FinTech for Small Businesses</TrackDomain>
          <TrackPartner>Partner: Aspire Finance</TrackPartner>
          <TrackDescription>
            Build solutions that help India's shopkeepers operate smoother, sell smarter, or grow faster.
          </TrackDescription>
          <TrackDetails>
            Address challenges faced by small retailers or sole proprietors—managing daily operations, accessing credit, handling finances, communicating with customers, or improving digital presence.
          </TrackDetails>
          <TrackFormats>
            <FormatTag>Mobile App</FormatTag>
            <FormatTag>WhatsApp Tool</FormatTag>
            <FormatTag>Webapp</FormatTag>
            <FormatTag>Workflow Automation</FormatTag>
            <FormatTag>AI Tools</FormatTag>
          </TrackFormats>
        </TabContent>
      ),
    },
    {
      title: "PS 3",
      value: "track3",
      icon: <MediaIcon />,
      color: "#8b5cf6",
      content: (
        <TabContent data-color="#8b5cf6">
          <TrackIcon style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' }}><MediaIcon /></TrackIcon>
          <TrackTitle>Beyond the Frame</TrackTitle>
          <TrackDomain style={{ color: '#8b5cf6' }}>Domain: Media & Content Tech</TrackDomain>
          <TrackDescription>
            Propose any technology-driven innovation that reimagines the future of media and content.
          </TrackDescription>
          <TrackDetails>
            Work on content workflows, creator tools, recommendation systems, immersive media, digital integrity, analytics, collaboration tools, or anything that reimagines media for modern audiences.
          </TrackDetails>
          <TrackFormats>
            <FormatTag>Mobile Apps</FormatTag>
            <FormatTag>Web Apps</FormatTag>
            <FormatTag>AI Tools</FormatTag>
            <FormatTag>Creative Platforms</FormatTag>
          </TrackFormats>
        </TabContent>
      ),
    },
    {
      title: "PS 4",
      value: "track4",
      icon: <SpaceIcon />,
      color: "#06b6d4",
      content: (
        <TabContent data-color="#06b6d4">
          <TrackIcon style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}><SpaceIcon /></TrackIcon>
          <TrackTitle>Infinite Horizons</TrackTitle>
          <TrackDomain style={{ color: '#06b6d4' }}>Domain: Space Tech</TrackDomain>
          <TrackDescription>
            Propose innovations inspired by space technology, exploration, or space science.
          </TrackDescription>
          <TrackDetails>
            Work with space data, observation tools, education, visualizations, simulations, communication systems, or any concept that connects Earth and beyond.
          </TrackDetails>
          <TrackFormats>
            <FormatTag>Apps</FormatTag>
            <FormatTag>Dashboards</FormatTag>
            <FormatTag>AR/VR</FormatTag>
            <FormatTag>Web Tools</FormatTag>
            <FormatTag>Creative Interfaces</FormatTag>
          </TrackFormats>
        </TabContent>
      ),
    },
  ]

  return (
    <SectionWrapper id={SectionId.PROBLEM_STATEMENTS}>
      <ContentContainer>
        <HeadingContainer>
          <MainHeading>Problem Statements</MainHeading>
          <Subheading>Choose any ONE domain and build your idea around the theme</Subheading>
        </HeadingContainer>

        <AnnouncementBanner>
          <BannerIcon>
            <CalendarIconSvg />
          </BannerIcon>
          <BannerActionWrapper>
            <BannerTextWrapper>
              <BannerTitle>Your Innovation Journey Begins Now!</BannerTitle>
              <BannerDescription>
                <strong>wHACKiest 2025</strong> – Official Problem Statements Released
              </BannerDescription>
              <BannerVenue>Pick your track and start building your solution</BannerVenue>
            </BannerTextWrapper>
            <RegisterButtonInBanner href="https://forms.gle/DMGyjfBrdneJcXXN9" target="_blank" rel="noopener noreferrer">
              Submit Ideathon Ideas
              <ArrowIcon />
            </RegisterButtonInBanner>
          </BannerActionWrapper>
        </AnnouncementBanner>

        <TabsSection>
          <TabNavigation>
            {tabs.map((tab) => (
              <TabButton key={tab.value} data-active={activeTab === tab.value} onClick={() => setActiveTab(tab.value)} style={{ '--tab-color': tab.color } as React.CSSProperties}>
                <span className="tab-icon">{tab.icon}</span>
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

  const RegisterButtonInBanner = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 28px;
    font-size: 0.95rem;
    font-weight: 600;
    color: #0a0e27;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    flex-shrink: 0;
    color: white;
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.15);
      transition: left 0.4s ease;
    }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(16, 185, 129, 0.4);
    background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  }

  @media (max-width: 768px) {
    padding: 14px 24px;
    font-size: 0.9rem;
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
  font-weight: 600;
  color: ${(props) => (props["data-active"] ? "#ffffff" : "rgba(255, 255, 255, 0.6)")};
  background: ${(props) => (props["data-active"] ? "rgba(255, 255, 255, 0.15)" : "transparent")};
  border: ${(props) => (props["data-active"] ? "1px solid rgba(255, 255, 255, 0.25)" : "1px solid transparent")};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  .tab-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props["data-active"] ? 1 : 0.5)};
    transition: opacity 0.3s ease;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    opacity: ${(props) => (props["data-active"] ? 1 : 0)};
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    color: #ffffff;
    background: ${(props) => (props["data-active"] ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.08)")};
    border-color: rgba(255, 255, 255, 0.15);
    
    .tab-icon {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.85rem;
    
    .tab-icon svg {
      width: 16px;
      height: 16px;
    }
  }
`

const TabContentContainer = styled.div`
  position: relative;
  min-height: 480px;

  @media (max-width: 768px) {
    min-height: 550px;
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
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    padding: 28px 20px;
    gap: 12px;
  }
`

const TrackIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  
  svg {
    width: 32px;
    height: 32px;
  }
  
  @media (max-width: 768px) {
    width: 52px;
    height: 52px;
    
    svg {
      width: 26px;
      height: 26px;
    }
  }
`

const TrackTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

const TrackDomain = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.02em;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`

const TrackPartner = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 215, 0, 0.95);
  font-weight: 600;
  margin: 0;
  padding: 8px 20px;
  background: rgba(255, 215, 0, 0.12);
  border-radius: 24px;
  border: 1px solid rgba(255, 215, 0, 0.25);
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 14px;
  }
`

const TrackDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 8px 0 0;
  line-height: 1.6;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`

const TrackDetails = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 650px;
  margin: 0;
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`

const TrackFormats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 8px;
`

const FormatTag = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 5px 10px;
  }
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
