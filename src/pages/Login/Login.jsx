import { Helmet } from 'react-helmet';
import LoginForm from 'components/LoginForm';
import { Title, Wrapper } from './Login.styled';

export default function Login() {
  return (
    <Wrapper>
      <Helmet>
        <title>Login</title>
      </Helmet>      
      <Title>Authentication</Title>
      <LoginForm />
    </Wrapper>
  );
}