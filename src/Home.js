import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const pages = [
  "Counter", //custom hook for increment decrement
  "Pagination with next",
  "Password Generator",
  "Grid Lights", //3*3 Grid Light
  "Selectable Grids",
  "Custom Hooks",
  "Lazy Component",
  "Star Rating", //star rating with 3 states: empty, hover (light yellow) , selected (yellow)
  "Bishop Attacks", //highlight the pos where mouse is hovered & which positions bishop can attack from that
  "Nested Comments",
];
const links = [
  "./counter",
  "./pagination/next",
  "./passwordGen",
  "./gridlLghts",
  "./selectableGrids",
  "./hooks",
  "./lazy",
  "./star",
  "./bishop",
  "./comments",
];

export default function Home() {
  let navigate = useNavigate();
  const [showModal, updateShowModal] = useState(false);

  const onClick = (i) => {
    navigate(links[i]);
  };

  const subTitleClick = () => {
    updateShowModal(true);
  };

  const renderModal = () => {
    return (
      <div
        className="overlay"
        onClick={() => {
          updateShowModal(false);
        }}
      >
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div>
            {pages.map((it, index) => {
              return (
                <div
                  className="menu-element"
                  onClick={() => onClick(index)}
                  key={index}
                >
                  {it}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="home-container">
      <div className="title">Practice Projects</div>
      <div className="sub-title" onClick={subTitleClick}>
        Go to
      </div>
      {showModal && renderModal()}
    </div>
  );
}
