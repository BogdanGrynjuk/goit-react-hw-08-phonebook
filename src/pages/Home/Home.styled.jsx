import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px; 
  max-width: calc(320px - 64px);
  padding: 16px;
  border: 1px solid black;
  border-radius: 4px;
  text-align: start;
  background-color: rgb(235, 235, 235);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: calc(768px - 64px);    
  }

  @media screen and (min-width: 1280px) {    
    max-width: calc(100% - 32px); 
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  text-align: center;
`;

export const Greeting = styled.h1`
  font-weight: 500;
  text-align: center;
`;

export const UserName = styled.span`
  text-transform: capitalize;
  font-weight: 700;
  color: red;
`;

export const Action = styled.h2`
  font-weight: 500;
`