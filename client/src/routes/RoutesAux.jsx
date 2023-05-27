import React from "react";
import { Route, Routes } from "react-router-dom";
import { GestionInd } from "../components/views/GestionInd";
import TemplateAux from "../components/TemplateAux";

export function RoutesAux() {
  return (
    <TemplateAux>
      <Routes>
        <Route path="gestionind" element={<GestionInd></GestionInd>}></Route>
      </Routes>
    </TemplateAux>
  );
}
