import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';


import { Header } from './AppBar.styled';

export const AppBar = () => {
 

  return (
    <Header>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </Header>
  );
};

export default AppBar;