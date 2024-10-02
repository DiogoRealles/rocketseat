import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Index = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      {/* <AuthRoutes /> */}
    </BrowserRouter>
  );
};

export default Index;
