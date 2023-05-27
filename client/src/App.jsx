import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./auth/Login";
import { RoutesApp } from "./routes/RoutesApp";
import { RoutesAux } from "./routes/RoutesAux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>

        <Route path="/api/admin/*" element={<RoutesApp></RoutesApp>}></Route>
        <Route path="/api/aux/*" element={<RoutesAux></RoutesAux>}></Route>
      </Routes>

     
    </BrowserRouter>
  );
}

export default App;
