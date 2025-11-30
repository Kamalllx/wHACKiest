import React, { useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import hackerTestimonialsData from "./hackerTestimonials";
import { CarouselNav } from "@/components/base/CarouselNav";
import { Heading2, LargeBodyMedium, Body } from "@/styles";
import { CloseQuote, OpenQuote, BlocksBackground } from "@/assets/img";
import { mediaQueries } from "@/utils";

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const previousIndex = useCallback(() => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + hackerTestimonialsData.length) %
        hackerTestimonialsData.length
    );
  }, []);

  const nextIndex = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex + 1) % hackerTestimonialsData.length
    );
  }, []);

  return (
    <TestimonialCarouselContainer>
      <BlocksContainer>
        {hackerTestimonialsData.map((testimonial, index) => (
          <StyledBlockContainer
            key={testimonial.id}
            style={imageStyles[index].position}
          >
            <ImageBlock
              src={testimonial.image}
              alt={testimonial.name}
              $isActive={index === activeIndex}
              $baseRotation={imageStyles[index].rotation}
              $baseWidth={imageStyles[index].baseWidth}
              $baseWidthMobile={imageStyles[index].baseWidthMobile}
              onClick={() => handleIndexChange(index)}
            />
          </StyledBlockContainer>
        ))}
      </BlocksContainer>
      <ContentContainer>
        <TitleContainer>
          <LogoImg
            src={hackerTestimonialsData[activeIndex].logo}
            alt={`${hackerTestimonialsData[activeIndex].name} logo`}
          />
          <Dash>-</Dash>
          <Heading2>{hackerTestimonialsData[activeIndex].name}</Heading2>
        </TitleContainer>
        <LargeBodyMediumStyled>
          {hackerTestimonialsData[activeIndex].tagline}
        </LargeBodyMediumStyled>
        <QuoteContainer>
          <QuoteImg $align="start" src={OpenQuote} alt="Open Quote" />
          <StyledBody>
            {hackerTestimonialsData[activeIndex].description}
          </StyledBody>
          <QuoteImg $align="end" src={CloseQuote} alt="Close Quote" />
        </QuoteContainer>
        <CarouselNav
          numSlides={hackerTestimonialsData.length}
          backCallback={previousIndex}
          forwardCallback={nextIndex}
          selectCallback={handleIndexChange}
          selected={activeIndex}
          theme="dark"
          looping={true}
        />
      </ContentContainer>
    </TestimonialCarouselContainer>
  );
};

const imageStyles = [
  {
    position: { bottom: "15%", left: "35%" },
    rotation: "rotate(0deg)",
    baseWidth: "188.743px",
    baseWidthMobile: "90px",
  },
  {
    position: { top: "12%", right: "15%" },
    rotation: "rotate(10deg)",
    baseWidth: "146.97px",
    baseWidthMobile: "79.811px",
  },
  {
    position: { top: "9%", left: "15%" },
    rotation: "rotate(-15deg)",
    baseWidth: "132.388px",
    baseWidthMobile: "71.892px",
  },
];

const LargeBodyMediumStyled = styled(LargeBodyMedium)`
  max-width: 400px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary.navy};
`;

const TestimonialCarouselContainer = styled.div`
  display: flex;
  width: 1236px;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 1240px) {
    gap: 0px;
  }

  ${mediaQueries.medium} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 40px;
  }
`;

const BlocksContainer = styled.div`
  position: relative;
  height: 623px;
  width: 598px;
  flex: none;
  align-self: stretch;
  background-image: url(${BlocksBackground});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${mediaQueries.medium} {
    height: 670px;
    width: 738px;
    align-self: center;
  }

  @media (max-width: 740px) {
    height: 623px;
    width: 598px;
  }

  @media (max-width: 600px) {
    height: 423px;
    width: 398px;
  }

  ${mediaQueries.largeMobile} {
    height: 352px;
    width: 100%;
    max-width: 342px;
    align-self: center;
  }
`;

const floating = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

const StyledBlockContainer = styled.div`
  animation: ${floating} 2.5s ease-in-out infinite;
  position: absolute;
`;

const ImageBlock = styled.img<{
  $isActive: boolean;
  $baseRotation: string;
  $baseWidth: string;
  $baseWidthMobile: string;
}>`
  width: ${({ $baseWidth }) => $baseWidth};
  border-radius: 10px;
  transition: transform 0.3s ease;
  transform: ${({ $isActive, $baseRotation }) =>
    $isActive ? `scale(2.2) rotate(0deg)` : `scale(1) ${$baseRotation}`};
  cursor: pointer;
  display: block;

  ${({ $isActive, $baseRotation }) =>
    !$isActive &&
    `
    &:hover {
      transform: scale(1.1) ${$baseRotation};
    }
  `}

  @media (max-width: 600px) {
    width: ${({ $baseWidthMobile }) => `calc(${$baseWidthMobile} + 15px)`};
  }

  ${mediaQueries.largeMobile} {
    width: ${({ $baseWidthMobile }) => $baseWidthMobile};
  }
`;

const StyledBody = styled(Body)`
  color: ${({ theme }) => theme.colors.secondary.navy};
  line-height: 24px;
  font-size: 16px;

  ${mediaQueries.largeMobile} {
    line-height: 25.6px;
  }
`;

const LogoImg = styled.img`
  width: 120px;
  height: auto;
  object-fit: contain;

  ${mediaQueries.largeMobile} {
    width: 100px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  ${mediaQueries.largeMobile} {
    gap: 8px;
  }
`;

const Dash = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary.navy};

  ${mediaQueries.largeMobile} {
    font-size: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 598px;
  gap: 24px;
  flex: none;
  align-self: stretch;

  @media (max-width: 1240px) {
    max-width: 430px;
  }

  ${mediaQueries.medium} {
    width: 100%;
    max-width: 738px;
    align-self: center;
  }

  ${mediaQueries.largeMobile} {
    max-width: 342px;
    align-self: center;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  gap: 10px;
  align-self: stretch;
`;

const QuoteImg = styled.img<{ $align: "start" | "end" }>`
  align-self: ${({ $align }) => ($align === "start" ? "flex-start" : "flex-end")};
  width: 31.5px;
  height: 29.5px;
`;

export default TestimonialCarousel;

