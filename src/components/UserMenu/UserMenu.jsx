import { Button, Icon, UserName, Wrapper } from './UserMenu.styled';

const UserMenu = () => {  

  return (
    <Wrapper>
      <UserName>Welcome, user</UserName>
      <Button type="button" onClick={() => {}}>
        Log Out
        <Icon/>
      </Button>
    </Wrapper>
  );
};

export default UserMenu;