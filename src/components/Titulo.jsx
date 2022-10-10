import { CloudSun } from "react-bootstrap-icons";

const Titulo = () => {
    return (
        <section className="d-flex justify-content-center bg-claro rounded-4 my-3">
            <h1 className="display-3">Clima App</h1><CloudSun className="fs-1 ms-3 align-self-center"></CloudSun>
        </section>
    );
};

export default Titulo;