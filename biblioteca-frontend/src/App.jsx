import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pesquisa from "./pages/Pesquisa";
import Lancamentos from "./pages/Lancamentos";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Pesquisa />} />
          <Route path="/lancamentos" element={<Lancamentos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
