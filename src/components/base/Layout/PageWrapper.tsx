import styled from "styled-components";

/**
 * A component to wrap pages
 */
const PageWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  background: linear-gradient(180deg, #141425 0%, #1a1a3e 30%, #0f2847 60%, #141425 100%);
  overflow-x: clip; /* Use clip instead of hidden to preserve sticky behavior */
`;

export default PageWrapper;

