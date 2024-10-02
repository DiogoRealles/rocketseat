import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Routes from './routes/Index';
import Details from './pages/Details';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import New from './pages/New';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
      {/* <Details /> */}
      {/* <Home /> */}
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <Profile /> */}
      {/* <New /> */}
    </ThemeProvider>
  </StrictMode>
);
