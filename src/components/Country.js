import PropTypes from 'prop-types';
import { GlobeIcon } from '@heroicons/react/outline';

const Country = ({ country: { name, code, flag } }) => (
  <article className=" flex flex-col justify-between bg-blue-500 h-40 even:bg-blue-600">
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
  </article>
);

Country.propTypes = {
  country: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Country;
