import * as Fathom from "fathom-client";
import React from "react";
import { Cloud, SpecialCutout } from "@/assets/img";
import { Button, ContentWrapper, SectionWrapper } from "@/components/base";
import { SectionId } from "@/constants";
import { Heading1, LargeBodyMedium, theme } from "@/styles";
import { mediaQueries, useDeviceSize } from "@/utils";
import styled from "styled-components";
import SponsorGrid from "./SponsorGrid";
import SponsorsCarousel from "./SponsorsCarousel";

interface StyledCloudProps {
  height: string;
  top: string;
  side: "left" | "right";
  offset: string;
  opacity: number;
}

const Sponsors: React.FC = () => {
  const ULTRAWIDE_WIDTH = 2560;
  const isUltrawideOrSmaller = useDeviceSize(ULTRAWIDE_WIDTH);

  return (
    <SectionWrapper id={SectionId.SPONSORS}>
      {isUltrawideOrSmaller !== undefined && (
        <BackgroundClouds isUltrawideOrSmaller={isUltrawideOrSmaller} />
      )}
      <StyledContentWrapper>
        <HeadingContainer>
          <StyledHeading1>
            Sponsor a
            <StyledSpecialCutout
              alt="Special Cutout"
              src={SpecialCutout}
              loading="lazy"
            />
            weekend
          </StyledHeading1>
        </HeadingContainer>
        <SummaryContainer>
          <SummaryTextContainer>
            <LargeBodyWhite>
              Our sponsors make it possible for us to unite prospective
              developers, designers, and builders. Hackers
              make meaningful connections with our sponsors beyond just the
              hackathon weekend. Stay tuned as we confirm more sponsors for wHACKiest!
            </LargeBodyWhite>
            <LargeBodyWhite>
              Want to help make this event a reality? Email us at{" "}
              <StyledLink
                href="mailto:sponsor@coderit.org"
                onClick={() =>
                  Fathom.trackEvent("Sign Up: Clicked Email Contact")
                }
              >
                <InlineBold>sponsor@coderit.org</InlineBold>
              </StyledLink>
              .
            </LargeBodyWhite>
          </SummaryTextContainer>
          <ButtonWrapper>
            <StyledLink href="mailto:sponsor@coderit.org">
              <Button
                text="Become a sponsor"
                size="medium"
                disabled={false}
                classification="primary"
                arrow={false}
                color="white"
                onClick={() =>
                  Fathom.trackEvent("Sign Up: Clicked Email Contact")
                }
              />
            </StyledLink>
          </ButtonWrapper>
        </SummaryContainer>
        <SponsorsCarousel />
        <SponsorGrid />
      </StyledContentWrapper>
    </SectionWrapper>
  );
};

const BackgroundClouds: React.FC<{ isUltrawideOrSmaller: boolean }> = ({
  isUltrawideOrSmaller,
}) => (
  <>
    <StyledCloud
      src={Cloud}
      alt="Cloud"
      height="559px"
      top={isUltrawideOrSmaller ? "0px" : "550px"}
      side="right"
      offset={isUltrawideOrSmaller ? "-15vw" : "27vw"}
      opacity={0.08}
    />
    <StyledCloud
      src={Cloud}
      alt="Cloud"
      height="996px"
      top="480px"
      side="right"
      offset="-40vw"
      opacity={0.08}
    />
    <StyledCloud
      src={Cloud}
      alt="Cloud"
      height="996px"
      top={isUltrawideOrSmaller ? "1800px" : "2500px"}
      side="right"
      offset={isUltrawideOrSmaller ? "-45vw" : "15vw"}
      opacity={0.08}
    />
    <StyledCloud
      src={Cloud}
      alt="Cloud"
      height="996px"
      top="1400px"
      side="left"
      offset="10vw"
      opacity={isUltrawideOrSmaller ? 0 : 0.08}
    />
    <StyledCloud
      src={Cloud}
      alt="Cloud"
      height="996px"
      top={isUltrawideOrSmaller ? "1300px" : "1900px"}
      side="left"
      offset={isUltrawideOrSmaller ? "-37vw" : "-15vw"}
      opacity={0.08}
    />
  </>
);

const StyledHeading1 = styled(Heading1)`
  color: ${theme.colors.text.dark.white};
  text-align: center;
  line-height: 1;
`;

const StyledSpecialCutout = styled.img`
  width: 188px;
  height: auto;
  margin: 0 8px;
  padding: 0;
  vertical-align: middle;

  ${mediaQueries.largeMobile} {
    width: 97.6px;
  }
`;

const StyledContentWrapper = styled(ContentWrapper)`
  width: 100vw;
  max-width: 1512px;
  padding: 69px 138px;
  flex-direction: column;
  display: flex;

  ${mediaQueries.large} {
    padding: 69px 110px;
  }

  ${mediaQueries.medium} {
    padding: 69px 60px;
  }

  ${mediaQueries.tablet} {
    padding: 24px 48px;
  }

  ${mediaQueries.mediumTablet} {
    padding: 24px 24px;
  }

  ${mediaQueries.largeMobile} {
    padding: 36px 14px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  ${mediaQueries.largeMobile} {
    margin-top: 16px;
  }
`;

const StyledCloud = styled.img<StyledCloudProps>`
  position: absolute;
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  ${(props) =>
    props.side === "left" || props.side === "right"
      ? `${props.side}: ${props.offset};`
      : ""}
  opacity: ${(props) => props.opacity};
  z-index: -1;

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 72px;

  ${mediaQueries.largeMobile} {
    margin-bottom: 48px;
  }
`;

const SummaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 896px;

  ${mediaQueries.tablet} {
    max-width: 657px;
  }

  ${mediaQueries.largeMobile} {
    max-width: 358px;
  }
`;

const LargeBodyWhite = styled(LargeBodyMedium)`
  color: ${({ theme }) => theme.colors.text.dark.white};
  text-align: center;
  margin-top: 24px;
  line-height: 32px;

  ${mediaQueries.tablet} {
    font-size: 20px;
  }

  ${mediaQueries.largeMobile} {
    font-size: 16px;
    margin-top: 16px;
    line-height: 25.6px;
    font-weight: 400;
  }
`;

const InlineBold = styled.span`
  font-family: "Satoshi";
  font-weight: 700;
  font-size: 20px;

  ${mediaQueries.largeMobile} {
    font-size: 16px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export default Sponsors;

