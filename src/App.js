import { Route, Routes } from "react-router-dom";
import Navbar from "./partials/Navbar";
import Homepage from "./pages/Homepage";
import Newcategory from "./pages/Newcategory";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-category" element={<Newcategory />} />
      </Routes>

    </>
  );
}

export default App;
