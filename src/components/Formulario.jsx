import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  return (
    <div>
      <Form>
        <div className="d-flex flex-wrap justify-content-center">
      <Form.Group className="mb-3 me-md-5 px-5 py-4 bg-claro rounded-4" controlId="ciudadForm">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control type="text" placeholder="Ej: San Miguel de Tucumán" required/>
      </Form.Group>
      <Form.Group className="mb-3 px-5 py-4 bg-claro rounded-4" controlId="codigoForm">
        <Form.Label>Codigo de pais</Form.Label>
        <Form.Control type="text" placeholder="Ej: AR" required/>
      </Form.Group>
        </div>
      <div className="w-50 d-grid gap-2 mx-auto">
          <Button size="lg" variant="info" className="text-light">Buscar</Button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
