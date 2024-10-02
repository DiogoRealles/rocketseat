import { Route, Routes } from 'react-router-dom';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
};

export default Index;
