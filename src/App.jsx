import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import DetailNote from "./pages/DetailNote";
import AddNote from "./pages/AddNote";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [authUser, setAuthUser] = useState(null);


  return authUser === null ? (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<DetailNote />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/add" element={<AddNote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
