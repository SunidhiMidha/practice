import React, { useState } from "react";
import "./star.css";
export const SELECTED = "selected";
export const HOVERED = "hover";

export default function StarMain() {
  let numberOfStars = 5;
  let [starState, updateStarState] = useState("");
  let [selectedIndex, updateIndex] = useState(-1);

  const getStarColor = (index) => {
    if (selectedIndex < index) {
      return "grey";
    } else if (starState === SELECTED) {
      return "#FDDA0D";
    } else if (starState === HOVERED) {
      return "#FFFDD0";
    } else {
      return "grey";
    }
  };

  return (
    <div>
      <div
        className="star-container"
        onMouseLeave={() => {
          if (starState === HOVERED) {
            updateStarState("");
            updateIndex(-1);
          }
        }}
      >
        {Array.from({ length: numberOfStars }, (_, index) => {
          return (
            <span
              className="star"
              style={{ color: getStarColor(index)}}
              onMouseEnter={() => {
                if (starState !== SELECTED) {
                  updateIndex(index);
                  updateStarState(HOVERED);
                }
              }}
              onClick={() => {
                if (starState != SELECTED) {
                updateIndex(index);
                updateStarState(SELECTED);
                }
              }}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <button
        onClick={() => {
          updateStarState("");
          updateIndex(-1);
        }}
      >
        Reset
      </button>
    </div>
  );
}
