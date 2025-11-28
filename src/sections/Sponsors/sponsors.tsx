import React from "react";
import {
  CapitalOne,
  Chroma,
  Codegen,
  Cohere,
  Convex,
  CSE,
  Databricks,
  DRW,
  ETHGlobal,
  Genesys,
  Geotab,
  HeadlandsTech,
  HOOPP,
  HRT,
  Intact,
  JaneStreet,
  Mappedin,
  MASV,
  Ollama,
  OTPP,
  PandG,
  RBC,
  RocketCompanies,
  Siemens,
  Sunlife,
  SymphonicLabs,
  TD,
  Ubisoft,
  Voiceflow,
  Warp,
  WaterlooMathematics,
  Ramp,
  Pinecone,
  Groq,
  Defang,
  Intuit,
  Bloomberg,
  Shopify,
  Citadel,
  Passes,
  ForwardSigns,
  ReWritingTheCode,
  YCombinator,
  AWSStartups,
  DEShaw,
  Velocity,
  Redbull,
  Conrad,
  WebSummitVancouver,
  Awake,
  Communitech,
  AforeCapital,
} from "@/assets/img";
import { SponsorLink } from "@/components/base";
import { Body } from "@/styles";
import { mediaQueries } from "@/utils";
import styled from "styled-components";

interface Sponsor {
  alt: string;
  src: string;
  link: string;
  title: string;
  text?: JSX.Element;
}

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 835px) and (max-width: 1200px) {
    max-width: 632px;
  }
  ${mediaQueries.medium} {
    max-width: 632px;
  }
`;

const ArrowLinkStyled = styled.div`
  display: flex;
  padding-top: 16px;
  gap: 8px;
  align-items: center;
`;

const BodyText = styled(Body)`
  color: ${({ theme }) => theme.colors.text.dark.white};
  text-align: left;
  line-height: 150%;
`;

// Gold Sponsors
const rbc: Sponsor = {
  link: "https://jobs.rbc.com/ca/en/be-whats-next",
  alt: "RBC logo",
  src: RBC,
  title: "RBC",
  text: (
    <TextDiv>
      <BodyText>
        You may know that RBC is Canada&apos;s largest bank, with 98,000+
        employees and 17 million clients globally. But did you know we are also
        one of Canada&apos;s largest tech employers? With over 10,000 employees,
        our technologists apply imagination, insight, and cutting-edge
        technology to ensure our clients thrive and communities prosper.
      </BodyText>
      <br />
      <BodyText>
        Tech @ RBC offers hundreds of student and new grad roles, with
        opportunities to learn, grow, and work purposefully.
      </BodyText>
      <br />
      <BodyText>
        From Developers to Data Scientists, from Cyber Threat Hunters to AI and
        ML Specialists, we inspire the next generation of brilliant minds to be
        the future of tech.
      </BodyText>
      <BodyText>
        If you want to explore a broad range of exciting technology career
        paths, click below to view our Student Co-Op and New Graduate full-time
        job opportunities.
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://jobs.rbc.com/ca/en/be-whats-next"
          target="_blank"
          rel="noreferrer"
        >
          Explore Tech@RBC
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const cohere: Sponsor = {
  link: "https://cohere.com",
  alt: "Cohere logo",
  src: Cohere,
  title: "Cohere",
  text: (
    <TextDiv>
      <BodyText>
        Cohere empowers every developer and enterprise to build amazing products
        and capture true business value with language AI. Our models power
        interactive chat features, generate text for product descriptions, blog
        posts, and articles, and capture the meaning of text for search, content
        moderation, and intent recognition.
      </BodyText>
      <br />
      <BodyText>
        We&apos;re a series C remote-first company with offices in Toronto, Palo
        Alto, SF, and London. Building the future of language AI for business,
        we are also a team ML/AI engineers, thinkers, and champions who are
        passionate about exploring the potential of language AI to make our
        world a better place. With diverse experiences and perspectives, we work
        together to bring advancements in language AI to developers everywhere.
      </BodyText>
      <br />
      <BodyText>
        Join the Cohere Discord Community, and try out our models on the Cohere
        playground!
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://cohere.com/"
          target="_blank"
          rel="noreferrer"
        >
          Cohere&apos;s Home Page
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const shopify: Sponsor = {
  link: "https://www.shopify.com/",
  alt: "Shopify logo",
  src: Shopify,
  title: "Shopify",
  text: (
    <TextDiv>
      <BodyText>
        Opportunity is not evenly distributed. Shopify puts independence within
        reach for anyone with a dream to start a business. We propel
        entrepreneurs and enterprises to scale the heights of their potential.
      </BodyText>
      <br />
      <BodyText>
        Since 2006, we’ve grown to 10,000 employees and generated over $1
        trillion in sales for millions of merchants in 175 countries. The ripple
        effect of this is far-reaching.
      </BodyText>
      <br />
      <BodyText>
        Over the years, we’ve found that commerce can be a force for good, that
        entrepreneurs drive communities forward, and that small businesses are
        the backbone of economies. More than that, independent businesses enable
        incredible change. You vote with your dollars for the things—and
        changes—you want to see more of in the world.
      </BodyText>
      <br />
      <BodyText>
        This is life-defining work that puts the power of the few in the hands
        of the many, creating a future with more voices and more choices.
      </BodyText>
      <br />
      <BodyText>
        We’re arming the rebels. Who wouldn’t want to be part of that?
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://www.shopify.com/careers"
          target="_blank"
          rel="noreferrer"
        >
          Careers Page
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

export const goldSponsors = [rbc, cohere, shopify];

// Silver Sponsors
const hrt: Sponsor = {
  link: "https://www.hudsonrivertrading.com/student-opportunities/",
  alt: "Hudson River Trading logo",
  src: HRT,
  title: "Hudson River Trading",
  text: (
    <TextDiv>
      <BodyText>
        Hudson River Trading brings a scientific approach to trading financial
        products. We have built one of the world&apos;s most sophisticated
        computing environments for research and development. Our researchers are
        at the forefront of innovation in the world of algorithmic trading. At
        HRT we come from all sorts of backgrounds: mathematics, computer
        science, statistics, physics, and engineering. We&apos;re a community of
        self-starters, motivated by the excitement of being at the cutting edge
        of automated trading. We&apos;re friends and colleagues, whether we are
        sharing a meal, playing the latest board game, or writing elegant code.
        We embrace a culture of togetherness that extends far beyond the walls
        of our office.
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://www.hudsonrivertrading.com/student-opportunities/"
          target="_blank"
          rel="noreferrer"
        >
          Student Opportunities Page
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const capitalOne: Sponsor = {
  link: "https://www.capitalonecareers.ca/",
  alt: "Capital One logo",
  src: CapitalOne,
  title: "Capital One",
  text: (
    <TextDiv>
      <BodyText>
        At Capital One, we&apos;re changing banking for good. We were founded on
        the belief that no one should be locked out of the financial system.
        We&apos;re dedicated to helping foster a world where everyone has an
        equal opportunity to prosper.
      </BodyText>
      <br />
      <BodyText>
        We&apos;re a bank. But we don&apos;t think like one. We&apos;re always
        thinking about what&apos;s next. About how we can innovate. Inspire. And
        develop the tools our customers need to improve their financial lives.
        That&apos;s where you come in. Your ideas, your experiences and your
        skills will help us make banking simpler. Working here is about doing
        bold things. And having that feeling like you belong right where you
        are. Because we&apos;re doing cool work that lets you have a life
        outside of work. That&apos;s life at Capital One.
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://www.capitalonecareers.ca/"
          target="_blank"
          rel="noreferrer"
        >
          Capital One Canada Career Page
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const databricks: Sponsor = {
  link: "https://databricks.com/",
  alt: "Databricks logo",
  src: Databricks,
  title: "Databricks",
};

const sunlife: Sponsor = {
  link: "https://www.sunlife.ca/en/careers/",
  alt: "Sunlife logo",
  src: Sunlife,
  title: "Sunlife",
};

const intact: Sponsor = {
  link: "https://careers.intactfc.com/ca/en/home",
  alt: "Intact logo",
  src: Intact,
  title: "Intact",
};

const convex: Sponsor = {
  link: "https://convex.dev/c/hackthenorth",
  alt: "Convex logo",
  src: Convex,
  title: "Convex",
  text: (
    <TextDiv>
      <BodyText>
        Convex is the all-in-one backend for application builders. Built-in
        reactivity, scalable persistence, and end-to-end type safety lets you
        spend more time on your product and less time managing, scaling, and
        deploying infrastructure. Compatible with your favorite frontend
        frameworks and languages, Convex offers a modern developer experience
        with thoughtful, product-centric APIs.
      </BodyText>
      <br />
      <BodyText>
        Convex is free for hobbyists and prototypes and is the perfect backend
        to use to win a hackathon.
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://convex.dev/c/hackthenorth"
          target="_blank"
          rel="noreferrer"
        >
          Company Website
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const siemens = {
  link: "https://www.siemens.ca/",
  alt: "Siemens logo",
  src: Siemens,
  title: "Siemens",
  text: (
    <TextDiv>
      <BodyText>
        Siemens Canada is a technology company focused on industry,
        infrastructure, transport, and healthcare. From more resource-efficient
        factories, resilient supply chains, and smarter buildings and grids, to
        cleaner and more comfortable transportation as well as advanced
        healthcare, the company creates technology with purpose, adding real
        value for customers since 1912. By combining the real and the digital
        worlds, Siemens empowers its customers to transform their industries and
        markets, to transform the everyday for billions of people. Siemens also
        owns a majority stake in the publicly listed company Siemens
        Healthineers, a globally leading medical technology provider shaping the
        future of healthcare. In addition, Siemens holds a minority stake in
        Siemens Energy, a global leader in the transmission and generation of
        electrical power. As of September 30, 2023, the company has
        approximately 4,200 employees from coast-to-coast and 33 office and
        production facilities across Canada. Siemens Canada has a revenue of ~
        CAD $2 billion.
      </BodyText>
      <br />
      <BodyText>
        To learn more about careers at Siemens Canada, visit our website at
        www.siemens.ca.
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://www.siemens.ca/"
          target="_blank"
          rel="noreferrer"
        >
          Company Website
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const groq = {
  link: "https://groq.com/",
  alt: "Groq logo",
  src: Groq,
  title: "Groq",
  text: (
    <TextDiv>
      <BodyText>
        Groq is fast AI Inference. The Groq LPU™ AI Inference Technology
        delivers exceptional compute speed, quality, and energy efficiency.
        Groq, headquartered in Silicon Valley, provides cloud and on-prem
        inference at scale for AI applications. The LPU and related systems are
        designed, fabricated, and assembled in North America. Learn more and try
        Groq speed today at groq.com.
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink href="https://groq.com/" target="_blank" rel="noreferrer">
          Company Website
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const citadel = {
  link: "https://www.citadel.com/",
  alt: "Citadel logo",
  src: Citadel,
  title: "Citadel",
};

const passes = {
  link: "https://passes.com/",
  alt: "Passes logo",
  src: Passes,
  title: "Passes",
};

const ycombinator = {
  link: "https://ycombinator.com/",
  alt: "Y Combinator logo",
  src: YCombinator,
  title: "Y Combinator",
};

export const silverSponsors = [
  hrt,
  capitalOne,
  databricks,
  sunlife,
  intact,
  convex,
  siemens,
  groq,
  citadel,
  passes,
  ycombinator,
];

// Bronze Sponsors
const codegen = {
  link: "https://www.codegen.com/",
  alt: "Codegen logo",
  src: Codegen,
  title: "Codegen",
};

const ethglobal = {
  link: "https://eg.to/htn",
  alt: "ETHGlobal logo",
  src: ETHGlobal,
  title: "ETHGlobal",
};

const genesys = {
  link: "https://www.genesys.com/",
  alt: "Genesys logo",
  src: Genesys,
  title: "Genesys",
};

const geotab = {
  link: "https://careers.geotab.com/campus/",
  alt: "Geotab logo",
  src: Geotab,
  title: "Geotab",
};

const headlandstech = {
  link: "https://www.headlandstech.com",
  alt: "Headlands Tech logo",
  src: HeadlandsTech,
  title: "Headlands Tech",
};

const hoopp = {
  link: "https://hoopp.com/",
  alt: "HOOPP logo",
  src: HOOPP,
  title: "HOOPP",
};

const janestreet = {
  link: "https://janestreet.com",
  alt: "Jane Street logo",
  src: JaneStreet,
  title: "Jane Street",
};

const mappedin = {
  link: "https://www.mappedin.com",
  alt: "Mappedin logo",
  src: Mappedin,
  title: "Mappedin",
};

const pandg = {
  link: "https://www.pg.ca/en-ca/",
  alt: "P&G logo",
  src: PandG,
  title: "P&G",
};

const rocketcompanies = {
  link: "https://rocketinnovationstudio.ca/",
  alt: "Rocket Companies logo",
  src: RocketCompanies,
  title: "Rocket Companies",
};

const voiceflow = {
  link: "https://www.voiceflow.com",
  alt: "Voiceflow logo",
  src: Voiceflow,
  title: "Voiceflow",
};

const ubisoft = {
  link: "https://www.ubisoft.com/en-us/company/careers",
  alt: "Ubisoft logo",
  src: Ubisoft,
  title: "Ubisoft",
};

const drw = {
  link: "https://drw.com/",
  alt: "DRW logo",
  src: DRW,
  title: "DRW",
};

const td = {
  link: "https://jobs.td.com/en-CA/",
  alt: "TD logo",
  src: TD,
  title: "TD",
};

const waterloomathematics = {
  link: "https://uwaterloo.ca/math/",
  alt: "Waterloo Mathematics logo",
  src: WaterlooMathematics,
  title: "Waterloo Mathematics",
};

const cse = {
  link: "https://www.cse-cst.gc.ca/en",
  alt: "CSE logo",
  src: CSE,
  title: "CSE",
};

const otpp = {
  link: "https://www.otpp.com/en-ca/careers/early-talent/",
  alt: "OTPP logo",
  src: OTPP,
  title: "OTPP",
};

const pinecone = {
  link: "https://www.pinecone.io/",
  alt: "Pinecone logo",
  src: Pinecone,
  title: "Pinecone",
};

const ramp = {
  link: "https://ramp.com/",
  alt: "Ramp logo",
  src: Ramp,
  title: "Ramp",
};

const intuit = {
  link: "https://www.intuit.com/ca/",
  alt: "Intuit logo",
  src: Intuit,
  title: "Intuit",
};

const bloomberg = {
  link: "https://www.bloomberg.com/engineering",
  alt: "Bloomberg logo",
  src: Bloomberg,
  title: "Bloomberg",
};

const awsstartups = {
  link: "https://aws.amazon.com/startups",
  alt: "AWS logo",
  src: AWSStartups,
  title: "AWS Startups",
};

const deshaw = {
  link: "https://www.deshaw.com/recruit/internships/Sponsorship/24HacktheNorthAug24",
  alt: "D. E. Shaw logo",
  src: DEShaw,
  title: "D. E. Shaw",
};

export const bronzeSponsors = [
  codegen,
  ethglobal,
  genesys,
  geotab,
  headlandstech,
  hoopp,
  ramp,
  janestreet,
  mappedin,
  pandg,
  rocketcompanies,
  voiceflow,
  ubisoft,
  drw,
  td,
  waterloomathematics,
  cse,
  otpp,
  pinecone,
  intuit,
  bloomberg,
  awsstartups,
  deshaw,
];

// Startup Sponsors
const chroma: Sponsor = {
  link: "https://trychroma.com",
  alt: "Chroma logo",
  src: Chroma,
  title: "Chroma",
};

const masv: Sponsor = {
  link: "https://massive.io/",
  alt: "MASV logo",
  src: MASV,
  title: "MASV",
};

const ollama: Sponsor = {
  link: "https://ollama.com/",
  alt: "Ollama logo",
  src: Ollama,
  title: "Ollama",
};

const symphonicLabs: Sponsor = {
  link: "https://symphoniclabs.com/",
  alt: "Symphonic Labs logo",
  src: SymphonicLabs,
  title: "Symphonic Labs",
};

const warp: Sponsor = {
  link: "https://www.warp.dev/",
  alt: "Warp logo",
  src: Warp,
  title: "Warp",
};

const defang: Sponsor = {
  link: "https://defang.io/",
  alt: "Defang logo",
  src: Defang,
  title: "Defang",
};

export const startupSponsors = [
  chroma,
  masv,
  ollama,
  symphonicLabs,
  warp,
  defang,
];

// Partners
const ForwardSignsPartner: Sponsor = {
  link: "https://www.forwardsigns.com",
  alt: "Forward Signs logo",
  src: ForwardSigns,
  title: "Forward Signs",
};

const ReWritingTheCodePartner: Sponsor = {
  link: "https://rewritingthecode.org/",
  alt: "Rewriting the Code logo",
  src: ReWritingTheCode,
  title: "Rewriting The Code",
};

const VelocityPartner: Sponsor = {
  link: "https://velocityincubator.com/",
  alt: "Velocity logo",
  src: Velocity,
  title: "Velocity",
};

const RedbullPartner: Sponsor = {
  link: "https://www.redbull.com/ca-en",
  alt: "Red Bull logo",
  src: Redbull,
  title: "Red Bull",
};

const ConradPartner: Sponsor = {
  link: "https://uwaterloo.ca/conrad-school-entrepreneurship-business/",
  alt: "Conrad logo",
  src: Conrad,
  title: "Conrad",
};

const WebSummitVancouverPartner: Sponsor = {
  link: "https://vancouver.websummit.com/",
  alt: "Web Summit Vancouver logo",
  src: WebSummitVancouver,
  title: "Web Summit Vancouver",
};

const AwakePartner: Sponsor = {
  link: "https://awakechocolate.ca/",
  alt: "Awake logo",
  src: Awake,
  title: "Awake",
};

const CommunitechPartner: Sponsor = {
  link: "https://communitech.ca/",
  alt: "Communitech logo",
  src: Communitech,
  title: "Communitech",
};

const AforeCapitalPartner: Sponsor = {
  link: "https://www.afore.vc/",
  alt: "Afore Capital logo",
  src: AforeCapital,
  title: "Afore Capital",
};

export const partners = [
  ForwardSignsPartner,
  ReWritingTheCodePartner,
  VelocityPartner,
  RedbullPartner,
  ConradPartner,
  WebSummitVancouverPartner,
  AwakePartner,
  CommunitechPartner,
  AforeCapitalPartner,
];

// Carousel Sponsors
export const carouselSponsors = [
  rbc,
  cohere,
  shopify,
  hrt,
  capitalOne,
  groq,
  convex,
  siemens,
];

