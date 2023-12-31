import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
