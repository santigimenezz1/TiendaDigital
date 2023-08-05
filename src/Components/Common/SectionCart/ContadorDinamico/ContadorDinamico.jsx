import React from "react";

const ContadorDinamico = ({ producto }) => {
  return (
    <div>
      <h1>+</h1>
      <h1>{producto.cantidad}</h1>
      <h1>-</h1>
    </div>
  );
};

export default ContadorDinamico;
