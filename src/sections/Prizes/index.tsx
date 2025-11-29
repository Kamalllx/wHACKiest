"use client";

import React from "react";
import styled from "styled-components";
import { ContentWrapper, SectionWrapper } from "@/components/base";
import { Heading1, Heading2, LargeBodyMedium, theme } from "@/styles";
import { mediaQueries } from "@/utils/responsive";

const Prizes: React.FC = () => {
  return (
    <SectionWrapper id="prizes">
      <StyledContentWrapper>
        <HeadingContainer>
          <Heading1>Prize Pool</Heading1>
          <StyledSubheading>₹50,000 in prizes!</StyledSubheading>
        </HeadingContainer>

        <PrizesGrid>
          <PrizeCard $rank="first">
            <PrizeRank>🥇</PrizeRank>
            <PrizeTitle>1st Place</PrizeTitle>
            <PrizeAmount>₹18,000</PrizeAmount>
          </PrizeCard>

          <PrizeCard $rank="second">
            <PrizeRank>🥈</PrizeRank>
            <PrizeTitle>2nd Place</PrizeTitle>
            <PrizeAmount>₹12,000</PrizeAmount>
          </PrizeCard>

          <PrizeCard $rank="third">
            <PrizeRank>🥉</PrizeRank>
            <PrizeTitle>3rd Place</PrizeTitle>
            <PrizeAmount>₹10,000</PrizeAmount>
          </PrizeCard>

          <PrizeCard $rank="special">
            <PrizeRank>⭐</PrizeRank>
            <PrizeTitle>Best Freshers Team</PrizeTitle>
            <PrizeAmount>₹5,000</PrizeAmount>
          </PrizeCard>

          <PrizeCard $rank="special">
            <PrizeRank>👩‍💻</PrizeRank>
            <PrizeTitle>Best Female Team</PrizeTitle>
            <PrizeAmount>₹5,000</PrizeAmount>
          </PrizeCard>
        </PrizesGrid>

        <AdditionalInfo>
          <InfoText>
            All participants receive certificates, swag, and access to workshops & mentorship!
          </InfoText>
        </AdditionalInfo>
      </StyledContentWrapper>
    </SectionWrapper>
  );
};

const StyledContentWrapper = styled(ContentWrapper)`
  width: 100%;
  max-width: 1200px;
  padding: 120px 24px 80px 24px;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  position: relative;
  z-index: 20;

  ${mediaQueries.medium} {
    padding: 80px 24px 60px 24px;
    margin-top: 250px;
    gap: 32px;
  }

  ${mediaQueries.largeMobile} {
    margin-top: 200px;
  }
`;

const HeadingContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledSubheading = styled(Heading2)`
  color: ${theme.colors.primary.yellow};
`;

const PrizesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 900px;

  ${mediaQueries.medium} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.largeMobile} {
    grid-template-columns: 1fr;
    max-width: 350px;
  }
`;

interface PrizeCardProps {
  $rank: "first" | "second" | "third" | "special";
}

const PrizeCard = styled.div<PrizeCardProps>`
  background: ${({ $rank }) => {
    switch ($rank) {
      case "first":
        return "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)";
      case "second":
        return "linear-gradient(135deg, #C0C0C0 0%, #A8A8A8 100%)";
      case "third":
        return "linear-gradient(135deg, #CD7F32 0%, #B87333 100%)";
      default:
        return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    }
  }};
  border-radius: 20px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }

  ${({ $rank }) =>
    $rank === "special" &&
    `
    grid-column: span 1;
  `}

  ${mediaQueries.medium} {
    padding: 24px 20px;
  }
`;

const PrizeRank = styled.div`
  font-size: 48px;

  ${mediaQueries.medium} {
    font-size: 40px;
  }
`;

const PrizeTitle = styled.h3`
  font-family: "Castledown", sans-serif;
  font-size: 20px;
  color: white;
  text-align: center;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  ${mediaQueries.medium} {
    font-size: 18px;
  }
`;

const PrizeAmount = styled.div`
  font-family: "Castledown", sans-serif;
  font-size: 32px;
  color: white;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  ${mediaQueries.medium} {
    font-size: 28px;
  }
`;

const AdditionalInfo = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px 32px;
  max-width: 600px;
  text-align: center;
`;

const InfoText = styled(LargeBodyMedium)`
  color: white;
`;

export default Prizes;
