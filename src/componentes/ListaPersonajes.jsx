export default function ListaPersonajes({ personajes }) {
  return (
    <div className="flex flex-col items-center mt-4">
      {personajes.length === 0 ? (
        <p>No se encontraron personajes</p>
      ) : (
        personajes.map((personaje) => (
          <div key={personaje.id} className="text-center p-4">
            <h2 className="text-lg font-semibold">
              {personaje.attributes.name}
            </h2>
            <img
              src={personaje.attributes.image}
              alt={personaje.attributes.name}
              className="w-40 h-40 object-cover mt-2"
            />
          </div>
        ))
      )}
    </div>
  );
}
