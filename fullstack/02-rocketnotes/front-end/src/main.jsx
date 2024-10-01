import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Details from './pages/Details';
import Home from './pages/Home/Index';
import Signin from './pages/Signin/Index';
import Signup from './pages/Signup/Index';
import Profile from './pages/Profile/Index';
import New from './pages/New/Index';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Details /> */}
      {/* <Home /> */}
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <Profile /> */}
      <New />
    </ThemeProvider>
  </StrictMode>
);
