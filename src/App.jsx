import { useState, useEffect } from "react";

function SearchForm({ onSearch }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(name);
  };

  return (
    <form onSubmit={handleSubmit} className="text-center mt-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ingresa un nombre"
        className="border p-2 rounded"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Buscar
      </button>
    </form>
  );
}

function CharacterList({ characters }) {
  return (
    <div className="flex flex-col items-center mt-4">
      {characters.length === 0 ? (
        <p>No se encontraron personajes</p>
      ) : (
        characters.map((char) => (
          <div key={char.id} className="text-center p-4">
            <h2 className="text-xl font-bold">{char.attributes.name}</h2>
            <img
              src={char.attributes.image}
              alt={char.attributes.name}
              className="w-40 h-40 object-cover mt-2"
            />
          </div>
        ))
      )}
    </div>
  );
}

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://api.potterdb.com/v1/characters?filter[name_cont]=${searchTerm}`
      )
        .then((res) => res.json())
        .then((data) => setCharacters(data.data || []))
        .catch((error) => console.error("Error al obtener datos", error));
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">
        Buscador de Personajes de Harry Potter
      </h1>
      <SearchForm onSearch={setSearchTerm} />
      <CharacterList characters={characters} />
    </div>
  );
}
