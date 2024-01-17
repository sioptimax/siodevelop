import React from "react";
import { Container } from "@mui/material"
import { Routes, Route } from "react-router-dom";

import NavbarSIO from './components/NavbarSIO/NavbarSIO';
import PatientDataForm from "./pages/PatientData/Form/PatientDataForm";
import PatientHistoryForm from "./pages/PatientHistory/PatientHistoryForm";


function App() {
  return (
    <>
      <NavbarSIO />
        <Container maxWidth="ls">
          <Routes>
            <Route path="/" element={ <PatientDataForm />} />
            <Route path="/patientdata" element={ <PatientDataForm />} />
            <Route path="/patienthistory" element={ <PatientHistoryForm />} />
          </Routes>
        </Container>

    </>
  );
}

export default App;
