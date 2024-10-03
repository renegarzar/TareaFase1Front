import React from "react";

const Comentario = ({ comentario, onDelete }) => {
  return (
    <div className="comentario">
      <div className="comentario-top">
        <p className="usuario">{comentario.autor}</p>
        <p className="comentario-fecha">{comentario.fecha}</p>
        <button onClick={() => onDelete(comentario.id)}>Eliminar</button> {/* Botón para eliminar */}
      </div>
      <div className="contenido-comentario">{comentario.contenido}</div>
    </div>
  );
};

export default Comentario;
