import PropTypes from "prop-types";
import { Content, Title, Wrapper } from "./PhoneBook.styled";

const PhoneBook = ({ children }) => {
  return (
    <Wrapper>
      <Title>Your Phone Book</Title>
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
};

PhoneBook.propTypes = {
  children: PropTypes.node.isRequired
};

export default PhoneBook;