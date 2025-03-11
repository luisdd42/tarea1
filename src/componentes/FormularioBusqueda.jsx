import { useState } from "react";

export default function FormularioBusqueda({ onBuscar }) {
  const [nombre, setNombre] = useState("");

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    onBuscar(valor); // Llama a la función en tiempo real
  };

  return (
    <div className="text-center mt-4">
      <input
        type="text"
        value={nombre}
        onChange={manejarCambio}
        placeholder="Ingresa un nombre"
        className="border p-2 rounded"
      />
    </div>
  );
}
