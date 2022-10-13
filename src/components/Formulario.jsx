import Tiempo from "./Tiempo";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const Formulario = () => {
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [url, setUrl] = useState(
    "https://api.openweathermap.org/data/2.5/weather?appid=f6e8b709dc017e4f8c6c21582c002d3a&lang=es&units=metric"
  );

  const [temperatura, setTemperatura] = useState([]);
  const [info, setInfo] = useState([]);

  const consultarApi = async () => {
    try {
      const respuesta = await fetch(url);
      const tiempoCiudad = await respuesta.json();
      setTemperatura(tiempoCiudad.main);
      setInfo(tiempoCiudad.weather[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUrl(
      `https://api.openweathermap.org/data/2.5/weather?appid=f6e8b709dc017e4f8c6c21582c002d3a&units=metric&lang=es&q=${ciudad},${pais}`
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    consultarApi();
  };
  const componenteCondicional =
    temperatura.length === 0 ? (
      <section></section>
    ) : (
      <Tiempo {...temperatura} {...info} ciudad={ciudad} pais={pais}></Tiempo>
    );

  return (
    <div>
      <section>
        <Form onSubmit={handleSubmit}>
          <div className="d-flex flex-wrap justify-content-center">
            <Form.Group
              className="mb-3 me-md-5 px-5 py-4 fs-4 bg-claro rounded-4"
              controlId="ciudadForm"
            >
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: San Miguel de Tucumán"
                required
                onChange={(e) => {
                  setCiudad(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 px-5 py-4 fs-4 bg-claro rounded-4"
              controlId="codigoForm"
            >
              <Form.Label>Codigo de pais</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: AR"
                required
                onChange={(e) => {
                  setPais(e.target.value);
                }}
              />
            </Form.Group>
          </div>
          <div className="w-50 d-grid gap-2 mx-auto">
            <Button
              size="lg"
              variant="info"
              className="text-light"
              type="submit"
            >
              Buscar
            </Button>
          </div>
        </Form>
      </section>
      {componenteCondicional}
    </div>
  );
};
export default Formulario;
