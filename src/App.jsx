import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import DetailNote from "./pages/DetailNote";
import AddNote from "./pages/AddNote";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/detail/:id" element={<DetailNote />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
