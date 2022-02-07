import PropTypes from 'prop-types';

const Header = ({ name, flag, code }) => (
  <article className="flex justify-around bg-blue-500 p-3">
    <img
      className="h-auto w-32 self-center p-1"
      src={flag}
      alt="Country flag"
    />
    <div className="flex flex-col justify-end">
      <h3 className="font-gill font-bold text-white text-xl text-right mr-2">
        {name}
      </h3>
      <p className="font-lato text-lg text-right text-white mr-2">
        {code}
      </p>
    </div>
  </article>
);

Header.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.string,
  code: PropTypes.string,
};

Header.defaultProps = {
  name: '',
  flag: '',
  code: '',
};

export default Header;
