import { useSelector } from 'react-redux';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  const themeClasses = {
    light: 'bg-white text-black',
    dark: 'bg-gray-900 text-white',
    blue: 'bg-blue-800 text-white',
    green: 'bg-green-800 text-white',
    red: 'bg-red-700 text-white',
  };

  return (
    <div
      className={`${themeClasses[theme]} min-h-screen transition-colors duration-500 py-12`}
    >
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold">Theme Changer</h1>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
