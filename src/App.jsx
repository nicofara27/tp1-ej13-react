import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Formulario from './components/Formulario';
import Tiempo from './components/Tiempo';
import Titulo from './components/Titulo';

function App() {
  return (
    <Container fluid >
      <Titulo></Titulo>
      <Formulario></Formulario>
      <Tiempo></Tiempo>
    </Container>
  );
}

export default App;
