"use client";

import React, { useState } from "react";
import TagFilter from "@/components/tag-filter/TagFilter";
import "./styles.css";

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
    };

    return (
        <fieldset className="tagbox-fieldset">
            <legend className="tagbox-legend">Filtro de búsqueda</legend>
            <div className="tagbox-flex">
                <div className="tagbox-left">
                    <div className="tagbox-tags-area">
                        {tags.length === 0 && (
                            <p className="tagbox-placeholder">No hay filtros activos.</p>
                        )}
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
                </div>
                <div className="tagbox-right">
                    <button onClick={addTag} className="tagbox-button blue">Agregar filtro</button>
                    <button onClick={search} className="tagbox-button green">Buscar</button>
                    <button onClick={resetTags} className="tagbox-button gray">Reiniciar</button>
                </div>
            </div>
        </fieldset>
    );
};

export default TagBox;
