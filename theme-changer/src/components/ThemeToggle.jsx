import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/Slice/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { theme, themes } = useSelector((state) => state.theme);

  return (
    <div className="space-y-2 ">
      <p className='text-2xl py-3'>Current Theme: <strong>{theme.charAt(0).toUpperCase() + theme.slice(1)}</strong></p>
      <div className="flex justify-center items-center space-x-2">
        {themes.map((th) => (
          <button
            key={th}
            onClick={() => dispatch(setTheme(th))}
            className={`p-2 rounded  rounded-t-none border-none
              ${th === 'light' && 'bg-gray-200 text-black'}
              ${th === 'dark' && 'bg-gray-800 text-white'}
              ${th === 'blue' && 'bg-blue-500 text-white'}
              ${th === 'green' && 'bg-green-500 text-white'}
              ${th === 'red' && 'bg-red-500 text-white'}
              ${theme === th && 'border-none'}`}
          >
            {th.charAt(0).toUpperCase() + th.slice(1)} Mode
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
