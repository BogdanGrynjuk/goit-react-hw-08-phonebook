import { Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <Link to="/" end>
        Home
      </Link>
      
      <Link to="/contacts">
        Contacts
      </Link>
    </nav>
  );
};

export default Navigation;