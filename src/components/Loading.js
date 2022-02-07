import { RefreshIcon } from '@heroicons/react/outline';

const Loading = () => (
  <div className="h-full flex flex-col items-center justify-center">
    <RefreshIcon className="w-14 text-white animate-spin" />
    <p className="font-lato font-bold text-xl text-white">Loading...</p>
  </div>
);

export default Loading;
