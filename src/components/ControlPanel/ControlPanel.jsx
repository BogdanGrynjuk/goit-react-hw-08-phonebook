import PropTypes from 'prop-types';
import { Wrapper } from './ControlPanel.styled';

const ControlPanel = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

ControlPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ControlPanel;