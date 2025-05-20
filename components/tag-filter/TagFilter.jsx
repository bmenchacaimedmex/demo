import React from "react";
import "./Tag.css"; // Estilos externos

const Tag = ({
  children,
  active = false,
  minimal = false,
  interactive = false,
  removable = false,
  round = false,
  onRemove,
}) => {
  const classNames = [
    "tag",
    active && "active",
    minimal && "minimal",
    interactive && "interactive",
    round && "round",
  ]
    .filter(Boolean)
    .join(" ");

  const handleRemove = (e) => {
    e.stopPropagation(); // Previene eventos padres
    if (onRemove) onRemove();
  };

  return (
    <div className={classNames}>
      {children}
      {removable && (
        <span className="remove-icon" onClick={handleRemove}>
          <svg viewBox="0 0 24 24">
            <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
          </svg>
        </span>
      )}
    </div>
  );
};

export default Tag;
