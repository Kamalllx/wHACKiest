import { mediaQueries } from "@/utils/responsive";
import styled from "styled-components";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    text: {
      dark: {
        white: "#FFFFFFDE",
        gray: "#FFFFFF99",
        black: "#FFFFFF61",
      },
      light: {
        black: "#0D0D0B",
        gray: "#6D6D6D",
        white: "#BDBDBD",
      },
    },
    primary: {
      blue: "#9CB1FC",
      purple: "#E6B5F9",
      pink: "#FFB0DB",
      yellow: "#FBE496",
      green: "#BFEFDE",
      white: "#FDF7EA",
    },
    secondary: {
      blue: "#6F8DF8",
      purple: "#D68AF4",
      pink: "#F277BA",
      yellow: "#BAB19E",
      green: "#75DAB6",
      white: "#FCFCFC",
      navy: "#223A60",
    },
    state: {
      error: "#FE8888",
      success: "#637EDF",
      infomative: "#88E2FE",
      warning: "#FCFE88",
    },
  },
};

export const Heading1 = styled.h1`
  margin: 0px;
  font-family: "Castledown";
  font-size: 48px;
  font-weight: 900;

  ${mediaQueries.tablet} {
    font-size: 36px;
  }

  ${mediaQueries.largeMobile} {
    font-size: 24px;
  }
`;

export const Heading2 = styled.h2`
  margin: 0px;
  font-family: "Castledown";
  font-size: 36px;
  font-weight: 900;

  ${mediaQueries.largeMobile} {
    font-size: 24px;
  }
`;

export const Heading3 = styled.h3`
  margin: 0px;
  font-family: "Castledown";
  font-size: 24px;
  font-weight: 900;

  ${mediaQueries.medium} {
    font-size: 20px;
  }
`;

export const LargeBody = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 400;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }
`;

export const LargeBodyMedium = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 500;
  line-height: 160%;

  ${mediaQueries.largeMobile} {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Medium = styled.p`
  margin: 0;
  padding: 0;
  height: 30px;
  font-family: "Castledown";
  font-size: 20px;
  font-weight: 900;
  line-height: normal;
  white-space: nowrap;
`;

export const LargeBodyBold = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 20px;
  font-weight: 700;

  ${mediaQueries.tablet} {
    font-size: 16px;
  }
`;

export const Body = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 400;

  ${mediaQueries.medium} {
    text-align: center;
  }
`;

export const BodyBold = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 700;
  padding: 0px;
  margin: 0px;
`;

export const BodyHeavy = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 900;
`;

export const Caption = styled.p`
  margin: 0px;
  font-family: "Satoshi";
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
`;

export const ButtonText = styled.p`
  margin: 0;
  padding: 0;
  height: 24px;
  font-family: "Castledown";
  font-size: 16px;
  font-weight: 900;
  white-space: nowrap;
`;

