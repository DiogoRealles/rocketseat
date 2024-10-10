import { Route, Routes, Navigate } from 'react-router-dom';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Index = () => {
  const user = localStorage.getItem('@rocketnotes:user');

  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/register" element={<Signup />} />

      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  );
};

export default Index;
