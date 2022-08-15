
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from './assets/theme';
import { CircularProgress, ThemeProvider } from '@mui/material'
import Loader from './pages/Loader';
import Footer from './pages/Footer';
import Social from './pages/Social';
import MainHome from './pages/MainHome';
import ThemeContext from './contexts/themeContext';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [])
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <MainHome />
            <Social />
            <Loader />
            <Footer />
          </ThemeProvider>
        </ThemeContext.Provider>

      </Suspense>

    </BrowserRouter>
  );
}

export default App;
