import React from "react";

const HiloList = ({ hilos, onSelectHilo }) => {
  return (
    <ol>
      {hilos.map((hilo) => (
        <li key={hilo.id} className="fila">
          <button onClick={() => onSelectHilo(hilo)} className="hilo-boton">
            <h4 className="titulo">{hilo.titulo}</h4>
            <div className="fondo">
              <p className="fecha">
                {new Date(hilo.fecha).toLocaleString()}</p>
              <p className="contador-comentarios">
                {hilo.comentarios.length} comentarios
              </p>
            </div>
          </button>
        </li>
      ))}
    </ol>
  );
};

export default HiloList;
