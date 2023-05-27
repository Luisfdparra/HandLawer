import React from "react";
import Template from "../components/Template";
import { Route, Routes } from "react-router-dom";
import { GestionAux } from "../components/views/GestionAux";
import { GestionInd } from "../components/views/GestionInd";

export function RoutesApp() {
  return (
    <Template>
      <Routes>
        <Route path="gestionaux" element={<GestionAux></GestionAux>}></Route>
        <Route path="gestionind" element={<GestionInd></GestionInd>}></Route>
      </Routes>
    </Template>
  );
}
