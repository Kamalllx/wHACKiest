import React from "react";
import styled from "styled-components";
import {
  UnforgettableCutout,
  TestimonialCloud,
  TestimonialCloud2,
  TestimonialCloud3,
  TestimonialCloud4,
} from "@/assets/img";
import { ContentWrapper, SectionWrapper } from "@/components/base";
import { SectionId } from "@/constants";
import { Heading1, LargeBody, LargeBodyMedium, theme } from "@/styles";
import { mediaQueries, useDeviceSize } from "@/utils";
import TestimonialCarousel from "./TestimonialCarousel";

interface StyledCloudProps {
  width: string;
  height: string;
  top: string;
  side: "left" | "right";
  offset: string;
  opacity: number;
}

const Testimonials: React.FC = () => {
  const ULTRAWIDE_WIDTH = 2560;
  const isUltrawideOrSmaller = useDeviceSize(ULTRAWIDE_WIDTH);

  return (
    <SectionWrapper id={SectionId.TESTIMONIALS}>
      {isUltrawideOrSmaller !== undefined && (
        <BackgroundClouds isUltrawideOrSmaller={isUltrawideOrSmaller} />
      )}
      <StyledContentWrapper>
        <HeadingContainer>
          <StyledHeading1>
            Create
            <StyledUnforgettableCutout
              alt="Unforgettable Cutout"
              src={UnforgettableCutout}
              loading="lazy"
            />
            memories
          </StyledHeading1>
        </HeadingContainer>
        <SummaryTextContainer>
          <SummaryText>
            wHACKiest empowers students of all levels to
            take their ideas to the next level by fostering a community of
            learning, mentorship, and fun.
          </SummaryText>
        </SummaryTextContainer>
        <TestimonialCarousel />
      </StyledContentWrapper>
    </SectionWrapper>
  );
};

const BackgroundClouds: React.FC<{ isUltrawideOrSmaller: boolean }> = ({
  isUltrawideOrSmaller,
}) => (
  <>
    <StyledCloud
      src={TestimonialCloud}
      alt="Testimonial Cloud"
      width="auto"
      height="795px"
      top={isUltrawideOrSmaller ? "-7vw" : "5vw"}
      side="left"
      offset={isUltrawideOrSmaller ? "-10vw" : "0vw"}
      opacity={1}
    />
    <StyledCloud
      src={TestimonialCloud2}
      alt="Testimonial Cloud"
      width="auto"
      height="795px"
      top="0vw"
      side="right"
      offset="-15vw"
      opacity={isUltrawideOrSmaller ? 1 : 0}
    />
    <StyledCloud
      src={TestimonialCloud3}
      alt="Testimonial Cloud"
      width="auto"
      height="821px"
      top={isUltrawideOrSmaller ? "35vw" : "20vw"}
      side="left"
      offset="0vw"
      opacity={1}
    />
    <StyledCloud
      src={TestimonialCloud4}
      alt="Testimonial Cloud"
      width="auto"
      height="auto"
      top="17vw"
      side="right"
      offset="35vw"
      opacity={isUltrawideOrSmaller ? 0 : 1}
    />
  </>
);

const StyledCloud = styled.img<StyledCloudProps>`
  position: absolute;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  ${({ side, offset }) => `${side}: ${offset};`}
  opacity: ${({ opacity }) => opacity};
  z-index: -1;

  ${mediaQueries.medium} {
    display: none;
  }
`;

const StyledContentWrapper = styled(ContentWrapper)`
  width: 100vw;
  max-width: 1512px;
  padding: 69px 138px;
  flex-direction: column;
  display: flex;
  align-items: center;

  ${mediaQueries.medium} {
    padding: 48px;
  }

  ${mediaQueries.largeMobile} {
    padding: 24px;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  padding: 0;

  margin-left: -35px;
  margin-right: -35px;

  ${mediaQueries.largeMobile} {
    margin-left: -24px;
    margin-right: -24px;
  }
`;

const StyledHeading1 = styled(Heading1)`
  color: ${theme.colors.text.light.black};
  text-align: center;
  line-height: 1;
`;

const StyledUnforgettableCutout = styled.img`
  width: 349px;
  height: auto;
  margin: 0 8px;
  padding: 0;
  vertical-align: middle;

  ${mediaQueries.medium} {
    width: 266px;
  }

  ${mediaQueries.largeMobile} {
    width: 155.745px;
  }
`;

const SummaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 770px;
  margin-bottom: 40px;

  ${mediaQueries.medium} {
    max-width: 738px;
    margin-bottom: 24px;
  }

  ${mediaQueries.tablet} {
    max-width: 632px;
  }

  ${mediaQueries.largeMobile} {
    max-width: 342px;
  }
`;

const SummaryText = styled(LargeBodyMedium)`
  color: ${({ theme }) => theme.colors.secondary.navy};
  line-height: 32px;
  text-align: center;

  ${mediaQueries.medium} {
    font-size: 20px;
  }
  ${mediaQueries.largeMobile} {
    font-size: 16px;
    line-height: 25.6px;
    font-weight: 400;
  }
`;

export default Testimonials;

