import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset, startStop, tick } from '../redux/slice/timeSlice';

const Stopwatch = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.stopwatch.time);

  const isActive = useSelector((state) => state.stopwatch.isActive);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, dispatch]);



  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);

    return `${hours}:${minutes}:${seconds}.${getMilliseconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <div className="text-5xl font-mono mb-8">{formatTime(time)}</div>
      <div className="flex space-x-4">
        <button onClick={() => dispatch(startStop())} className="bg-green-500 px-6 py-2 rounded-lg text-white hover:bg-green-700">
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button onClick={() => dispatch(reset())}  className="bg-red-500 px-6 py-2 rounded-lg text-white hover:bg-red-700">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
