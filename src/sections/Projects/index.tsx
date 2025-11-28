import * as Fathom from "fathom-client";
import React, { useEffect, useRef, useState } from "react";
import {
  BigTextCutout,
  BiggerTextCutout,
  Cloud1,
  Cloud2,
  Cloud4,
  Connex1,
  Connex2,
  Connex3,
  Connex4,
  DreamWeaver1,
  DreamWeaver2,
  DreamWeaver3,
  ScaNFT1,
  ScaNFT2,
  ScaNFT3,
  ScaNFT4,
  Trapezoid1,
  Trapezoid2,
  Trapezoid3,
} from "@/assets/img";
import { Button, ContentWrapper, SectionWrapper } from "@/components/base";
import { SectionId } from "@/constants";
import {
  Heading1,
  Heading2,
  LargeBodyBold,
  LargeBodyMedium,
  theme,
} from "@/styles";
import { mediaQueries, useWindowSize } from "@/utils";
import styled, { css, keyframes } from "styled-components";

export const MOBILE_VIEW_WIDTH = 600;

const Projects: React.FC = () => {
  const [section, setSection] = useState<number>(1);
  const { windowWidth } = useWindowSize();
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, 3);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const nextIndex = (index + 1) % projectRefs.current.length;
      projectRefs.current[nextIndex]?.focus();
      setSection(nextIndex + 1);
    }
  };

  return (
    <SectionWrapper id={SectionId.PROJECTS}>
      <CloudImg1 src={Cloud1} alt="misty transparent cloud" loading="lazy" />
      <CloudImg2 src={Cloud4} alt="misty transparent cloud" loading="lazy" />
      <CloudImg3 src={Cloud1} alt="misty transparent cloud" loading="lazy" />
      <CloudImg4 src={Cloud2} alt="misty transparent cloud" loading="lazy" />
      <ContentWrapper style={{ marginBottom: "100px" }}>
        <HeadingContainer>
          <TitleContainer>
            <Heading1>Dream</Heading1>
            <TextCutout
              src={BigTextCutout}
              alt="big"
              aria-label="big"
              loading="lazy"
            />
            <Heading1>and build </Heading1>
            <TextCutout
              src={BiggerTextCutout}
              alt="bigger"
              aria-label="bigger"
              loading="lazy"
            />
          </TitleContainer>
          <BodyTextWrapper>
            <BodyText>
              Every year, we strive to support hackers around the world to
              create something amazing!{" "}
              {windowWidth && windowWidth > 1024 && <br />}
              Check out some of the incredible projects that have come to life
              at wHACKiest:
            </BodyText>
          </BodyTextWrapper>
        </HeadingContainer>

        <TableWrapper>
          <ProjectsContainer>
            <PinkNavigationBar />
            <YellowNavigationBar />
            <NavyNavigationBar />
            <WarmWhiteNavigationBar active={section === 3} />
            <OffWhiteNavigationBar active={section === 1} />

            <Project3TrapezoidContainer>
              <TrapezoidImage
                onClick={() => {
                  setSection(3);
                  Fathom.trackEvent(
                    "Projects: Project 3 (ConnexSci) tab clicked"
                  );
                }}
                onKeyDown={(e) => handleKeyDown(e, 2)}
                tabIndex={0}
                ref={(el) => (projectRefs.current[2] = el)}
                loading="lazy"
                src={Trapezoid3}
                alt="project 3 tab"
                aria-label="Open project 3"
              />
              <Project3Text
                onClick={() => {
                  setSection(3);
                  Fathom.trackEvent(
                    "Projects: Project 3 (ConnexSci) tab clicked"
                  );
                }}
              >
                PROJECT 3
              </Project3Text>
            </Project3TrapezoidContainer>

            <Project2TrapezoidContainer active={section === 2 || section === 1}>
              <TrapezoidImage
                onClick={() => {
                  setSection(2);
                  Fathom.trackEvent(
                    "Projects: Project 2 (DreamWeaver) tab clicked"
                  );
                }}
                onKeyDown={(e) => handleKeyDown(e, 1)}
                tabIndex={0}
                ref={(el) => (projectRefs.current[1] = el)}
                loading="lazy"
                src={Trapezoid2}
                alt="project 2 tab"
                aria-label="Open project 2"
              />
              <Project2Text
                onClick={() => {
                  setSection(2);
                  Fathom.trackEvent(
                    "Projects: Project 2 (DreamWeaver) tab clicked"
                  );
                }}
              >
                PROJECT 2
              </Project2Text>
            </Project2TrapezoidContainer>

            <Project1TrapezoidContainer active={section === 1}>
              <TrapezoidImage
                onClick={() => {
                  setSection(1);
                  Fathom.trackEvent("Projects: Project 1 (ScaNFT) tab clicked");
                }}
                onKeyDown={(e) => handleKeyDown(e, 0)}
                tabIndex={0}
                ref={(el) => (projectRefs.current[0] = el)}
                loading="lazy"
                src={Trapezoid1}
                alt="project 1 tab"
                aria-label="Open project 1"
              />
              <Project1Text
                onClick={() => {
                  setSection(1);
                  Fathom.trackEvent("Projects: Project 1 (ScaNFT) tab clicked");
                }}
              >
                PROJECT 1
              </Project1Text>
            </Project1TrapezoidContainer>

            <Project3Section>
              <Project3Container>
                <LeftProjectContainer>
                  <ProjectImage
                    src={Connex1}
                    loading="lazy"
                    alt="connex project showcase"
                  />
                  {windowWidth && windowWidth > MOBILE_VIEW_WIDTH && (
                    <>
                      <ProjectImage
                        src={Connex2}
                        alt="connex project showcase"
                        loading="lazy"
                      />
                      <ProjectImage
                        src={Connex3}
                        alt="connex project showcase"
                        loading="lazy"
                      />
                      <ProjectImage
                        src={Connex4}
                        alt="connex project showcase"
                        loading="lazy"
                      />
                    </>
                  )}
                </LeftProjectContainer>
                <RightProjectContainer>
                  <Project3Heading>ConnexSci</Project3Heading>
                  <Project3Body>
                    Highlighting underappreciated research using graph-based
                    analytics, these students created a unique graph covering
                    250,000 research papers, aiding users in making informed
                    decisions.
                  </Project3Body>
                  <ProjectLink
                    target="_blank"
                    href="https://devpost.com/software/connexsci-20nrjy"
                    rel="noreferrer"
                    onClick={() =>
                      Fathom.trackEvent(
                        "Projects: Project 3 (ConnexSci) link clicked"
                      )
                    }
                  >
                    <Button
                      color={theme.colors.text.dark.white}
                      text="View on Devpost"
                      size="medium"
                      classification="primary"
                    />
                  </ProjectLink>
                </RightProjectContainer>
              </Project3Container>
            </Project3Section>
            <Project2Section active={section !== 3}>
              <ProjectContainer>
                <LeftProjectContainer>
                  <ProjectImage
                    src={DreamWeaver1}
                    loading="lazy"
                    alt="DreamWeaver project showcase"
                  />
                  {windowWidth && windowWidth > MOBILE_VIEW_WIDTH && (
                    <>
                      <ProjectImage
                        src={DreamWeaver2}
                        alt="DreamWeaver project showcase"
                        loading="lazy"
                      />
                      <ProjectImage
                        src={DreamWeaver3}
                        alt="DreamWeaver project showcase"
                        loading="lazy"
                        style={{
                          gridColumn: "span 2",
                        }}
                      />
                    </>
                  )}
                </LeftProjectContainer>
                <RightProjectContainer>
                  <Heading2>DreamWeaver</Heading2>
                  <Project2Body>
                    Noticing the absence of accessible online picture books,
                    these students created AI generated text and images to
                    improve children’s education.
                  </Project2Body>
                  <ProjectLink
                    target="_blank"
                    href="https://devpost.com/software/dreamweaver"
                    rel="noreferrer"
                    onClick={() =>
                      Fathom.trackEvent(
                        "Projects: Project 2 (DreamWeaver) link clicked"
                      )
                    }
                  >
                    <Button
                      color={theme.colors.text.dark.white}
                      text="View on Devpost"
                      size="medium"
                      classification="primary"
                    />
                  </ProjectLink>
                </RightProjectContainer>
              </ProjectContainer>
            </Project2Section>
            <Project1Section active={section === 1}>
              <ProjectContainer>
                <LeftProjectContainer>
                  <ProjectImage
                    src={ScaNFT1}
                    loading="lazy"
                    alt="ScaNFT project showcase"
                  />
                  {windowWidth && windowWidth > MOBILE_VIEW_WIDTH && (
                    <>
                      <ProjectImage
                        src={ScaNFT2}
                        alt="ScaNFT project showcase"
                        loading="lazy"
                      />
                      <ProjectImage
                        src={ScaNFT3}
                        alt="ScaNFT project showcase"
                        loading="lazy"
                      />
                      <ProjectImage
                        src={ScaNFT4}
                        alt="ScaNFT project showcase"
                        loading="lazy"
                      />
                    </>
                  )}
                </LeftProjectContainer>
                <RightProjectContainer>
                  <Heading2>ScaNFT</Heading2>
                  <Project1Body>
                    Seeing an opportunity to use cryptocurrency to pay their
                    tuition, these students developed an automated system for
                    scanning, uploading, and minting NFTs using software and
                    hardware.
                  </Project1Body>
                  <ProjectLink
                    target="_blank"
                    href="https://devpost.com/software/scanft"
                    rel="noreferrer"
                    onClick={() =>
                      Fathom.trackEvent(
                        "Projects: Project 3 (ScaNFT) link clicked"
                      )
                    }
                  >
                    <Button
                      color={theme.colors.text.dark.white}
                      text="View on Devpost"
                      size="medium"
                      classification="primary"
                    />
                  </ProjectLink>
                </RightProjectContainer>
              </ProjectContainer>
            </Project1Section>
          </ProjectsContainer>
        </TableWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: wrap;
`;

const BodyText = styled(LargeBodyMedium)`
  color: ${({ theme }) => theme.colors.secondary.navy};
`;

const CloudImg1 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg2 = styled.img`
  position: absolute;
  left: 5%;
  top: 50%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg3 = styled.img`
  position: absolute;
  left: 0;
  top: 80%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const CloudImg4 = styled.img`
  position: absolute;
  right: 0;
  top: 30%;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
`;

const Project3Body = styled(LargeBodyMedium)`
  color: ${({ theme }) => theme.colors.secondary.white};
  margin-top: 10px;
  line-height: 32px;
  margin-bottom: 32px;
  ${mediaQueries.medium} {
    text-align: center;
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    margin-top: 0;
  }
`;

const Project2Body = styled(Project3Body)`
  color: ${({ theme }) => theme.colors.secondary.navy};
`;

const Project1Body = styled(Project2Body)`
  color: ${({ theme }) => theme.colors.secondary.navy};
`;

const Project3Heading = styled(Heading2)`
  color: ${({ theme }) => theme.colors.secondary.white};
`;

const ProjectImage = styled.img`
  object-fit: fill;
  object-position: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  ${mediaQueries.medium} {
    object-fit: contain;
    object-position: unset;
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const LeftProjectContainer = styled.div`
  display: grid;
  gap: 7px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: auto;
  flex-basis: 60%;
  overflow: hidden;
  ${mediaQueries.medium} {
    min-height: 0;
    flex-basis: unset;
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    max-height: unset;
    height: auto;
    flex-basis: unset;
    border-radius: 10px;
  }
`;

const RightProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  ${mediaQueries.medium} {
    align-items: center;
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    flex-basis: 60%;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-inline: 100px;
  gap: 10%;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  ${mediaQueries.custom(1700)} {
    padding-inline: 50px;
  }
  ${mediaQueries.large} {
    padding-inline: 50px;
  }
  ${mediaQueries.medium} {
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    padding: 24px;
    margin-top: 10px;
  }
`;

const Project3Container = styled(ProjectContainer)`
  padding-bottom: 60px;
`;

const Project3Section = styled.div`
  position: absolute;
  bottom: 0;
  height: 618px;
  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.secondary.navy};
  ${mediaQueries.medium} {
    height: 800px;
    transform: translateY(-32px);
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    height: 637px;
    transform: translateY(-32px);
  }
`;

const MoveSection2Down = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(527px);
  }
`;

const MoveSection2Up = keyframes`
  from {
    transform: translateY(527px);
  }
  to {
    transform: translateY(0);
  }
`;

const MoveSection2DownTablet = keyframes`
  0% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(767px);
  }
`;

const MoveSection2UpTablet = keyframes`
  from {
    transform: translateY(767px);
  }
  to {
    transform: translateY(-8px);
  }
`;

const MoveSection2DownMobile = keyframes`
  0% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(604px);
  }
`;

const MoveSection2UpMobile = keyframes`
  from {
    transform: translateY(604px);
  }
  to {
    transform: translateY(-8px);
  }
`;

const Project2Section = styled(Project3Section)<{ active: boolean }>`
  height: 558px;
  bottom: 30px;
  background-color: ${({ theme }) => theme.colors.primary.white};
  z-index: 2;
  ${({ active }) =>
    active
      ? css`
          animation: ${css`
            ${MoveSection2Up} 0.3s ease forwards;
          `};
        `
      : css`
          animation: ${css`
            ${MoveSection2Down} 0.3s ease forwards;
          `};
        `}
  ${mediaQueries.medium} {
    height: 825px;
    bottom: 0px;
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveSection2UpTablet} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveSection2DownTablet} 0.3s ease forwards;
            `};
          `}
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    height: 662px;
    bottom: 0px;
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveSection2UpMobile} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveSection2DownMobile} 0.3s ease forwards;
            `};
          `}
  }
`;

const MoveSection1Down = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(522px);
  }
`;

const MoveSection1Up = keyframes`
  from {
    transform: translateY(522px);
  }
  to {
    transform: translateY(0);
  }
`;

const MoveSection1DownTablet = keyframes`
  0% {
    transform: translateY(-1px);
  }
  100% {
    transform: translateY(769px);
  }
`;

const MoveSection1UpTablet = keyframes`
  from {
    transform: translateY(769px);
  }
  to {
    transform: translateY(-1px);
  }
`;

const MoveSection1DownMobile = keyframes`
  0% {
    transform: translateY(-1px);
  }
  100% {
    transform: translateY(606px);
  }
`;

const MoveSection1UpMobile = keyframes`
  from {
    transform: translateY(606px);
  }
  to {
    transform: translateY(-1px);
  }
`;

const Project1Section = styled(Project3Section)<{ active: boolean }>`
  height: 556px;
  background-color: ${({ theme }) => theme.colors.secondary.white};
  z-index: 3;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary.navy};
  ${({ active }) =>
    active
      ? css`
          animation: ${css`
            ${MoveSection1Up} 0.3s ease forwards;
          `};
        `
      : css`
          animation: ${css`
            ${MoveSection1Down} 0.3s ease forwards;
          `};
        `}
  ${mediaQueries.medium} {
    height: 800px;
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveSection1UpTablet} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveSection1DownTablet} 0.3s ease forwards;
            `};
          `}
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    height: 637px;
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveSection1UpMobile} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveSection1DownMobile} 0.3s ease forwards;
            `};
          `}
  }
`;

const Project3Text = styled(LargeBodyBold)`
  z-index: 1;
  color: ${({ theme }) => theme.colors.secondary.white};
  cursor: pointer;
  letter-spacing: 3.6px;
`;

const Project2Text = styled(Project3Text)`
  color: ${({ theme }) => theme.colors.text.light.black};
  white-space: nowrap;
`;

const Project1Text = styled(Project2Text)``;

const TrapezoidImage = styled.img`
  position: absolute;
  cursor: pointer;
`;

const Project3TrapezoidContainer = styled.div`
  position: absolute;
  z-index: 1;
  left: 30%;
  top: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQueries.medium} {
    top: 28px;
  }
  ${mediaQueries.tablet} {
    top: 30px;
  }
  ${mediaQueries.largeMobile} {
    left: 15%;
  }
`;

const MoveTrapezoid2Down = keyframes`
  0% {
    top: 54px;
    bottom: unset;
  }
  100% {
    transform: translateY(553px);
  }
`;

const MoveTrapezoid2Up = keyframes`
  from {
    transform: translateY(553px);
  }
  to {
    top: 54px;
    transform: translateY(-2px);
  }
`;

const MoveTrapezoid2DownTablet = keyframes`
  0% {
    top: 54px;
    bottom: unset;
  }
  100% {
    transform: translateY(802px);
  }
`;

const MoveTrapezoid2UpTablet = keyframes`
  from {
    transform: translateY(802px);
  }
  to {
    top: 54px;
    transform: translateY(0);
  }
`;

const MoveTrapezoid2DownMediumTablet = keyframes`
  0% {
    top: 54px;
    bottom: unset;
  }
  100% {
    transform: translateY(802px);
  }
`;

const MoveTrapezoid2UpMediumTablet = keyframes`
  from {
    transform: translateY(802px);
  }
  to {
    top: 54px;
    transform: translateY(3px);
  }
`;

const MoveTrapezoid2DownLargeMobile = keyframes`
  0% {
    top: 54px;
    bottom: unset;
  }
  100% {
    transform: translateY(639px);
  }
`;

const MoveTrapezoid2UpLargeMobile = keyframes`
  from {
    transform: translateY(639px);
  }
  to {
    top: 54px;
    transform: translateY(3px);
  }
`;

const Project2TrapezoidContainer = styled(Project3TrapezoidContainer)<{
  active: boolean;
}>`
  z-index: 30;
  left: 80%;
  ${({ active }) =>
    active
      ? css`
          animation: ${css`
            ${MoveTrapezoid2Up} 0.3s ease forwards;
          `};
        `
      : css`
          animation: ${css`
            ${MoveTrapezoid2Down} 0.3s ease forwards;
          `};
        `}
  ${mediaQueries.medium} {
    left: 60%;
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveTrapezoid2UpTablet} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveTrapezoid2DownTablet} 0.3s ease forwards;
            `};
          `}
  }
  ${mediaQueries.tablet} {
    left: 60%;
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveTrapezoid2UpMediumTablet} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveTrapezoid2DownMediumTablet} 0.3s ease forwards;
            `};
          `}
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveTrapezoid2UpLargeMobile} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveTrapezoid2DownLargeMobile} 0.3s ease forwards;
            `};
          `}
  }
  ${mediaQueries.largeMobile} {
    right: 30%;
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveTrapezoid2UpLargeMobile} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveTrapezoid2DownLargeMobile} 0.3s ease forwards;
            `};
          `}
  }
`;

const MoveTrapezoid1Down = keyframes`
  0% {
    top: 89px;
    bottom: unset;
  }
  100% {
    transform: translateY(582px);
  }
`;

const MoveTrapezoid1Up = keyframes`
  from {
    transform: translateY(582px);
  }
  to {
    top: 89px;
    transform: translateY(-2.5px);
  }
`;

const MoveTrapezoid1DownTablet = keyframes`
  0% {
    top: 89px;
    bottom: unset;
  }
  100% {
    transform: translateY(831px);
  }
`;

const MoveTrapezoid1UpTablet = keyframes`
  from {
    transform: translateY(831px);
  }
  to {
    top: 89px;
    transform: translateY(0px);
  }
`;

const MoveTrapezoid1DownMediumTablet = keyframes`
  0% {
    top: 89px;
    bottom: unset;
  }
  100% {
    transform: translateY(832px);
  }
`;

const MoveTrapezoid1UpMediumTablet = keyframes`
  from {
    transform: translateY(832px);
  }
  to {
    top: 89px;
    transform: translateY(3px);
  }
`;

const MoveTrapezoid1DownLargeMobile = keyframes`
  0% {
    top: 89px;
    bottom: unset;
  }
  100% {
    transform: translateY(668.5px);
  }
`;

const MoveTrapezoid1UpLargeMobile = keyframes`
  from {
    transform: translateY(668.5px);
  }
  to {
    top: 89px;
    transform: translateY(3px);
  }
`;

const Project1TrapezoidContainer = styled(Project3TrapezoidContainer)<{
  active: boolean;
}>`
  z-index: 21;
  left: 10%;
  ${({ active }) =>
    active
      ? css`
          animation: ${css`
            ${MoveTrapezoid1Up} 0.3s ease forwards;
          `};
        `
      : css`
          animation: ${css`
            ${MoveTrapezoid1Down} 0.3s ease forwards;
          `};
        `}
  ${mediaQueries.medium} {
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveTrapezoid1UpTablet} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveTrapezoid1DownTablet} 0.3s ease forwards;
            `};
          `}
  }
  ${mediaQueries.tablet} {
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveTrapezoid1UpMediumTablet} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveTrapezoid1DownMediumTablet} 0.3s ease forwards;
            `};
          `}
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveTrapezoid1UpLargeMobile} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveTrapezoid1DownLargeMobile} 0.3s ease forwards;
            `};
          `}
  }
  ${mediaQueries.largeMobile} {
    left: 12%;
    z-index: 30;
    ${({ active }) =>
      active
        ? css`
            animation: ${css`
              ${MoveTrapezoid1UpLargeMobile} 0.3s ease forwards;
            `};
          `
        : css`
            animation: ${css`
              ${MoveTrapezoid1DownLargeMobile} 0.3s ease forwards;
            `};
          `}
  }
`;

const NavyNavigationBar = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.navy};
  width: 100%;
  height: 30px;
  z-index: 10;
`;

const PinkNavigationBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.pink};
  width: 100%;
  height: 30px;
`;

const YellowNavigationBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.yellow};
  width: 100%;
  height: 30px;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary.navy};
`;

const WarmWhiteNavigationBar = styled.div<{ active: boolean }>`
  background-color: transparent;
  width: 100%;
  height: 30px;
  position: relative;
  z-index: -1;
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary.navy};
    `}
`;

const OffWhiteNavigationBar = styled.div<{ active: boolean }>`
  background-color: transparent;
  width: 100%;
  height: 30px;
  position: relative;
  z-index: 20;
`;

const TextCutout = styled.img`
  position: relative;
  top: 6px;
  margin-inline: 6px;
  ${mediaQueries.tablet} {
    height: 62px;
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    height: 55px;
  }
  ${mediaQueries.custom(480)} {
    height: 42px;
  }
  ${mediaQueries.mobile} {
    height: 35px;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.light.black};
`;

const BodyTextWrapper = styled.div`
  width: 80%;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 40px;
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    width: 90%;
  }
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 678px;
  width: 100%;
  ${mediaQueries.medium} {
    height: 925px;
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    height: 762px;
  }
`;

const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary.white};
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.secondary.navy};
  ${mediaQueries.custom(1700)} {
    width: 1400px;
  }
  ${mediaQueries.large} {
    width: 980px;
  }
  ${mediaQueries.medium} {
    width: 736px;
  }
  ${mediaQueries.tablet} {
    width: 700px;
  }
  ${mediaQueries.custom(720)} {
    width: 550px;
  }
  ${mediaQueries.custom(MOBILE_VIEW_WIDTH)} {
    width: 90%;
  }
`;

export default Projects;


