import { ArrowLeftIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GoBackBar = ({ name, to = '/' }) => (
  <div className="flex items-center bg-blue-700">
    <Link to={to} className=" text-white inline">
      <ArrowLeftIcon className="w-11 h-auto p-3" />
    </Link>
    <h2 className="ml-3 text-lg text-white">
      {name}
    </h2>
  </div>
);

GoBackBar.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
};

GoBackBar.defaultProps = {
  name: '',
  to: '',
};

export default GoBackBar;
