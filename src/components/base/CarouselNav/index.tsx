import React from "react";
import {
  LeftChevronIcon,
  RightChevronIcon,
  SelectedDotIcon,
} from "@/assets/icons";
import styled from "styled-components";
import { theme } from "@/styles";

export type CarouselNavProps = {
  numSlides: number;
  backCallback: () => void;
  forwardCallback: () => void;
  selectCallback: (num: number) => void;
  selected: number;
  theme: "dark" | "light";
  looping: boolean;
};

const StyledLeftChevronIcon = styled(LeftChevronIcon)<{ color: string }>`
  fill: ${(props) => props.color};
`;

const StyledRightChevronIcon = styled(RightChevronIcon)<{ color: string }>`
  fill: ${(props) => props.color};
`;

const StyledSelectedDotIcon = styled(SelectedDotIcon)<{ color: string }>`
  fill: ${(props) => props.color};
`;

export const CarouselNav: React.FC<CarouselNavProps> = (props) => {
  // display selected page
  const selection = Array.from({ length: props.numSlides }, () => false);
  selection[props.selected] = true;

  // opacity values
  const ENABLED_OPACITY = 1;
  const SELECTED_OPACITY = 0.9;
  const DISABLED_OPACITY = 0.5;

  const firstSlide = props.selected === 0;
  const lastSlide = props.selected === props.numSlides - 1;

  const IconColour =
    props.theme === "dark"
      ? theme.colors.secondary.navy
      : theme.colors.secondary.white;

  return (
    <CarouselNavWrapper>
      <StyledChevronWrapper
        aria-label="Previous slide"
        disabled={!props.looping && firstSlide}
        style={{
          opacity:
            !props.looping && firstSlide ? DISABLED_OPACITY : ENABLED_OPACITY,
        }}
        onClick={props.backCallback}
      >
        <StyledLeftChevronIcon color={IconColour} />
      </StyledChevronWrapper>
      {selection.map((sel, i) => (
        <InlineButton
          aria-label={`Go to slide ${i + 1}`}
          key={i}
          style={{
            opacity: sel ? SELECTED_OPACITY : DISABLED_OPACITY,
            cursor: props.selected !== i ? "pointer" : "default",
          }}
          onClick={() => {
            props.selectCallback(i);
          }}
        >
          <StyledSelectedDotIcon color={IconColour} />
        </InlineButton>
      ))}
      <StyledChevronWrapper
        aria-label="Next slide"
        disabled={!props.looping && lastSlide}
        style={{
          opacity:
            !props.looping && lastSlide ? DISABLED_OPACITY : ENABLED_OPACITY,
        }}
        onClick={props.forwardCallback}
      >
        <StyledRightChevronIcon color={IconColour} />
      </StyledChevronWrapper>
    </CarouselNavWrapper>
  );
};

const InlineButton = styled.button`
  display: inline;
  background: transparent;
  border-style: none;
  box-shadow: none;
`;

const StyledChevronWrapper = styled.button`
  cursor: default;
  border-style: none;
  border-radius: 50%;
  background: transparent;
  padding: 2px;
  transition: background 0.1s ease-in-out;
  margin: 0 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover:not([disabled]) {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const CarouselNavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
`;

