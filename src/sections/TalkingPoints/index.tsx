import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  BiggestTextCutout,
  TalkingPoints1,
  TalkingPoints2,
  TalkingPoints3,
  TalkingPointsCloud1,
  TalkingPointsCloud2,
  TalkingPointsCloud3,
  TalkingPointsCloud4,
  TalkingPointsCloud5,
  BoxNoTools,
  WrenchPink,
  HammerGreen,
  SmallBubble,
} from "@/assets/img";
import { ContentWrapper, SectionWrapper } from "@/components/base";
import { SectionId } from "@/constants";
import { Heading1, Heading2, LargeBodyMedium, theme } from "@/styles";
import { mediaQueries } from "@/utils/responsive";
import styled, { keyframes } from "styled-components";

const TalkingPoints: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  const [joinDivRef] = useInView();
  const [createDivRef, createDivInView] = useInView();
  const [makeDivRef, makeDivInView] = useInView();
  const [topBubbleRef, topBubbleInView] = useInView();
  const [cardBoardBoxRef, cardBoardBoxInView] = useInView();

  return (
    <SectionWrapper id={SectionId.TALKING_POINTS}>
      <StyledContentWrapper>
        <StyledCloud
          src={TalkingPointsCloud1}
          alt="cloud"
          topPercentage={0}
          left="0px"
          right="auto"
        />
        <StyledCloud
          src={TalkingPointsCloud2}
          alt="cloud"
          topPercentage={40}
          left="0px"
          right="auto"
        />
        <StyledCloud
          src={TalkingPointsCloud3}
          alt="cloud"
          topPercentage={60}
          left="auto"
          right="0px"
        />
        <StyledCloud
          src={TalkingPointsCloud4}
          alt="cloud"
          topPercentage={65}
          left="auto"
          right="0px"
        />
        <StyledCloud
          src={TalkingPointsCloud5}
          alt="cloud"
          topPercentage={90}
          left="0"
          right="auto"
        />
        <HeadingContainer>
          <Heading1>Canada&apos;s</Heading1>
          <StyledBiggestText src={BiggestTextCutout} alt="biggest" />
          <Heading1>hackathon!</Heading1>
        </HeadingContainer>
        <ColumnRowWrapper>
          <AnimatedSectionWrapper>
            <div
              style={{
                height: "100%",
              }}
            >
              <AnimatedImagesWrapper ref={containerRef}>
                <StyledBubble
                  src={TalkingPoints1}
                  inView={!createDivInView && !makeDivInView}
                  alt="small-bubble"
                  containerWidth={containerWidth}
                />
                <StyledBubble
                  src={TalkingPoints2}
                  inView={createDivInView && !makeDivInView}
                  alt="small-bubble"
                  containerWidth={containerWidth}
                />
                <StyledBubble
                  inView={makeDivInView}
                  src={TalkingPoints3}
                  alt="small-bubble"
                  containerWidth={containerWidth}
                />
                {(topBubbleInView || cardBoardBoxInView) && (
                  <StyledWrenchPink
                    src={WrenchPink}
                    alt="wrench-pink"
                    containerWidth={containerWidth}
                  />
                )}
                {(topBubbleInView || cardBoardBoxInView) && (
                  <StyledHammerGreen
                    src={HammerGreen}
                    alt="hammer-green"
                    containerWidth={containerWidth}
                  />
                )}
                <StyledBubbleLeft
                  src={SmallBubble}
                  alt="small-bubble"
                  containerWidth={containerWidth}
                />
                <StyledBubbleRight
                  src={SmallBubble}
                  alt="small-bubble"
                  containerWidth={containerWidth}
                />
                <StyledBubbleTop
                  ref={topBubbleRef}
                  src={SmallBubble}
                  alt="small-bubble"
                  containerWidth={containerWidth}
                />
                <StyledBoxNoTools
                  src={BoxNoTools}
                  alt="box-no-tools"
                  ref={cardBoardBoxRef}
                />
              </AnimatedImagesWrapper>
            </div>
          </AnimatedSectionWrapper>
          <TextSectionWrapper>
            <TalkingPointsTextWrapper>
              <TalkingPointsParagraphWrapper inView={createDivInView}>
                <StyledHeading2>Join a global community</StyledHeading2>
                <StyledLargeBodyMedium ref={joinDivRef}>
                  Connect with curious and creative students from schools across
                  the globe. Chat with industry leaders, sponsors, and mentors
                  and open your mind to endless possibilities. We welcome
                  hackers of all experience levels to collaborate and build
                  something they are proud of.
                </StyledLargeBodyMedium>
              </TalkingPointsParagraphWrapper>
            </TalkingPointsTextWrapper>
            <TalkingPointsTextWrapper>
              <TalkingPointsParagraphWrapper inView={makeDivInView}>
                <StyledHeading2>Create something amazing!</StyledHeading2>
                <StyledLargeBodyMedium ref={createDivRef}>
                  Get inspired and build! Don’t have the resources you need to
                  make your project come to life? We’re here to help! We provide
                  workshops, mentorship, and the tech you need all in one place,
                  so you can focus on hacking!
                </StyledLargeBodyMedium>
              </TalkingPointsParagraphWrapper>
            </TalkingPointsTextWrapper>
            <TalkingPointsTextWrapper>
              <TalkingPointsParagraphWrapper inView={false}>
                <StyledHeading2>Make lasting memories</StyledHeading2>
                <StyledLargeBodyMedium ref={makeDivRef}>
                  Take a break from hacking and enjoy fun activities planned
                  just for you! From therapy dogs, to cup stacking, to karaoke,
                  and more—we make sure that every hacker has the chance to work
                  hard and play hard.
                </StyledLargeBodyMedium>
              </TalkingPointsParagraphWrapper>
            </TalkingPointsTextWrapper>
          </TextSectionWrapper>
        </ColumnRowWrapper>
      </StyledContentWrapper>
    </SectionWrapper>
  );
};

const StyledContentWrapper = styled(ContentWrapper)`
  overflow-x: clip;
  width: 100%;
  max-width: 1512px;
  padding: 69px 138px 69px 138px;
  flex-direction: column;
  display: flex;
  gap: 40px;

  ${mediaQueries.medium} {
    gap: 0;
    padding: 48px;
  }
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  ${mediaQueries.medium} {
    gap: 10px;
  }

  ${mediaQueries.smallTablet} {
    gap: 5px;
    flex-direction: column;
  }
`;

const StyledBiggestText = styled.img`
  width: auto;
  height: 100%;

  ${mediaQueries.medium} {
    height: 80px;
  }

  ${mediaQueries.largeMobile} {
    height: 60px;
  }
`;

const ColumnRowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  ${mediaQueries.medium} {
    grid-template-columns: 1fr;
    flex-direction: column;
    gap: 0px;
  }
`;

const AnimatedSectionWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: sticky;
  z-index: 21;
  top: 0;

  ${mediaQueries.medium} {
    top: -20%;
    min-height: unset;
  }
`;

const TextSectionWrapper = styled.div``;

const TalkingPointsTextWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  ${mediaQueries.tablet} {
    height: 50vh;
    min-height: unset;
  }
`;

const fadeOutUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TalkingPointsParagraphWrapper = styled.div<{ inView: boolean }>`
  top: 0px;
  bottom: 0px;
  margin: auto;
  gap: 24px;
  display: flex;
  flex-direction: column;

  ${mediaQueries.medium} {
    margin-bottom: 0px;
    animation: ${({ inView }) => (inView ? fadeOutUp : fadeInDown)} 0.5s
      ease-out forwards;
  }
`;

const StyledHeading2 = styled(Heading2)`
  ${mediaQueries.medium} {
    text-align: center;
  }
`;

const StyledLargeBodyMedium = styled(LargeBodyMedium)`
  color: ${theme.colors.secondary.navy};

  ${mediaQueries.medium} {
    text-align: center;
  }
`;

const bobAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AnimatedImagesWrapper = styled.div`
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 400px;
  width: 100%;
  margin: auto;
  position: absolute;
  display: block;
  animation: ${bobAnimation} 3s infinite;

  ${mediaQueries.medium} {
    max-width: 500px;
    height: 300px;
    animation: none;
  }
`;

const StyledBoxNoTools = styled.img`
  position: absolute;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: auto;
  width: 100%;
`;

const fadeInAndUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px) scale(0);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
`;

const fadeOutAndDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateY(100px) scale(0);
  }
`;

const StyledBubble = styled.img<{ containerWidth: number; inView: boolean }>`
  position: absolute;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  bottom: calc(${(props) => props.containerWidth / 3.5}px);
  left: 0px;
  right: 7%;
  width: 50%;
  animation: ${({ inView }) => (inView ? fadeInAndUp : fadeOutAndDown)} 0.5s
    ease-out forwards;
`;

const wrenchAnimation = keyframes`
  0% {
    transform: translate(-5%, 5%) rotate(5deg);
  }
  100% {
    transform: translate(0,0) rotate(0deg);
  }
`;

const StyledWrenchPink = styled.img<{ containerWidth: number }>`
  position: absolute;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  bottom: calc(${(props) => props.containerWidth / 3.7}px);
  right: 14%;
  width: 20%;
  animation: ${wrenchAnimation} 2s ease-in-out forwards;
`;

const hammerAnimation = keyframes`
  0% {
    transform: translate(10%, 5%) rotate(-5deg);
  }
  100% {
    transform: translate(0,0) rotate(0deg);
  }
`;

const StyledHammerGreen = styled.img<{ containerWidth: number }>`
  position: absolute;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  bottom: 10px;
  left: 7%;
  width: 33%;
  animation: ${hammerAnimation} 2s ease-in-out forwards;
`;

const StyledBubbleLeft = styled.img<{ containerWidth: number }>`
  position: absolute;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  bottom: calc(${(props) => props.containerWidth * 0.74}px);
  right: 38%;
  width: 5%;
`;

const StyledBubbleRight = styled.img<{ containerWidth: number }>`
  position: absolute;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  bottom: calc(${(props) => props.containerWidth * 0.7}px);
  right: 29%;
  width: 7%;
`;

const StyledBubbleTop = styled.img<{ containerWidth: number }>`
  position: absolute;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  bottom: calc(${(props) => props.containerWidth * 0.8}px);
  right: 27%;
  width: 11%;
`;

const StyledCloud = styled.img<{
  topPercentage: number;
  left: string;
  right: string;
}>`
  position: absolute;
  top: ${(props) => props.topPercentage}%;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  height: min-content;

  ${mediaQueries.tablet} {
    display: none;
  }
`;

export default TalkingPoints;

