import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 8px;  
  padding: 8px;  
  border: 1px solid black;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);

   @media screen and (min-width: 1280px) {    
    gap: 24px;
    width: calc(100% / 2 - 12px);
    max-width: calc(1280px / 2 - 12px);
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  text-align: center;
`;