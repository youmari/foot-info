import { CogIcon, MicrophoneIcon } from '@heroicons/react/solid';

const Bar = () => (
  <div className="flex justify-end bg-blue-800">
    <MicrophoneIcon className="w-5 text-white cursor-pointer" />
    <CogIcon className="w-5 text-white m-3 ml-6 mr-3 cursor-pointer" />
  </div>
);

export default Bar;
