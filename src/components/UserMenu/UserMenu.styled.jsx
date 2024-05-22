import styled from "@emotion/styled";
import { MdLogout } from 'react-icons/md';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  display: none;
  font-weight: 700;
  color: rgb(0, 0, 0);

  @media screen and (min-width: 768px){
    display: block;
  }

  & > span{
    color: rgb(255, 0, 0);
    text-transform: capitalize;
  }
`; 

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-left: auto;
  padding: 4px;  
  background-color: transparent;
  border: none;
  outline: none;  
  font-size: 16px;
  font-weight: 700;  
  cursor: pointer;  
  
  &:hover > svg{
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
                0 5px 5px rgba(0, 0, 0, 0.25);
  };

  &:active > svg {    
    background-color: rgb(181, 245, 254);
  }
`;

export const Icon = styled(MdLogout)`
  padding: 4px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: buttonface;
  fill: rgb(0, 0, 255);
  width: 16px;
  height: 16px;
  transition: box-shadow 250ms linear;
`;
