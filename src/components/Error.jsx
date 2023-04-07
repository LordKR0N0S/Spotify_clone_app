import { Link } from 'react-router-dom';

const reloadPage = () => {
  setTimeout(() => window.location.reload(false), 300);
};

const Error = ({ height }) => (
  <div className={`w-full ${!height || 'h-screen'} flex flex-col justify-center items-center bg-gradient-to-br from-black to-[#121286]`}>
    <h1 className="text-2xl font-bold text-white mt-2 text-center">
      Something went wrong. Please try again.
    </h1>
    <div className="mt-4">
      <Link to="/">
        <button
          type="button"
          onClick={() => reloadPage()}
          className="px-6 py-2 mr-2 bg-white/5 hover:bg-white/10 ease-in-out duration-300 backdrop-blur-sm rounded-lg text-white cursor-pointer"
        >
          back
        </button>{' '}
      </Link>
      <span className="text-white">to homepage</span>
    </div>
  </div>
);

export default Error;
