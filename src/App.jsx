import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import { putAccessToken } from "./utils/network-data";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Archive from "./pages/Archive";
import AddNote from "./pages/AddNote";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import DetailNote from "./pages/DetailNote";
import useFetchUser from "./hooks/useFetchUser";

function App() {
  const { theme } = useTheme();
  const { authedUser, updateAuthedUser, initialized, fetchUserLogged } =
    useFetchUser();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    await fetchUserLogged();
  };

  const onLogout = () => {
    updateAuthedUser(null);
    localStorage.removeItem("accessToken");
  };

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
        <Route
          path="/"
          element={
            <Home
              username={authedUser ? authedUser.name : "User"}
              logout={onLogout}
            />
          }
        />
        <Route
          path="/archive"
          element={
            <Archive
              username={authedUser ? authedUser.name : "User"}
              logout={onLogout}
            />
          }
        />
        <Route path="/detail/:id" element={<DetailNote logout={onLogout} />} />
        <Route path="/add" element={<AddNote logout={onLogout} />} />
        <Route path="*" element={<NotFound logout={onLogout} />} />
      </Routes>
    );
  }
}

export default App;
