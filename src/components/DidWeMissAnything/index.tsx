import * as Fathom from "fathom-client";
import React from "react";
import { MailingListSignup } from "@/components";
import { Icon } from "@/components/base";
import { SOCIALS } from "@/constants/social";
import { Body, Heading2, theme } from "@/styles";
import { mediaQueries, useWindowSize } from "@/utils";
import styled from "styled-components";

interface DidWeMissAnythingProps {
  isTravel?: boolean;
}

const Wrapper = styled.div`
  padding-top: 5%;
  margin: 0 auto;
  padding-bottom: 7%;
  width: 88%;
  max-width: 600px;
  
  ${mediaQueries.largeMobile} {
    width: 90%;
    padding: 20px 16px 40px;
  }
`;

const Heading = styled(Heading2)`
  color: ${theme.colors.text.light.white};
  
  ${mediaQueries.largeMobile} {
    font-size: 1.75rem;
    text-align: center;
  }
`;

const Subtext = styled(Body)`
  color: ${theme.colors.text.light.gray};
`;

const SubtextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2%;
  margin-bottom: 3%;
  
  ${mediaQueries.largeMobile} {
    justify-content: center;
    text-align: center;
  }
`;

const StyledLink = styled.a`
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.primary.cyan};
  width: fit-content;
  text-decoration: none;
  outline: none;
  transition: color 0.2s ease;
  
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${theme.colors.primary.blue};
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  
  ${mediaQueries.tablet} {
    width: 80%;
  }
  
  ${mediaQueries.largeMobile} {
    width: 100%;
    max-width: 280px;
    margin: 0 auto 20px;
    justify-content: center;
    gap: 24px;
  }
`;
const DidWeMissAnything: React.FC<DidWeMissAnythingProps> = ({
  isTravel = false,
}) => {
  const windowWidth = useWindowSize().windowWidth || 0;
  return (
    <Wrapper>
      <Heading>Did we miss anything?</Heading>
      <SubtextWrapper>
        <Subtext>Reach out to us at&nbsp;</Subtext>
        {isTravel ? (
          <StyledLink
            href="mailto:travel@coderit.org"
            onClick={
              () => Fathom.trackEvent("Sign Up: Clicked Travel Contact") // Sign Up: Clicked Travel Contact
            }
          >
            travel@coderit.org
          </StyledLink>
        ) : (
          <StyledLink
            href="mailto:hello@coderit.org"
            onClick={
              () => Fathom.trackEvent("Sign Up: Clicked Email Contact") // Sign Up: Clicked Email Contact
            }
          >
coderit.netlify.app   </StyledLink>
        )}
      </SubtextWrapper>
      <SocialsWrapper>
        {Object.entries(SOCIALS).map(
          ([id, { icon, link, fathomEventName }]) => (
            <a
              key={id}
              href={link}
              aria-label={id}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Fathom.trackEvent(fathomEventName)}
            >
              <Icon
                name={icon}
                color={theme.colors.text.light.gray}
                hover={true}
                hoverColor={theme.colors.primary.cyan}
              />
            </a>
          )
        )}
      </SocialsWrapper>
      <MailingListSignup
        placeholder={
          windowWidth > 1125
            ? "Sign up for the latest from wHACKiest!"
            : "Sign up for the latest!"
        }
      >
        <p>Submit</p>
      </MailingListSignup>
    </Wrapper>
  );
};

export default DidWeMissAnything;


