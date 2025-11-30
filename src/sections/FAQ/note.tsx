import React from "react";
import {
  CloudLeftImg,
  CloudRightImg,
  StarNavyImg,
  StarBlueImg,
  StarPinkImg,
} from "@/assets/img";
import { DidWeMissAnything } from "@/components";
import { Body } from "@/styles";
import { mediaQueries } from "@/utils";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: 20px;
  padding-top: 7%;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 10%;

  ${mediaQueries.tablet} {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 30%;
  }

  ${mediaQueries.largeMobile} {
    padding-left: 0%;
    padding-right: 0%;
    padding-top: 8%;
  }
`;
const NoteText = styled(Body)`
  color: #000000; /* Black text */
  position: relative;
  padding: 7%;
  padding-right: 10%;
  line-height: 160%;
  text-align: left;

  ${mediaQueries.medium} {
    font-size: 14px;
  }

  ${mediaQueries.largeMobile} {
    font-size: 15px;
  }
`;

const Note: React.FC = () => {
  return (
    <Wrapper>
      <StarNavy alt="black star graphic" loading="lazy" src={StarNavyImg} />
      <StarBlue alt="blue star graphic" loading="lazy" src={StarBlueImg} />
      <Right>
        <CloudRight
          alt="right cloud graphic"
          loading="lazy"
          src={CloudRightImg}
        />
        <RightWrapper>
          <DidWeMissAnything />
        </RightWrapper>
      </Right>

      <Left>
        <CloudLeft alt="left cloud graphic" loading="lazy" src={CloudLeftImg} />
        <TextWrapper>
<NoteText>
  Hey Hackers! <br /><br />
  Welcome to this year’s hackathon a space built for creators, thinkers,
  and problem-solvers. Over the next 24 hours, we want you to explore ideas,
  experiment freely, and work on projects that truly excite you. <br />
  Whether you're here to build something impactful, learn a new technology,
  or collaborate with amazing people, we’re here to support you with
  resources, mentors, and a vibrant community. <br />
  There are no limits — just bring your creativity, curiosity, and energy.
  We can’t wait to see what you create! <br /><br />
  ~ Team  CodeRIT💙
</NoteText>

        </TextWrapper>
      </Left>

      <StarPink alt="pink star graphic" loading="lazy" src={StarPinkImg} />
    </Wrapper>
  );
};

const Left = styled.div`
  position: relative;
  width: 1242px;
  height: auto;
  top: 110px;
  left: -500px;

  ${mediaQueries.medium} {
    left: -30%;
    top: 250px;
    left: -65%;
  }
  ${mediaQueries.tablet} {
    width: 1127px;
    top: 300px;
    left: -95%;
  }

  ${mediaQueries.mediumTablet} {
    left: -135%;
  }

  ${mediaQueries.smallTablet} {
    left: -158%;
  }

  ${mediaQueries.largeMobile} {
    width: 1414px;
    left: -114%;
  }
  ${mediaQueries.mobile} {
    left: -136%;
  }
  ${mediaQueries.smallMobile} {
    left: -165%;
  }
`;

const CloudLeft = styled.img`
  width: 100%;
  height: auto;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 517px;
  top: 38%;
  left: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries.smallTablet} {
    width: 458px;
  }

  ${mediaQueries.largeMobile} {
    width: 358px;
  }
`;

const Right = styled.div`
  position: absolute;
  width: 1027px;
  height: auto;
  top: -10%;
  left: 44%;
  z-index: 30;

  ${mediaQueries.large} {
    left: 35%;
  }

  ${mediaQueries.custom(1100)} {
    top: -20%;
    left: 20%;
  }

  ${mediaQueries.medium} {
    left: 12%;
  }

  ${mediaQueries.tablet} {
    display: none; /* Hide DidWeMissAnything on tablet and below */
  }
`;
const CloudRight = styled.img`
  width: 100%;
  height: auto;
`;
const RightWrapper = styled.div`
  position: absolute;
  width: 500px;
  top: 38%;
  left: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries.smallTablet} {
    width: 400px;
  }
  ${mediaQueries.largeMobile} {
    width: 358px;
  }
`;

const StarNavy = styled.img`
  position: absolute;
  width: 14%;
  top: 60%;
  right: -17%;
  height: auto;
  visibility: visible;
  z-index: 30;

  ${mediaQueries.tablet} {
    right: -10%;
    width: 15%;
  }

  ${mediaQueries.largeMobile} {
    visibility: hidden;
  }
`;

const StarBlue = styled.img`
  position: absolute;
  width: 12%;
  top: 10%;
  left: 5%;
  height: auto;
  visibility: visible;
  z-index: 30;

  ${mediaQueries.tablet} {
    left: -10%;
    top: 40%;
  }

  ${mediaQueries.largeMobile} {
    visibility: hidden;
  }
`;

const StarPink = styled.img`
  position: absolute;
  width: 12%;
  top: 80%;
  left: 75%;
  height: auto;
  visibility: visible;
  z-index: 30;

  ${mediaQueries.tablet} {
    width: 15%;
    top: 100%;
    left: 106%;
  }

  ${mediaQueries.largeMobile} {
    visibility: hidden;
  }
`;

export default Note;


