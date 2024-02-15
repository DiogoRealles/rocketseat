import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../App/Home";
import New from "../App/New";
import Profile from "../App/Profile";
import Details from "../App/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
