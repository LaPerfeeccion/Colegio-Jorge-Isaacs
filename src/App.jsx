import { BrowserRouter as Router, Route, Routes, Form, BrowserRouter } from "react-router-dom";
import Principal from "./Pages/Principal";
import Foro1 from "./Pages/Foro1";
import Promociones from "./Pages/Promociones";
import Historia from "./Pages/Historia";
import "./App.css"
import gallery from "./Pages/gallery";
import Deportistaect from "./Pages/Deportistasect";
import Bio from "./Pages/Bio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Principal} />
        <Route path="/Foro" Component={Foro1} />
        <Route path="/Promociones" Component={Promociones} />
        <Route path="/Historia" Component={Historia} />
        <Route path="/gallery" Component={gallery} />
        <Route path="/Deportistaect" Component={Deportistaect} />
        <Route path="/Bio/:id" element={<Bio />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
