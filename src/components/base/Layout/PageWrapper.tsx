import styled from "styled-components";

/**
 * A component to wrap pages
 */
const PageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  background: linear-gradient(180deg, #fdf7ea 0%, #9cb1fc 50%, #223a60 100%);
`;

export default PageWrapper;

