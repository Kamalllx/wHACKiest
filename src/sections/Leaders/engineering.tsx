import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Cloud4, WaterlooEngineering } from "@/assets/img";
import {
  PortalIn1,
  PortalIn2,
  PortalIn3,
  PortalIn4,
  PortalIn5,
  PortalOut1,
  PortalOut2,
  PortalOut3,
  PortalOut4,
  PortalOut5,
} from "@/assets/img";
import { ContentWrapper } from "@/components/base";
import { LargeBodyMedium } from "@/styles";
import { mediaQueries } from "@/utils";
import styled, { keyframes } from "styled-components";

const Engineering: React.FC = () => {
  const [ref, inView] = useInView();

  const [gooseState, setGooseState] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setGooseState((prevState) => (prevState + 1) % 15);
    }, 400);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <ContentWrapper>
      <CloudImg1 src={Cloud4} alt="misty transparent cloud" loading="lazy" />
      <CloudImg2 src={Cloud4} alt="misty transparent cloud" loading="lazy" />
      <UWEngineeringContainer ref={ref}>
        <GooseContainer className="inContainer">
          <Goose
            visible
            src={PortalIn5}
            alt="Graphic of a portal with a goose walking in"
            loading="lazy"
          />
          <Goose
            visible={gooseState <= 3}
            src={PortalIn1}
            alt="Graphic of a portal with a goose walking in"
            loading="lazy"
          />
          <Goose
            visible={gooseState === 4}
            src={PortalIn2}
            alt="Graphic of a portal with a goose walking in"
            loading="lazy"
          />
          <Goose
            visible={gooseState === 5}
            src={PortalIn3}
            alt="Graphic of a portal with a goose walking in"
            loading="lazy"
          />
          <Goose
            visible={gooseState === 6}
            src={PortalIn4}
            alt="Graphic of a portal with a goose walking in"
            loading="lazy"
          />
          <Goose
            visible={gooseState >= 7}
            src={PortalIn5}
            alt="Graphic of a portal with a goose walking in"
            loading="lazy"
          />
        </GooseContainer>
        <UWEngineeringContent className="between">
          <WaterlooEngineeringLogo
            loading="lazy"
            src={WaterlooEngineering}
            alt="Waterloo Engineering"
          />
          <BodyText>
            Our partner since 2014, Waterloo Engineering continues to support
            wHACKiest to build a creative, diverse, and unique experience
            for hackers. The University of Waterloo is home to Canada&apos;s
            largest engineering school — a pipeline for engineering talent for
            the world&apos;s leading companies.
          </BodyText>
          <BodyText>
            Ranked among the top 50 engineering schools in the world, the
            school&apos;s reputation for excellence is built on the foundation
            of co-op education and a bold history of innovation.
          </BodyText>
        </UWEngineeringContent>
        <GooseContainer className="outContainer">
          <Goose
            visible
            src={PortalOut1}
            alt="Graphic of a portal with a mechanical goose walking out"
            loading="lazy"
          />
          <Goose
            visible={gooseState <= 6}
            src={PortalOut1}
            alt="Graphic of a portal with a mechanical goose walking out"
            loading="lazy"
          />
          <Goose
            visible={gooseState === 7}
            src={PortalOut2}
            alt="Graphic of a portal with a mechanical goose walking out"
            loading="lazy"
          />
          <Goose
            visible={gooseState === 8}
            src={PortalOut3}
            alt="Graphic of a portal with a mechanical goose walking out"
            loading="lazy"
          />
          <Goose
            visible={gooseState === 9}
            src={PortalOut4}
            alt="Graphic of a portal with a mechanical goose walking out"
            loading="lazy"
          />
          <Goose
            visible={gooseState >= 10}
            src={PortalOut5}
            alt="Graphic of a portal with a mechanical goose walking out"
            loading="lazy"
          />
        </GooseContainer>
        <UWEngineeringContent className="below">
          <WaterlooEngineeringLogo
            loading="lazy"
            src={WaterlooEngineering}
            alt="Waterloo Engineering"
          />
          <BodyText>
            Our partner since 2014, Waterloo Engineering continues to support
            wHACKiest to build a creative, diverse, and unique experience
            for hackers. The University of Waterloo is home to Canada&apos;s
            largest engineering school — a pipeline for engineering talent for
            the world&apos;s leading companies.
          </BodyText>
          <BodyText>
            Ranked among the top 50 engineering schools in the world, the
            school&apos;s reputation for excellence is built on the foundation
            of co-op education and a bold history of innovation.
          </BodyText>
        </UWEngineeringContent>
      </UWEngineeringContainer>
    </ContentWrapper>
  );
};

const CloudImg1 = styled.img`
  position: absolute;
  left: 40%;
  top: 0%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg2 = styled.img`
  position: absolute;
  right: 80%;
  top: 50%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const UWEngineeringContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 69px 138px;
  gap: 48px;

  @media (max-width: 1280px) {
    margin: 36px 0;
    padding: 48px 96px;
    flex-wrap: wrap;
    gap: 36px;
    column-gap: 12px;
  }

  @media (max-width: 1024px) {
    padding: 48px;
    flex-wrap: wrap;
    column-gap: 0px;
  }

  @media (max-width: 640px) {
    padding: 24px;
  }
`;

const UWEngineeringContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 440px;
  margin: 200px 0;

  &.between {
    @media (max-width: 1280px) {
      display: none;
    }
  }

  &.below {
    display: none;
    @media (max-width: 1280px) {
      margin-top: 24px;
      margin-bottom: 48px;
      display: flex;
      width: auto;
    }
  }
`;

const WaterlooEngineeringLogo = styled.img`
  width: 440px;

  @media (max-width: 834px) {
    width: 360px;
  }

  @media (max-width: 430px) {
    width: 280px;
  }
`;

const BodyText = styled(LargeBodyMedium)`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.dark.white};

  ${mediaQueries.largeMobile} {
    line-height; 25.6px;
  }
`;

const GooseContainer = styled.div`
  display: flex;
  width: 334px;
  position: relative;

  @media (max-width: 1280px) {
    width: 40%;
    height: 300px;
  }

  @media (max-width: 834px) {
    height: 240px;
  }

  @media (max-width: 640px) {
    height: 180px;
  }

  @media (max-width: 430px) {
    height: 160px;
  }

  &.inContainer {
    justify-content: flex-end;
    align-items: flex-start;
  }

  &.outContainer {
    justify-content: flex-start;
    align-items: flex-end;

    @media (max-width: 1280px) {
      align-items: flex-start;
    }
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

const Goose = styled.img<{ visible: boolean }>`
  position: absolute;
  user-select: none;
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.2s ease-out
    forwards;

  height: 320px;

  @media (max-width: 1440px) {
    height: 280px;
  }

  @media (max-width: 834px) {
    height: 240px;
  }

  @media (max-width: 640px) {
    height: 180px;
  }

  @media (max-width: 430px) {
    height: 160px;
  }
`;

export default Engineering;


