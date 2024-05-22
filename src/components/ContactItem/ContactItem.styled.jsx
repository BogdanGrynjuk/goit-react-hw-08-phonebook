import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

const filterProps = (Component) => ({ isEditIcon, ...props }) => <Component {...props} />;

const marquee  = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-100%); }
  50.01% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;  
`;

export const Info = styled.div`
  flex-grow: 1;  
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;   
  font-family: 'Roboto', sans-serif;  
  color: ${p => {
    if (p.activeButton === 'edit') return 'rgb(0, 0, 255)';
    if (p.activeButton === 'delete') return 'rgb(255, 0, 0)';
  }};
  text-shadow: ${p => { 
    if (p.activeButton === 'edit' || p.activeButton === 'delete') { 
      return '0 3px 3px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.25);'
    }
  }};
  text-decoration: ${p => {
    if (p.activeButton === 'delete') return 'line-through';
  }};      
  transition: color 250ms linear,
              text-shadow 250ms linear;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
  } 
`;

export const NameWrapper = styled.div`
  flex-basis: 50%;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  width: 100%;
`;

export const Name = styled.p`
  display: flex;
  max-width: max-content;
  font-weight: bold;  
  font-size: 16px;
  text-transform: capitalize;  
  white-space: nowrap;

  &.marquee {
    animation: ${marquee} 40s linear infinite;
    animation-delay: 1s;
  }
`;

export const PhoneNumber = styled.p`
  flex-basis: 50%;
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px){
    font-size: 16px;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px){
    gap: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center; 
  padding: 0;
  background-color: rgb(255, 255, 255);
  border: none;
  outline: none;  
  cursor: pointer;  
  
  &:hover > svg {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25),
                0 5px 5px rgba(0, 0, 0, 0.25);
  };  

  &:active > svg {
    background-color: rgb(181, 245, 254);       
  };  
`;

export const IconEdit = styled(filterProps(MdEditNote))`
  fill: rgb(0, 0, 255);
  width: 16px;
  height: 16px;
  padding: 4px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: buttonface;
  transition: box-shadow 250ms linear;
  
  &.icon_delete {
    fill: rgb(255, 0, 0);
  }

`;

export const IconDelete = IconEdit.withComponent(MdDeleteForever);