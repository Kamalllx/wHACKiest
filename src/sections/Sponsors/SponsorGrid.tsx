import React from "react";
import styled from "styled-components";
import { mediaQueries } from "@/utils";
import { Heading2 } from "../../styles";
import {
  bronzeSponsors,
  goldSponsors,
  partners,
  silverSponsors,
  startupSponsors,
} from "./sponsors";

interface Sponsor {
  src: string;
  alt: string;
  title: string;
  link: string;
}

const SponsorGrid: React.FC = () => {
  const groupSponsors = (sponsors: Sponsor[], groupSize: number) =>
    sponsors.reduce<Sponsor[][]>(
      (acc, _, i) =>
        i % groupSize === 0 ? [...acc, sponsors.slice(i, i + groupSize)] : acc,
      []
    );

  const silverGroups = groupSponsors(silverSponsors, 2);
  const bronzeGroups = groupSponsors(bronzeSponsors, 3);
  const startupGroups = groupSponsors(startupSponsors, 4);
  const partnerGroups = groupSponsors(partners, 4);

  return (
    <>
      {/* Gold Sponsors */}
      {goldSponsors.map((sponsor) => (
        <SponsorRow key={sponsor.title}>
          <StyledSponsor
            num={1}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SponsorImage
              src={sponsor.src}
              alt={sponsor.alt}
              title={sponsor.title}
              loading="lazy"
            />
          </StyledSponsor>
        </SponsorRow>
      ))}

      {/* Silver Sponsors */}
      {silverGroups.map((silverGroup, i) => (
        <SponsorRow key={i}>
          {silverGroup.map((sponsor) => (
            <StyledSponsor
              key={sponsor.title}
              num={2}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SponsorImage
                src={sponsor.src}
                alt={sponsor.alt}
                title={sponsor.title}
                loading="lazy"
              />
            </StyledSponsor>
          ))}
        </SponsorRow>
      ))}

      {/* Bronze Sponsors */}
      {bronzeGroups.map((bronzeGroup, i) => (
        <SponsorRow key={i}>
          {bronzeGroup.map((sponsor) => (
            <StyledSponsor
              key={sponsor.title}
              num={3}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SponsorImage
                src={sponsor.src}
                alt={sponsor.alt}
                title={sponsor.title}
                loading="lazy"
              />
            </StyledSponsor>
          ))}
        </SponsorRow>
      ))}

      {/* Startup Sponsors */}
      {startupGroups.map((startupGroup, i) => (
        <SponsorRow key={i}>
          {startupGroup.map((sponsor) => (
            <StyledSponsor
              key={sponsor.title}
              num={4}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SponsorImage
                src={sponsor.src}
                alt={sponsor.alt}
                title={sponsor.title}
                loading="lazy"
              />
            </StyledSponsor>
          ))}
        </SponsorRow>
      ))}

      <Heading2White $marginBottom="72px" $mobileMarginBottom="40px">
        ...and more to come
      </Heading2White>
      <Heading2White $marginBottom="32px" $mobileMarginBottom="24px">
        Our partners
      </Heading2White>

      {/* Partners */}
      {partnerGroups.map((partnerGroup, i) => (
        <SponsorRow key={i}>
          {partnerGroup.map((partner) => (
            <StyledSponsor
              key={partner.title}
              num={3}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SponsorImage
                src={partner.src}
                alt={partner.alt}
                title={partner.title}
                loading="lazy"
              />
            </StyledSponsor>
          ))}
        </SponsorRow>
      ))}
    </>
  );
};

const SponsorImage = styled.img`
  max-width: 80%;
  max-height: 80%;

  ${mediaQueries.mediumTablet} {
    max-width: 70%;
    max-height: 70%;
  }

  ${mediaQueries.largeMobile} {
    max-width: 60%;
    max-height: 60%;
  }
`;

const Sponsor = styled.a`
  transform: scale(1);
  background-color: white;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const SponsorRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 62.5px;
  gap: 48px;
  margin-bottom: 48px;

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
    gap: 20px;
    margin-bottom: 32px;
  }

  ${mediaQueries.mediumTablet} {
    padding: 0 32px;
    gap: 16px;
    margin-bottom: 24px;
  }

  ${mediaQueries.smallTablet} {
    padding: 0 28px;
    gap: 12px;
    margin-bottom: 16px;
  }

  ${mediaQueries.largeMobile} {
    padding: 0;
    gap: 8px;
    margin-bottom: 8px;
  }
`;

const sponsorImageHeight = (num: number, breakpoint: "tablet" | "mobile") => {
  const heights: Record<
    "tablet" | "mobile",
    { [key: number]: string; default: string }
  > = {
    tablet: {
      1: "20vw",
      2: "20vw",
      3: "20vw",
      4: "15vw",
      default: "20vw",
    },
    mobile: {
      1: "127.55px",
      2: "111.058px",
      3: "64.7px",
      4: "62px",
      default: "127.55px",
    },
  };

  return heights[breakpoint][num] || heights[breakpoint].default;
};

const StyledSponsor = styled(Sponsor)<{ num: number }>`
  height: 194px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: calc(
    (100% - ${(props) => (props.num - 1) * 48}px) / ${(props) => props.num}
  );

  ${mediaQueries.large} {
    width: calc(
      (100% - ${(props) => (props.num - 1) * 30}px) / ${(props) => props.num}
    );
  }

  ${mediaQueries.medium} {
    height: ${({ num }) => sponsorImageHeight(num, "tablet")};
    width: calc(
      (100% - ${(props) => (props.num - 1) * 24}px) / ${(props) => props.num}
    );
  }

  ${mediaQueries.tablet} {
    height: ${({ num }) => sponsorImageHeight(num, "tablet")};
    border-radius: 3vw;
    width: calc(
      (100% - ${(props) => (props.num - 1) * 20}px) / ${(props) => props.num}
    );
  }

  ${mediaQueries.mediumTablet} {
    height: ${({ num }) => sponsorImageHeight(num, "tablet")};
    width: 100%;
  }

  ${mediaQueries.largeMobile} {
    height: ${({ num }) => sponsorImageHeight(num, "mobile")};
    border-radius: 5.841px;
    width: 100%;
  }
`;

const Heading2White = styled(Heading2)<{
  $marginBottom?: string;
  $mobileMarginBottom?: string;
}>`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "0"};

  ${mediaQueries.largeMobile} {
    margin-bottom: ${({ $mobileMarginBottom }) => $mobileMarginBottom || "0px"};
  }
`;

export default SponsorGrid;

