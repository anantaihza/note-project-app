import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUserLogged, putAccessToken } from "./utils/network-data";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import DetailNote from "./pages/DetailNote";
import AddNote from "./pages/AddNote";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initialized, setInitialized] = useState(true); //harusnya awalnya true

  const fetchUserLogged = async () => {
    const { error, data } = await getUserLogged();

    if (!error) {
      setAuthedUser(data);
    }
    setInitialized(false);
  };

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    fetchUserLogged();
  };
  
  const onLogout = () => {
    setAuthedUser(null);
    localStorage.removeItem("accessToken");

  }

  useEffect(() => {
    fetchUserLogged();
  }, []);

  if (initialized) {
    return null;
  } else {
    return authedUser === null ? (
      <Routes>
        <Route path="/*" element={<Login loginSuccess={onLoginSuccess} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    ) : (
      <Routes>
        <Route path="/" element={<Home logout={onLogout} />} />
        <Route path="/detail/:id" element={<DetailNote logout={onLogout} />} />
        <Route path="/archive" element={<Archive logout={onLogout} />} />
        <Route path="/add" element={<AddNote logout={onLogout} />} />
        <Route path="*" element={<NotFound logout={onLogout} />} />
      </Routes>
    );
  }
}

export default App;
