import React from "react";
import { useInView } from "react-intersection-observer";
import { Cloud3, Cloud4, lastPaper, statsBook } from "@/assets/img";
import {
  schools,
  workshops,
  mentors,
  travelled,
  countries,
  hackers,
  projects,
  Cloud1,
  Cloud2,
} from "@/assets/img";
import { ContentWrapper, SectionWrapper } from "@/components/base";
import { SectionId } from "@/constants";
import { Heading1 } from "@/styles";
import { theme } from "@/styles";
import { mediaQueries } from "@/utils";
import styled, { css, keyframes } from "styled-components";

const MOBILE_VIEW_WIDTH = 630;

const Stats = () => {
  const [bookRef, bookInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <SectionWrapper id={SectionId.STATS}>
      <CloudImg1 src={Cloud1} alt="misty transparent cloud" loading="lazy" />
      <CloudImg2 src={Cloud4} alt="misty transparent cloud" loading="lazy" />
      <CloudImg3 src={Cloud4} alt="misty transparent cloud" loading="lazy" />
      <CloudImg4 src={Cloud3} alt="misty transparent cloud" loading="lazy" />
      <CloudImg5 src={Cloud2} alt="misty transparent cloud" loading="lazy" />
      <ContentWrapper ref={bookRef}>
        <StatSectionWrapper>
          <WorkshopsBlock
            $inView={bookInView}
            src={workshops}
            alt="workshops"
            aria-label="15+ workshops"
            loading="lazy"
          />
          <MentorsBlock
            $inView={bookInView}
            src={mentors}
            alt="mentors"
            aria-label="150 mentors"
            loading="lazy"
          />
          <SchoolsBlock
            $inView={bookInView}
            src={schools}
            alt="195 schools"
            aria-label="600 + Participants"
            loading="lazy"
          />
          <TravelBlock
            $inView={bookInView}
            src={travelled}
            alt="115000 km travelled"
            aria-label="115000 km travelled"
            loading="lazy"
          />
          <CountryBlock
            $inView={bookInView}
            src={countries}
            alt="countries"
            aria-label="13 countries"
            loading="lazy"
          />
          <HackerBlock
            $inView={bookInView}
            src={hackers}
            alt="1000+ hackers"
            aria-label="1000+ hackers"
            loading="lazy"
          />
          <ProjectBlock
            $inView={bookInView}
            src={projects}
            alt="250 projects submitted"
            aria-label="250 projects submitted"
            loading="lazy"
          />
          <HeadingContainer>
            <StatsPaper
              src={lastPaper}
              alt="last"
              aria-label="last"
              loading="lazy"
            />
            <StatsHeading>year we had...</StatsHeading>
          </HeadingContainer>
          <Book
            src={statsBook}
            alt="sparkling book"
            aria-label="sparkling book"
            loading="lazy"
          />
        </StatSectionWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

const CloudImg1 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transform: translateY(-400px);

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg2 = styled.img`
  position: absolute;
  right: 30%;
  z-index: -1;
  transform: translateY(-200px);

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg3 = styled.img`
  position: absolute;
  right: 0;
  top: 20%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg4 = styled.img`
  position: absolute;
  left: 0;
  top: 30%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg5 = styled.img`
  position: absolute;
  right: 0;
  top: 70%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const workshopsAnimation = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 23%;
    bottom: 390px;
  }
`;

const workshopsAnimationLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 17%;
    bottom: 310px;
  }
`;

const workshopsAnimationMedium = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 15%;
    bottom: 380px;
  }
`;

const workshopsAnimationMobile = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 12%;
    bottom: 500px;
  }
`;

const workshopsAnimationMobileLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 12%;
    bottom: 340px;
  }
`;

const mentorAnimation = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 13%;
    bottom: 600px;
  }
`;

const mentorAnimationLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 6%;
    bottom: 490px;
  }
`;

const mentorAnimationMedium = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 7%;
    bottom: 670px;
  }
`;

const mentorAnimationMobile = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 15%;
    bottom: 720px;
  }
`;

const mentorAnimationMobileLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 15%;
    bottom: 490px;
  }
`;

const schoolAnimation = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 27%;
    bottom: 750px;
  }
`;

const schoolAnimationLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 20%;
    bottom: 600px;
  }
`;

const schoolAnimationMedium = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 12%;
    bottom: 850px;
  }
`;

const schoolAnimationMobile = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 10%;
    bottom: 900px;
  }
`;

const schoolAnimationMobileLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 10%;
    bottom: 610px;
  }
`;

const travelAnimation = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 40%;
    bottom: 490px;
  }
`;

const travelAnimationLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 38%;
    bottom: 360px;
  }
`;

const travelAnimationMedium = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 35%;
    bottom: 550px;
  }
`;

const travelAnimationMobile = keyframes`
  from {
    left: 45%;
  }
  to {
    right: 15%;
    bottom: 450px;
  }
`;

const travelAnimationMobileLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    right: 15%;
    bottom: 310px;
  }
`;

const countryAnimation = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 51%;
    bottom: 650px;
  }
`;

const countryAnimationLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 53%;
    bottom: 490px;
  }
`;

const countryAnimationMedium = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 50%;
    bottom: 720px;
  }
`;

const countryAnimationMobile = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 40%;
    bottom: 630px;
  }
`;

const countryAnimationMobileLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 45%;
    bottom: 410px;
  }
`;

const hackerAnimation = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 63%;
    bottom: 780px;
  }
`;

const hackerAnimationLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 65%;
    bottom: 600px;
  }
`;

const hackerAnimationMedium = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 60%;
    bottom: 870px;
  }
`;

const hackerAnimationMobile = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 54%;
    bottom: 780px;
  }
`;

const hackerAnimationMobileLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 54%;
    bottom: 510px;
  }
`;

const projectAnimation = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 62%;
    bottom: 430px;
  }
`;

const projectAnimationLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 70%;
    bottom: 340px;
  }
`;

const projectAnimationMedium = keyframes`
  from {
    left: 45%;
  }
  to {
    right: 10%;
    bottom: 390px;
  }
`;

const projectAnimationMobile = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 30%;
    bottom: 300px;
  }
`;

const projectAnimationMobileLarge = keyframes`
  from {
    left: 45%;
  }
  to {
    left: 30%;
    bottom: 200px;
  }
`;

const hoverAnimation = keyframes`
  0% {
    transform: translateY(0);
    z-index: 1;
  }
  50% {
    transform: translateY(20px);
    z-index: 1;
  }
  100% {
    transform: translateY(0);
    z-index: 1;
  }
`;

const BlockDefaultStyles = styled.img`
  position: absolute;
  bottom: 100px;
  z-index: -1;
`;

const MentorsBlock = styled(BlockDefaultStyles)<{ $inView?: boolean }>`
  ${({ $inView }) => $inView &&
    css`
      animation: ${css`
        ${mentorAnimation} 1.9s ease forwards, ${hoverAnimation} 2.3s infinite
      `};
    `}

  ${mediaQueries.large} {
    width: 164px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${mentorAnimationLarge} 1.9s ease forwards, ${hoverAnimation} 2.3s infinite
        `};
      `}
  }

  ${mediaQueries.medium} {
    width: 165px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${mentorAnimationMedium} 1.9s ease forwards, ${hoverAnimation} 2.3s infinite
        `};
      `}
  }

  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    width: 25%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${mentorAnimationMobile} 1.9s ease forwards, ${hoverAnimation} 2.3s infinite
        `};
      `}
  }

  ${mediaQueries.largeMobile} {
    width: 25%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${mentorAnimationMobileLarge} 1.9s ease forwards, ${hoverAnimation} 2.3s infinite
        `};
      `}
  }
`;

const WorkshopsBlock = styled(BlockDefaultStyles)<{ $inView?: boolean }>`
  ${({ $inView }) => $inView &&
    css`
      animation: ${css`
        ${workshopsAnimation} 1.8s ease forwards, ${hoverAnimation} 3s infinite
      `};
    `}

  ${mediaQueries.large} {
    width: 169px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${workshopsAnimationLarge} 1.8s ease forwards, ${hoverAnimation} 3s infinite
        `};
      `}
  }

  ${mediaQueries.medium} {
    width: 171px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${workshopsAnimationMedium} 1.8s ease forwards, ${hoverAnimation} 3s infinite
        `};
      `}
  }

  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    width: 25%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${workshopsAnimationMobile} 1.8s ease forwards, ${hoverAnimation} 3s infinite
        `};
      `}
  }

  ${mediaQueries.largeMobile} {
    width: 25%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${workshopsAnimationMobileLarge} 1.8s ease forwards, ${hoverAnimation} 3s infinite
        `};
      `}
  }
`;

const SchoolsBlock = styled(BlockDefaultStyles)<{ $inView?: boolean }>`
  ${({ $inView }) => $inView &&
    css`
      animation: ${css`
        ${schoolAnimation} 2s ease forwards, ${hoverAnimation} 2.2s infinite
      `};
    `}

  ${mediaQueries.large} {
    width: 302.4px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${schoolAnimationLarge} 2s ease forwards, ${hoverAnimation} 2.2s infinite
        `};
      `}
  }

  ${mediaQueries.medium} {
    width: 306px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${schoolAnimationMedium} 2s ease forwards, ${hoverAnimation} 2.2s infinite
        `};
      `}
  }

  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    width: 45%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${schoolAnimationMobile} 2s ease forwards, ${hoverAnimation} 2.2s infinite
        `};
      `}
  }

  ${mediaQueries.largeMobile} {
    width: 45%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${schoolAnimationMobileLarge} 2s ease forwards, ${hoverAnimation} 2.2s infinite
        `};
      `}
  }
`;

const TravelBlock = styled(BlockDefaultStyles)<{ $inView?: boolean }>`
  ${({ $inView }) => $inView &&
    css`
      animation: ${css`
        ${travelAnimation} 1.8s ease forwards, ${hoverAnimation} 2.7s infinite
      `};
    `}

  ${mediaQueries.large} {
    width: 239px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${travelAnimationLarge} 1.8s ease forwards, ${hoverAnimation} 2.7s infinite
        `};
      `}
  }

  ${mediaQueries.medium} {
    width: 241px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${travelAnimationMedium} 1.8s ease forwards, ${hoverAnimation} 2.7s infinite
        `};
      `}
  }

  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    width: 35%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${travelAnimationMobile} 1.8s ease forwards, ${hoverAnimation} 2.7s infinite
        `};
      `}
  }

  ${mediaQueries.largeMobile} {
    width: 35%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${travelAnimationMobileLarge} 1.8s ease forwards, ${hoverAnimation} 2.7s infinite
        `};
      `}
  }
`;

const CountryBlock = styled(BlockDefaultStyles)<{ $inView?: boolean }>`
  ${({ $inView }) => $inView &&
    css`
      animation: ${css`
        ${countryAnimation} 1.9s ease forwards, ${hoverAnimation} 2.6s infinite
      `};
    `}

  ${mediaQueries.large} {
    width: 225px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${countryAnimationLarge} 1.9s ease forwards, ${hoverAnimation} 2.6s infinite
        `};
      `}
  }

  ${mediaQueries.medium} {
    width: 227px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${countryAnimationMedium} 1.9s ease forwards, ${hoverAnimation} 2.6s infinite
        `};
      `}
  }

  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    width: 35%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${countryAnimationMobile} 1.9s ease forwards, ${hoverAnimation} 2.6s infinite
        `};
      `}
  }

  ${mediaQueries.largeMobile} {
    width: 35%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${countryAnimationMobileLarge} 1.9s ease forwards, ${hoverAnimation} 2.6s infinite
        `};
      `}
  }
`;

const HackerBlock = styled(BlockDefaultStyles)<{ $inView?: boolean }>`
  ${({ $inView }) => $inView &&
    css`
      animation: ${css`
        ${hackerAnimation} 1.6s ease forwards, ${hoverAnimation} 2.9s infinite
      `};
    `}

  ${mediaQueries.large} {
    width: 273px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${hackerAnimationLarge} 1.6s ease forwards, ${hoverAnimation} 2.9s infinite
        `};
      `}
  }

  ${mediaQueries.medium} {
    width: 276px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${hackerAnimationMedium} 1.6s ease forwards, ${hoverAnimation} 2.9s infinite
        `};
      `}
  }

  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    width: 38%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${hackerAnimationMobile} 1.6s ease forwards, ${hoverAnimation} 2.9s infinite
        `};
      `}
  }

  ${mediaQueries.largeMobile} {
    width: 38%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${hackerAnimationMobileLarge} 1.6s ease forwards, ${hoverAnimation} 2.9s infinite
        `};
      `}
  }
`;

const ProjectBlock = styled(BlockDefaultStyles)<{ $inView?: boolean }>`
  ${({ $inView }) => $inView &&
    css`
      animation: ${css`
        ${projectAnimation} 1.5s ease forwards, ${hoverAnimation} 2.5s infinite
      `};
    `}

  ${mediaQueries.large} {
    width: 271px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${projectAnimationLarge} 1.5s ease forwards, ${hoverAnimation} 2.5s infinite
        `};
      `}
  }

  ${mediaQueries.medium} {
    width: 275px;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${projectAnimationMedium} 1.5s ease forwards, ${hoverAnimation} 2.5s infinite
        `};
      `}
  }

  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    width: 40%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${projectAnimationMobile} 1.5s ease forwards, ${hoverAnimation} 2.5s infinite
        `};
      `}
  }

  ${mediaQueries.largeMobile} {
    width: 40%;
    ${({ $inView }) => $inView &&
      css`
        animation: ${css`
          ${projectAnimationMobileLarge} 1.5s ease forwards, ${hoverAnimation} 2.5s infinite
        `};
      `}
  }
`;

const StatsHeading = styled(Heading1)`
  color: ${theme.colors.text.light.black};
  margin-left: 8px;
`;

const StatsPaper = styled.img`
  width: auto;
  height: auto;
  margin-top: 20px;

  ${mediaQueries.largeMobile} {
    width: 80px;
    margin-top: 10px;
  }
`;

const Book = styled.img`
  width: 90%;
  bottom: 0;
  position: absolute;

  ${mediaQueries.large} {
    width: 1100px;
  }

  ${mediaQueries.medium} {
    width: 1200px;
  }

  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    width: 150%;
  }
`;

const StatSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1100px;
  justify-content: space-between;

  ${mediaQueries.large} {
    height: 900px;
  }

  ${mediaQueries.medium} {
    height: 1200px;
  }

  ${mediaQueries.largeMobile} {
    height: 800px;
  }

  ${mediaQueries.smallMobile} {
    height: 770px;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
  z-index: 2;
`;

export default Stats;

