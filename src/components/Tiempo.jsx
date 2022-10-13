import { useState } from "react";
import { Sun } from "react-bootstrap-icons";

const Tiempo = ({
  description,
  icon,
  temp,
  feels_like,
  humidity,
  pressure,
  temp_min,
  temp_max,
  ciudad,
  pais,
}) => {
  const [img, setImg] = useState(
    `http://openweathermap.org/img/wn/${icon}@2x.png`
  );

  return (
    <section className="d-flex flex-wrap align-items-center bg-claro rounded-4 my-4 mx-5 py-4 px-4">
      <article className="col-12 col-lg-5">
        <h2 id="ciudad">{ciudad}</h2>
        <p className="fs-3 ms-2 mb-0">{description}</p>
        <img src={img}></img>
      </article>
      <article className="col-12 col-lg-4">
        <p id="temp" className="m-0">
          {temp}°
        </p>
        <div id="minMax" className="d-flex">
          <p>{temp_min}°</p>
          <span className="mx-1">/</span>
          <p>{temp_max}°</p>
        </div>
      </article>
      <article className="col-12 col-lg-3 fs-5">
        <p>Sensacion termica: {feels_like}°</p>
        <p>Humedad: {humidity}%</p>
        <p>Presion: {pressure} MB</p>
      </article>
    </section>
  );
};

export default Tiempo;
