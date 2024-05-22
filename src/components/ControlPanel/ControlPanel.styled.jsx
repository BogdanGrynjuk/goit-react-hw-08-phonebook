import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
 
  @media screen and (min-width: 1280px) {    
    gap: 24px;
    width: calc(100% / 2 - 12px);
    max-width: calc(1280px / 2 - 12px);
  }
`;