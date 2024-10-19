import React, { useState } from "react";
import "./chess.css";

export default function BishopAttack() {
  const [hovered, updateHovered] = useState([]);

  const onMouseEnter = (r, c) => {
    updateHovered([r, c]);
  };

  const onMouseLeave = () => {
    updateHovered([]);
  };

  const canAttack = (r, c) => {
    return Math.abs(r - hovered[0]) == Math.abs(c - hovered[1]);
  };

  return (
    <div onMouseLeave={onMouseLeave}>
      {Array.from({ length: 8 }, (_, row_idx) => {
        return (
          <div className="chess-row">
            {Array.from({ length: 8 }, (_, col_idx) => {
              let class_cell =
                "chess-cell " +
                (row_idx == hovered[0] && col_idx == hovered[1]
                  ? "light-blue"
                  : canAttack(row_idx, col_idx)
                  ? "dark-blue"
                  : (row_idx % 2 == 0 && col_idx % 2 == 0) ||
                    (row_idx % 2 != 0 && col_idx % 2 != 0)
                  ? "black"
                  : "white");
              return (
                <div
                  className={class_cell}
                  onMouseEnter={() => onMouseEnter(row_idx, col_idx)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
