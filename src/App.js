import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./pages/Form";
import Scanner from "./pages/Scanner";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </div>
  );
}

export default App;
