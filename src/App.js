import React, { useState } from "react";
import './App.css'; 
import HiloList from "./componentes/HiloList";
import Hilo from "./componentes/Hilo";

const App = () => {
  const [hilos] = useState([
    {
      id: 1,
      titulo: "Hola mundo!",
      autor: "René",
      fecha: Date.now(),
      contenido: "Contenido del hilo",
      comentarios: []
    },
  ]);

  const [selectedHilo, setSelectedHilo] = useState(null);

  return (
    <div>
      <div className="barra-superior">
        <h1>Mi Foro</h1>
      </div>
      <div className="main">
        {selectedHilo ? (
          <Hilo hilo={selectedHilo} volver={() => setSelectedHilo(null)} />
        ) : (
          <HiloList hilos={hilos} onSelectHilo={setSelectedHilo} />
        )}
      </div>
    </div>
  );
};

export default App;
