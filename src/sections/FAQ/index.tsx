import React from "react";
import {
  Cloud1,
  Cloud2,
  Cloud4,
  FrequentlyImg,
  PencilImg,
} from "@/assets/img";
import {
  ContentWrapper,
  SectionWrapper,
  AccordionGroup,
  UnstyledLink,
} from "@/components/base";
import { SectionId } from "@/constants";
import { Body, Heading1 } from "@/styles";
import { mediaQueries, useDeviceSize } from "@/utils";
import styled from "styled-components";

import { LEFT_QUESTION_SET, RIGHT_QUESTION_SET } from "./constants";
import Note from "./note";

const FAQ: React.FC = () => {
  const isTabletOrSmaller = useDeviceSize("tablet");
  return isTabletOrSmaller !== undefined ? (
    <SectionWrapper id={SectionId.FAQ}>
      <CloudImg1 src={Cloud1} alt="misty transparent cloud" loading="lazy" />
      <CloudImg2 src={Cloud2} alt="misty transparent cloud" loading="lazy" />
      <StyledContentWrapper>
        <Wrapper>
          <HeadingContainer>
            <Pencil alt="pencil" loading="lazy" src={PencilImg} />
            <Heading1>
              <Cutout alt="frequently" loading="lazy" src={FrequentlyImg} />
              asked questions
            </Heading1>
          </HeadingContainer>

          <AccordionWrapper>
            <StyledAccordionGroup
              questionSet={LEFT_QUESTION_SET.map((cur) =>
                cur.question ==
                "I’m not currently enrolled as a student, can I still attend wHACKiest?"
                  ? {
                      question: cur.question,
                      answer: (
                        <FAQText>
                          wHACKiest is geared towards students who are
                          interested in tech, but we also want to open the doors
                          for anyone who wants to learn. If your situation falls
                          within this category, please reach out to us at{" "}
                          <InternalLink href="mailto:hello@coderit.org">
                            hello@coderit.org
                          </InternalLink>{" "}
                          and we can chat more regarding certain exemptions!
                        </FAQText>
                      ),
                    }
                  : cur.question ==
                    "What kind of workshops, talks, and activities will there be?"
                  ? {
                      question: cur.question,
                      answer: (
                        <>
                          <FAQText>
                            Previously, we’ve held workshops and talks for a
                            range of skill levels from beginner to advanced like
                            Intro to React and Exploring and Wrangling Data with
                            Pandas. Other workshops also explore various
                            programming tools such as APIs, databases, and
                            platforms.
                          </FAQText>
                          <FAQText>
                            Activities like VR demos, meetups, and even karaoke
                            happen throughout the weekend. Whether it’s for
                            relaxation or health, novelty or competition, our
                            team has something exciting prepared for you to
                            enjoy!
                          </FAQText>
                        </>
                      ),
                    }
                  : {
                      question: cur.question,
                      answer: <p>{cur.answer}</p>,
                    }
              )}
            />
            <StyledAccordionGroup
              shouldOpenFirst={!isTabletOrSmaller}
              questionSet={RIGHT_QUESTION_SET.map((cur) =>
                cur.question ==
                "What if I need to travel internationally to attend wHACKiest?"
                  ? {
                      question: cur.question,
                      answer: (
                        <>
                          <FAQText>
                            Please note that visitor visa wait times may be as
                            long as several months, depending on the country of
                            departure. We recommend you apply for your visa, if
                            required, immediately after receiving your
                            acceptance to wHACKiest. More information can
                            be found on our{" "}
                            <InternalLink href="/travel-guidelines">
                              Travel Guidelines
                            </InternalLink>{" "}
                            page.
                          </FAQText>
                          <FAQText>
                            COVID-19: If you’re traveling to wHACKiest from
                            outside of Canada, you must follow the{" "}
                            <InternalLink
                              href="https://travel.gc.ca/travel-covid"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Government of Canada’s travel guidelines
                            </InternalLink>{" "}
                            in order to attend. As of June 2023, the guidelines
                            do not require any sort of pre-flight testing or
                            proof of vaccination. However, please ensure that
                            you are fully compliant with your home country’s
                            COVID-19 guidelines in order to ensure a smooth
                            trip. wHACKiest will not reimburse any
                            additional fees that event attendees incur due to
                            COVID-19 related complications.
                          </FAQText>
                        </>
                      ),
                    }
                  : cur.question == "What are your COVID-19 regulations?"
                  ? {
                      question: cur.question,
                      answer: (
                        <>
                          <FAQText>
                            At this time, wHACKiest does not have a
                            COVID-19 policy. Taking your own health/safety
                            precautions is recommended, but attendance at Hack
                            the North is at your own risk.
                          </FAQText>
                          <FAQText>
                            Following the Government of Canada’s decision to
                            remove all COVID-19 travel restrictions, Hack the
                            North will not be enforcing any COVID-related
                            restrictions or regulations at our event. In the
                            event that the COVID-19 situation changes in our
                            region, we will follow the Canadian and Ontario
                            government guidelines and restrictions as necessary.
                          </FAQText>
                          <FAQText>
                            A small reserve of masks, hand sanitizer, and rapid
                            tests will be available at the event.
                          </FAQText>
                          <FAQText>
                            We kindly ask that if you are feeling unwell, please
                            do not attend the event for the safety of other
                            hackers and guests.
                          </FAQText>
                        </>
                      ),
                    }
                  : {
                      question: cur.question,
                      answer: <p>{cur.answer}</p>,
                    }
              )}
            />
          </AccordionWrapper>
        </Wrapper>
        <Note />
      </StyledContentWrapper>
    </SectionWrapper>
  ) : null;
};

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
  right: 0;
  top: 10vw;
  z-index: -1;

  ${mediaQueries.medium} {
    visibility: hidden;
  }
`;

const StyledContentWrapper = styled(ContentWrapper)`
  padding: 69px 138px 69px 138px;
  width: 100vw;
  z-index: 30;

  ${mediaQueries.medium} {
    padding-left: 10%;
    padding-right: 10%;
  }

  ${mediaQueries.largeMobile} {
    padding-left: 0%;
    padding-right: 0%;
  }
`;

const Wrapper = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 8%;
  margin-top: 5%;
`;

const InternalLink = styled(UnstyledLink)`
  color: white;
  outline: none;
  width: fit-content;
  text-decoration: underline;
`;

const StyledAccordionGroup = styled(AccordionGroup)`
  flex: 1;
  height: auto;
  width: 50%;

  ${mediaQueries.tablet} {
    width: 100%;
  }
`;

const AccordionWrapper = styled.div`
  display: flex;
  justify-content: between;
  column-gap: 96px;
  margin-top: 6%;
  height: auto;
  position: relative;
  z-index: 40;

  ${mediaQueries.tablet} {
    display: block;
  }
  ${mediaQueries.largeMobile} {
    margin-top: 10%;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: start;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

const Cutout = styled.img`
  position: relative;
  width: 274.5px;
  height: auto;
  margin: 0 8px;
  vertical-align: middle;

  ${mediaQueries.largeMobile} {
    width: 126px;
  }
`;

const Pencil = styled.img`
  position: absolute;
  width: 167px;
  height: auto;
  top: 75px;
  left: 10%;

  ${mediaQueries.large} {
    top: 65px;
  }

  ${mediaQueries.medium} {
    top: 56px;
    left: 80px;
  }

  ${mediaQueries.tablet} {
    top: 46px;
    left: 7%;
  }

  ${mediaQueries.mediumTablet} {
    top: 32px;
  }

  ${mediaQueries.smallTablet} {
    top: 34px;
    left: 5px;
  }

  ${mediaQueries.largeMobile} {
    width: 80px;
    top: 65px;
    left: 1%;
  }

  ${mediaQueries.mobile} {
    top: 60px;
    left: 0%;
  }
`;

const FAQText = styled(Body)`
  text-align: left;
  margin-top: 20px;
  line-height: 25.6px;
  color: ${({ theme }) => theme.colors.text.dark.gray};
`;

export default FAQ;


