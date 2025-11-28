import debounce from "lodash.debounce";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import Scrollspy from "react-scrollspy";
import { CloudRightImg } from "@/assets/img";
import { DidWeMissAnything, Navbar } from "@/components";
import { Layout } from "@/components/base";
import ContentWrapper from "@/components/base/Layout/ContentWrapper";
import PageWrapper from "@/components/base/Layout/PageWrapper";
import { NAVBAR_HEIGHT_PX } from "@/components/Navbar/constants";
import { Heading1 } from "@/styles";
import { theme } from "@/styles";
import { mediaQueries } from "@/utils";
import { useScrollDirection } from "@/utils";
import { ScrollDirection } from "@/utils/hooks/useScrollDirection";
import styled, { css } from "styled-components";

interface InfoPageProps {
  sections: { id: string; title: string }[];
  content: string;
  title: string;
}

const InfoPageWrapper = styled(PageWrapper)`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 120px;

  ${mediaQueries.tablet} {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Heading: React.FC<{
  level: number;
  children: React.ReactElement<{ value: string }>[];
}> = (props) => {
  return React.createElement(
    `h${props.level}`,
    {
      id: props.children[0].props.value
        .split(" ")
        .map((s: string) => s.toLowerCase())
        .join("-"),
    },
    props.children
  );
};

const Title = styled(Heading1)`
  color: white;
`;

const Sidebar = styled.div<{ shiftUp: boolean }>`
  display: flex;
  width: 150px;
  top: 100px;
  position: sticky;
  align-self: flex-start;
  margin-right: 75px;

  transition: transform 250ms;
  transform: translateY(
    ${({ shiftUp }) => (shiftUp ? -NAVBAR_HEIGHT_PX : 0)}px
  );

  ${mediaQueries.tablet} {
    display: none;
  }
`;

const SectionWrapper = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

const StyledLink = styled.a<{ isBlue: boolean }>`
  line-height: 150%;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20%;
  text-decoration: underline;
  ${({ isBlue }) =>
    isBlue
      ? css`
          color: ${theme.colors.primary.blue};
        `
      : css`
          color: ${theme.colors.text.dark.white};
        `}
  &:hover,
    &:focus {
    cursor: pointer;
  }
`;

const Content = styled.div<{ children: React.ReactNode }>`
  padding: 0px;
  line-height: 180%;
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 40px;
  color: ${theme.colors.text.dark.white};
  h1 {
    font-family: "Castledown";
    font-size: 48px;
    font-weight: 900;

    ${mediaQueries.tablet} {
      font-size: 36px;
    }

    ${mediaQueries.largeMobile} {
      font-size: 24px;
    }
  }
  h2 {
    margin: 0px;
    font-family: "Castledown";
    font-size: 36px;
    font-weight: 900;
    padding-top: 60px;
    padding-bottom: 20px;

    ${mediaQueries.tablet} {
      font-size: 24px;
    }
  }
  h3 {
    font-family: "Castledown";
    font-size: 24px;
    font-weight: 900;

    ${mediaQueries.tablet} {
      font-size: 20px;
    }
    padding-top: 10px;
  }
  p {
    padding: 5px 0;
  }
  hr {
    border-style: none;
    height: 1px;
    margin-top: 3rem;
  }
  a {
    color: ${theme.colors.text.dark.white};
    &:hover {
      transition: opacity 200ms;
      &:not(:disabled) {
        opacity: 0.85;
      }
    }
    text-decoration: underline;
  }
  ol,
  ul {
    list-style: initial;
    margin: initial;
    padding: revert;

    ${mediaQueries.mobile} {
      padding-left: 30px;
    }
  }
  ${mediaQueries.tablet} {
    margin-left: 0;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: justify;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Cloud = styled.img`
  width: 120%;
  grid-row-start: 1;
  grid-column-start: 1;
  margin-left: -60px;
  margin-top: -250px;
  z-index: -5;

  ${mediaQueries.large} {
    margin-top: -200px;
  }

  ${mediaQueries.medium} {
    width: 150%;
    margin-top: -180px;
    margin-left: -100px;
  }

  ${mediaQueries.tablet} {
    margin-left: -150px;
    margin-top: -150px;
  }

  ${mediaQueries.mediumTablet} {
    width: 170%;
    margin-left: -30%;
  }

  ${mediaQueries.smallTablet} {
    margin-top: -150px;
  }

  ${mediaQueries.custom(490)} {
    width: 220%;
    margin-left: -40%;
  }
`;

const InputWrapper = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  margin-top: 200px;
  margin-left: 200px;

  ${mediaQueries.large} {
    margin-top: 20%;
    margin-left: 150px;
  }

  ${mediaQueries.custom(1264)} {
    margin-top: 14%;
    margin-left: 100px;
  }

  ${mediaQueries.custom(1105)} {
    margin-top: 7%;
  }

  ${mediaQueries.medium} {
    margin-top: 17%;
    margin-left: 50px;
  }

  ${mediaQueries.custom(880)} {
    margin-top: 10%;
    margin-left: 25px;
  }

  ${mediaQueries.tablet} {
    margin-top: 25%;
    margin-left: 13%;
  }

  ${mediaQueries.custom(690)} {
    margin-top: 20%;
    margin-left: 5%;
    width: 110%;
  }

  ${mediaQueries.custom(490)} {
    width: 120%;
    margin-top: 35%;
    margin-left: 0;
  }

  ${mediaQueries.mobile} {
    margin-top: 30%;
  }

  ${mediaQueries.custom(330)} {
    margin-top: 20%;
  }
`;

const InfoPage: React.FC<InfoPageProps> = ({ title, content, sections }) => {
  const scrollDirection = useScrollDirection();
  const [isScrolledDown, setScrolledDown] = useState(false);
  const [curSection, setCurSection] = useState<string>();
  const clickInProgress = useRef(false);

  /**
   * Change the appearance of the nav bar when a user
   * scrolls down the page.
   */
  const checkScrolledDown = () => {
    const hasScrolledDown = window.scrollY > 0;
    setScrolledDown(hasScrolledDown);
  };

  const debouncedCheckScrollDown = debounce(checkScrolledDown, 250);

  useEffect(() => {
    window.addEventListener("scroll", debouncedCheckScrollDown);
    checkScrolledDown();

    return () => window.removeEventListener("scroll", debouncedCheckScrollDown);
  }, [debouncedCheckScrollDown]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onScrollSpyUpdate = (el: HTMLElement) => {
    if (!clickInProgress.current) {
      setCurSection((el as HTMLElement)?.id); // types for react-scrollspy are incorrect
    }
  };

  const handleLinkClick = (id: string) => {
    clickInProgress.current = true;
    setCurSection(id);
    setTimeout(() => {
      clickInProgress.current = false;
    }, 1000);
  };

  return (
    <Layout>
      <Navbar notMainPage />
      <InfoPageWrapper style={{ background: theme.colors.secondary.navy }}>
        <ContentWrapper>
          <Flex>
            <div>
              <Sidebar
                shiftUp={
                  isScrolledDown && scrollDirection === ScrollDirection.DOWN
                }
              >
                <Scrollspy
                  items={sections.map(({ id }) => id)}
                  onUpdate={onScrollSpyUpdate}
                  componentTag={FlexColumn}
                  currentClassName="active"
                >
                  {sections
                    .slice()
                    .reverse()
                    .map(({ id, title }) => (
                      <StyledLink
                        key={id}
                        href={`#${id}`}
                        isBlue={curSection === id}
                        onClick={() => handleLinkClick(id)}
                      >
                        {title}
                      </StyledLink>
                    ))}
                </Scrollspy>
              </Sidebar>
            </div>
            <SectionWrapper>
              <Title>{title}</Title>
              <Content>
                <ReactMarkdown
                  source={content}
                  renderers={{ heading: Heading }}
                />
              </Content>
              <div
                style={{
                  width: "100%",
                  maxWidth: "1000px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                }}
              >
                <Cloud src={CloudRightImg} alt="cloud" />
                <InputWrapper>
                  <DidWeMissAnything isTravel={title === "Travel Guidelines"} />
                </InputWrapper>
              </div>
            </SectionWrapper>
          </Flex>
        </ContentWrapper>
      </InfoPageWrapper>
    </Layout>
  );
};

export default InfoPage;

