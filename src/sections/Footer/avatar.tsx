import React, { ComponentPropsWithoutRef } from "react";
import styled, { keyframes } from "styled-components";

import { Organizer } from "./constants";

interface AvatarProps extends ComponentPropsWithoutRef<"img"> {
  name: string;
  selectedOrganizer: Organizer | null;
  handleOnHover: () => void;
  handleOnLeave: () => void;
  isMediumOrSmaller: boolean | undefined;
  handleMobileClick: () => void;
}

interface AvatarContainerProps {
  faded: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  className,
  selectedOrganizer,
  handleOnHover,
  handleOnLeave,
  isMediumOrSmaller,
  name,
  ...rest
}) => {
  return (
    <AvatarWrapper {...rest}>
      {isMediumOrSmaller ? (
        <button
          className="handler"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleOnHover();
          }}
        >
          <AvatarContainer
            className={className}
            faded={
              selectedOrganizer === null
                ? false
                : selectedOrganizer.name !== name
            }
          >
            <AvatarImage loading="lazy" src={src} alt={`Headshot of ${name}`} />
          </AvatarContainer>
        </button>
      ) : (
        <div
          className="handler"
          onMouseEnter={() => handleOnHover()}
          onMouseLeave={() => handleOnLeave()}
        >
          <AvatarContainer
            className={className}
            faded={
              selectedOrganizer === null
                ? false
                : selectedOrganizer.name !== name
            }
          >
            <AvatarImage loading="lazy" src={src} alt={`Headshot of ${name}`} />
          </AvatarContainer>
        </div>
      )}
    </AvatarWrapper>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0.5;
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
    opacity: 0.5;
  }
`;

const AvatarWrapper = styled.div`
  .handler {
    background: none;
    border: none;
    padding: 0;
    border-radius: 50%;
  }
`;

const AvatarContainer = styled.div<AvatarContainerProps>`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.secondary.navy};

  width: 60px;
  height: 60px;

  @media (max-width: 1024px) {
    width: 48px;
    height: 48px;
  }

  animation: ${({ faded }) => (faded ? fadeOut : fadeIn)} 0.2s ease-out forwards;
  transition: border-color 0.2s ease-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.white};
    transition: border-color 0.2s ease-out;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
`;

export default Avatar;

