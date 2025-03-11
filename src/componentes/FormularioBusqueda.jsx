import { useState } from "react";

export default function FormularioBusqueda({ onBuscar }) {
  const [nombre, setNombre] = useState("");

  const manejarCambio = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    onBuscar(valor.trim());
  };

  return (
    <div className="text-center">
      <input
        type="text"
        value={nombre}
        onChange={manejarCambio}
        placeholder="Ingresa un nombre"
        className="border p-4 text-lg rounded bg-blue-300 text-black w-80 text-center"
      />
      <button className="ml-2 p-4 text-lg bg-green-500 text-white rounded">
        Buscar
      </button>
    </div>
  );
}
