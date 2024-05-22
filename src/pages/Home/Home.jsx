import { useAuth } from 'hooks';
import { Action, Content, Greeting, UserName, Wrapper } from './Home.styled';

export default function Home() {
  const { isLoggedIn, user }= useAuth();

  return (
    <Wrapper>
      {isLoggedIn
        ?
        <Content>
          <Greeting><UserName>{user.name}</UserName>, welcome to Phonebook!</Greeting>
        </Content>
        :
        <Content>
          <Greeting>Welcome to Phonebook!</Greeting>
          <Action>Create your own personal book of contacts</Action>
          <Action>Please register or log in to continue</Action>
        </Content>
      }      
    </Wrapper>
  );
}