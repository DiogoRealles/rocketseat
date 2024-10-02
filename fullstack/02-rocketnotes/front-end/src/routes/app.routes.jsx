import { Route, Routes } from 'react-router-dom';

import New from '../pages/New';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Profile from '../pages/Profile';

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default Index;
