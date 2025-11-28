import React from "react";
import { useInView } from "react-intersection-observer";
import {
  CarImg,
  RoadImg,
  AboutPicturesImg,
  BubbleImg,
  Cloud1,
  Cloud2,
  Cloud3,
  Cloud4,
} from "@/assets/img";
import { ContentWrapper, SectionWrapper } from "@/components/base";
import { SectionId } from "@/constants";
import { Heading2, LargeBodyMedium } from "@/styles";
import { theme } from "@/styles";
import { mediaQueries, useDeviceSize } from "@/utils";
import styled, { keyframes } from "styled-components";

const About: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");
  const responsiveRootMargin = isTabletOrSmaller
    ? "-30% 0px -20% 0px"
    : "0% 0px -2% 0px";
  const [welcomeDivRef, welcomeDivInView] = useInView({
    rootMargin: responsiveRootMargin,
    threshold: 1,
  });
  const [pictureDivRef, PictureDivInView] = useInView({
    rootMargin: "-15% 20% -10% 0px",
    threshold: 0.8,
  });
  const [belongDivRef, belongDivInView] = useInView({
    rootMargin: "-30% 0px -30% 0px",
    threshold: 1,
  });

  return (
    <SectionWrapper id={SectionId.ABOUT}>
      <CloudImg1 src={Cloud1} alt="misty transparent cloud" loading="lazy" />
      <CloudImg2 src={Cloud2} alt="misty transparent cloud" loading="lazy" />
      <CloudImg3 src={Cloud1} alt="misty transparent cloud" loading="lazy" />
      <CloudImg4 src={Cloud2} alt="misty transparent cloud" loading="lazy" />
      <CloudImg5 src={Cloud4} alt="misty transparent cloud" loading="lazy" />
      <StyledContentWrapper>
        <Wrapper>
          <WelcomeWrapper ref={welcomeDivRef}>
            <Heading2> Welcome to wHACKiest</Heading2>
            <StyledBody>
              Join 500+ hackers for a
              hackathon like no other. Discover a community of like-minded
              hackers, connect with world-class mentors, and build because you
              love to build. At wHACKiest, you&apos;re in for a great
              time with engaging workshops, fun activities, and the chance to
              network with the most exciting companies in tech!
              <br />
              <br />
              We cover food and lodging so
              you can focus on turning your dreams into reality.
            </StyledBody>
          </WelcomeWrapper>
          <Road alt="Road" src={RoadImg} />
          <AboutPictures
            alt="AboutPictures"
            src={AboutPicturesImg}
            loading="lazy"
            ref={pictureDivRef}
          />
          <BelongWrapper ref={belongDivRef}>
            <Heading2>You belong in tech</Heading2>
            <StyledBody>
              Getting into tech can be hard—we&apos;re here to make that easier!
              wHACKiest is dedicated to building an inclusive experience
              for attendees. We strive to foster a space
              where everyone feels welcome to pursue their dreams and create
              something they&apos;re proud of.
            </StyledBody>
          </BelongWrapper>
        </Wrapper>

        <Car1 alt="Car" src={CarImg} inView={welcomeDivInView} />
        <Car2 alt="Car" src={CarImg} inView={PictureDivInView} />
        <Car3
          alt="Car"
          src={CarImg}
          inView={belongDivInView}
          pictureInView={PictureDivInView}
          welcomeInView={welcomeDivInView}
        />

        <Bubble alt="Bubble" src={BubbleImg} loading="lazy" />
      </StyledContentWrapper>
    </SectionWrapper>
  );
};

const CloudImg1 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg2 = styled.img`
  position: absolute;
  right: 0;
  top: 20%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg3 = styled.img`
  position: absolute;
  left: 0;
  top: 40%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg4 = styled.img`
  position: absolute;
  right: 0;
  top: 60%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg5 = styled.img`
  position: absolute;
  right: 30%;
  top: 5%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Car1 = styled.img<{ inView: boolean }>`
  position: absolute;
  width: 294px;
  top: 2%;
  left: 56%;
  visibility: visible;
  animation: ${({ inView }) => (inView ? fadeIn : fadeOut)} 0.5s ease-in-out
    forwards;

  ${mediaQueries.large} {
    left: 64%;
  }

  ${mediaQueries.custom(1250)} {
    left: 69%;
  }

  ${mediaQueries.custom(1100)} {
    left: 71%;
  }

  ${mediaQueries.medium} {
    width: 26%;
    top: 4%;
    left: 66%;
  }
  ${mediaQueries.custom(930)} {
    left: 74%;
  }

  ${mediaQueries.tablet} {
    top: 8%;
    left: 68%;
  }

  ${mediaQueries.custom(740)} {
    left: 65%;
  }

  ${mediaQueries.custom(640)} {
    visibility: hidden;
  }
`;

const Car2 = styled.img<{ inView: boolean }>`
  position: absolute;
  width: 343px;
  top: 26%;
  left: 18%;
  visibility: visible;
  transform: scaleX(-1);
  animation: ${({ inView }) => (inView ? fadeIn : fadeOut)} 0.5s ease-in-out
    forwards;

  ${mediaQueries.medium} {
    width: 28%;
    top: 31%;
    left: 7%;
  }

  ${mediaQueries.tablet} {
    top: 32%;
  }

  ${mediaQueries.custom(640)} {
    visibility: hidden;
  }
`;

const Car3 = styled.img<{
  inView: boolean;
  pictureInView: boolean;
  welcomeInView: boolean;
}>`
  position: absolute;
  width: 530px;
  top: 50%;
  left: 48%;
  visibility: visible;
  animation: ${({ inView, pictureInView, welcomeInView }) =>
      (!inView && pictureInView) || (!inView && welcomeInView)
        ? fadeOut
        : fadeIn}
    0.5s ease-in-out forwards;

  ${mediaQueries.medium} {
    top: 50%;
  }

  ${mediaQueries.tablet} {
    width: 450px;
    top: 50%;
  }

  ${mediaQueries.custom(640)} {
    visibility: hidden;
  }
  //
`;

const StyledContentWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 8%;
  padding: 69px 138px 69px 138px;
  width: 100vw;

  ${mediaQueries.medium} {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
  }

  ${mediaQueries.largeMobile} {
    margin-bottom: 20%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 1272px;

  ${mediaQueries.custom(1280)} {
    left: -7%;
  }

  ${mediaQueries.medium} {
    left: -20%;
  }

  ${mediaQueries.tablet} {
    width: 1174px;
    left: -25%;
  }

  ${mediaQueries.custom(740)} {
    left: -38%;
  }

  ${mediaQueries.mediumTablet} {
    left: -34%;
  }

  ${mediaQueries.largeMobile} {
    width: 1205px;
    left: -45%;
  }

  ${mediaQueries.mobile} {
    left: -60%;
  }
`;

const Road = styled.img`
  width: 100%;
  height: auto;
`;

const WelcomeWrapper = styled.div`
  position: absolute;
  width: 532px;
  display: flex;
  flex-direction: column;
  left: 0%;

  ${mediaQueries.medium} {
    width: 450px;
    left: 10%;
  }

  ${mediaQueries.tablet} {
    width: 350px;
    left: 15%;
  }

  ${mediaQueries.smallTablet} {
    left: 10%;
  }

  ${mediaQueries.largeMobile} {
    width: 296px;
    left: 12%;
  }

  ${mediaQueries.mobile} {
    left: 14%;
  }
`;

const StyledBody = styled(LargeBodyMedium)`
  margin-top: 2%;
  color: ${theme.colors.secondary.navy};
  line-height: 140%;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }

  ${mediaQueries.largeMobile} {
    line-height: 25.6px;
  }
`;

const BelongWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 539px;
  top: 65%;
  left: 0%;

  ${mediaQueries.medium} {
    width: 32%;
    top: 62%;
    left: 10%;
    padding-bottom: 15%;
  }

  ${mediaQueries.tablet} {
    width: 300px;
    top: 60%;
    left: 15%;
  }

  ${mediaQueries.mediumTablet} {
    top: 64%;
  }

  ${mediaQueries.custom(630)} {
    top: 60%;
  }

  ${mediaQueries.smallTablet} {
    top: 62%;
    left: 10%;
  }

  ${mediaQueries.largeMobile} {
    width: 285px;
    top: 65%;
    left: 12%;
  }

  ${mediaQueries.mobile} {
    top: 62%;
    left: 14%;
  }
`;

const AboutPictures = styled.img`
  position: absolute;
  width: 50%;
  top: 28%;
  left: 50%;

  ${mediaQueries.large} {
    width: 40%;
    left: 48%;
  }

  ${mediaQueries.custom(1230)} {
    width: 36%;
    top: 33%;
    left: 40%;
  }

  ${mediaQueries.medium} {
    width: 34%;
    top: 33%;
    left: 40%;
  }

  ${mediaQueries.custom(870)} {
    width: 32%;
    top: 34%;
    left: 36%;
  }

  ${mediaQueries.tablet} {
    width: 32%;
    top: 33%;
    left: 38%;
  }

  ${mediaQueries.mediumTablet} {
    top: 35%;
    left: 20%;
  }

  ${mediaQueries.smallTablet} {
    left: 8%;
  }
  ${mediaQueries.largeMobile} {
    width: 28%;
    top: 38%;
    left: 12%;
  }
`;

const Bubble = styled.img`
  position: absolute;
  width: 6%;
  top: 58%;
  left: 10%;
  visibility: visible;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

export default About;

