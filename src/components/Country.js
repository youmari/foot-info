import PropTypes from 'prop-types';
import { ArrowCircleRightIcon, GlobeIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Country = ({ country: { name, code, flag } }) => (
  <Link to={name} title={name} className="flex flex-col justify-between bg-blue-900 h-fit link">
    <ArrowCircleRightIcon className="w-4 text-white self-end m-1" />
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
