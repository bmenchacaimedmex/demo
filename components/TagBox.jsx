"use client";

import React, { useState } from "react";
import TagFilter from "@/components/tag-filter/TagFilter";

const INITIAL_TAGS = [];

const TagBox = () => {
  const [tags, setTags] = useState(INITIAL_TAGS);
  const [nextId, setNextId] = useState(1);

  const addTag = () => {
    const newTag = `Nuevo ${nextId}`;
    setTags([...tags, newTag]);
    setNextId(nextId + 1);
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const resetTags = () => {
    setTags(INITIAL_TAGS);
    setNextId(1);
  };

  const search = () => {
    alert("Buscando con filtros: " + tags.join(", "));
    // Puedes reemplazar esto por una llamada real a una API o navegación
  };

  return (
    <div className="border-2 border-green-500 rounded p-6 bg-white shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Filtro de búsqueda</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <TagFilter
            key={tag}
            active
            interactive
            removable
            round
            onRemove={() => removeTag(tag)}
          >
            {tag}
          </TagFilter>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={addTag}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Agregar filtro
        </button>
        <button
          onClick={search}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Buscar
        </button>
        <button
          onClick={resetTags}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default TagBox;
