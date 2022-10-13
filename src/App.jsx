import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Formulario from "./components/Formulario";
import Titulo from "./components/Titulo";

function App() {
  return (
    <Container fluid>
      <Titulo></Titulo>
      <Formulario></Formulario>
    </Container>
  );
}

export default App;
