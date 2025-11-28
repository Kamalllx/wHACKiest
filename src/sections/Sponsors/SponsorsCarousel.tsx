import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { LeftChevron, RightChevron } from "@/assets/img";
import { CarouselNav } from "@/components/base/CarouselNav";
import { mediaQueries, useDeviceSize } from "@/utils";
import { carouselSponsors } from "./sponsors";

interface ChevronWrapperProps {
  position: "left" | "right";
}

const SponsorsCarousel: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");
  const [currentShowcaseIndex, setCurrentShowcaseIndex] = useState(0);
  const [changed, setChanged] = useState(false);

  const toggleChanged = () => {
    setChanged(true);
    setTimeout(() => setChanged(false), 1);
  };

  const navigateBack = () => {
    setCurrentShowcaseIndex((prevIndex) => prevIndex - 1);
    toggleChanged();
  };

  const navigateForward = () => {
    setCurrentShowcaseIndex((prevIndex) => prevIndex + 1);
    toggleChanged();
  };

  const handleChevronClick = (
    e: React.MouseEvent,
    direction: "left" | "right"
  ) => {
    e.preventDefault();
    direction === "left" ? navigateBack() : navigateForward();
  };

  return (
    <SponsorCarouselContainer>
      <CarouselImageContainer>
        <ShowcaseSponsor
          href={carouselSponsors[currentShowcaseIndex].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatePresence exitBeforeEnter>
            <StyledAnimated
              key={currentShowcaseIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <StyledImage
                src={carouselSponsors[currentShowcaseIndex].src}
                alt={carouselSponsors[currentShowcaseIndex].alt}
                title={carouselSponsors[currentShowcaseIndex].title}
                loading="lazy"
              />
            </StyledAnimated>
          </AnimatePresence>
          {isTabletOrSmaller && (
            <>
              {currentShowcaseIndex > 0 && (
                <ChevronWrapper
                  position="left"
                  onClick={(e) => handleChevronClick(e, "left")}
                >
                  <ChevronImage
                    src={LeftChevron}
                    alt="Previous"
                    loading="lazy"
                  />
                </ChevronWrapper>
              )}
              {currentShowcaseIndex < carouselSponsors.length - 1 && (
                <ChevronWrapper
                  position="right"
                  onClick={(e) => handleChevronClick(e, "right")}
                >
                  <ChevronImage src={RightChevron} alt="Next" loading="lazy" />
                </ChevronWrapper>
              )}
            </>
          )}
        </ShowcaseSponsor>

        {!isTabletOrSmaller && (
          <CarouselNav
            numSlides={carouselSponsors.length}
            backCallback={navigateBack}
            forwardCallback={navigateForward}
            selectCallback={setCurrentShowcaseIndex}
            selected={currentShowcaseIndex}
            theme="light"
            looping={false}
          />
        )}
      </CarouselImageContainer>
      <FocusedCarouselTextContainer>
        {carouselSponsors[currentShowcaseIndex].text}
      </FocusedCarouselTextContainer>
    </SponsorCarouselContainer>
  );
};

const SponsorCarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 72px;
  padding: 0 62.5px;
  margin-bottom: 72px;

  ${mediaQueries.large} {
    padding: 0 44.25px;
    gap: 30px;
  }

  ${mediaQueries.medium} {
    padding: 0 40px;
    gap: 24px;
    margin-bottom: 40px;
  }

  ${mediaQueries.tablet} {
    padding: 0 36px;
    flex-direction: column;
    align-items: center;
    gap: 36px;
  }

  ${mediaQueries.mediumTablet} {
    padding: 0 32px;
  }

  ${mediaQueries.smallTablet} {
    padding: 0 28px;
  }

  ${mediaQueries.largeMobile} {
    padding: 0;
    gap: 24px;
    margin-bottom: 40px;
  }
`;

const CarouselImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  column-gap: 48px;
  width: 100%;
  max-width: 600px;

  ${mediaQueries.tablet} {
    width: 100%;
    max-width: 100%;
  }
`;

const ShowcaseSponsor = styled.a`
  position: relative;
  height: 359px;
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;

  ${mediaQueries.tablet} {
    width: 100%;
    max-width: 657px;
    height: 317px;
  }

  ${mediaQueries.largeMobile} {
    width: 100%;
    max-width: 358px;
    height: 156px;
    border-radius: 4.936px;
  }

  &:hover {
    transform: none;
  }
`;

const StyledAnimated = styled(motion.div)`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: 220px;
  }
`;

const StyledImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  margin: auto;

  ${mediaQueries.largeMobile} {
    max-width: 40%;
    max-height: 40%;
  }
`;

const ChevronWrapper = styled.div<ChevronWrapperProps>`
  position: absolute;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  ${(props) => (props.position === "left" ? "left: 0;" : "right: 0;")}
`;

const ChevronImage = styled.img`
  margin: auto;
`;

const FocusedCarouselTextContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 519.5px;
  padding-bottom: 20px;

  ${mediaQueries.tablet} {
    max-width: 657px;
  }

  ${mediaQueries.largeMobile} {
    max-width: 358px;
    padding-bottom: 24px;
  }
`;

export default SponsorsCarousel;

