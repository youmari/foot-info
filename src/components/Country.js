import PropTypes from 'prop-types';
import { GlobeIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Country = ({ country: { name, code, flag } }) => (
  <Link to={name} className="flex flex-col justify-between bg-blue-900 h-40 link">
    {name === 'World' ? (
      <GlobeIcon />
    ) : (
      <img
        className="h-auto w-32 self-center p-1"
        src={flag}
        alt="country flag"
      />
    )}
    <h3 className="font-gill font-bold text-white text-xl text-right mr-2">
      {name}
    </h3>
    <p className="font-lato text-lg text-right text-white mr-2">{code}</p>
  </Link>
);

Country.propTypes = {
  country: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Country;
