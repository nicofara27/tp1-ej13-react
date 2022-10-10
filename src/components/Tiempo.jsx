import { Sun } from "react-bootstrap-icons";

const Tiempo = () => {
    return (
        <section className="d-flex flex-wrap justify-content-start justify-content-lg-around align-items-center bg-claro rounded-4 my-4 py-4 px-4">
            <article className="col-12 col-lg-10">
                <h2 id="ciudad">San Miguel de Tucuman</h2>
                <Sun className="fs-1"></Sun>
            </article>
                <article className="col-12 col-lg-2">
                    <p id="temp" className="m-0">32°</p>
                    <div id="minMax" className="d-flex">
                        <p>16°</p>
                        <span className="mx-1">/</span>
                        <p>34°</p>
                    </div>
                </article>
        </section>
    );
};

export default Tiempo;