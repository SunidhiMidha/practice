import React, { Component } from "react";
import "./style.css";
const rows = 10,
  cols = 10;

export default class SelectableGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      isMouseClicked: false,
    };
  }

  handleCellSelected = (idx) => {
    let selected = [];
    selected.push(idx);
    this.setState({
      isMouseClicked: true,
      selected: [idx],
      startCell: idx
    });
  };

  handleMouseEnter = (idx) => {
    //when mouse enters in a particular cell, no need of clicking
    if (this.state.isMouseClicked) {
      let selected = []

      let startCell = this.state.startCell;
      let endCell = idx;

      let startRow = Math.floor((startCell - 1) / cols);
      let startCol = (startCell - 1) % cols;

      let endRow = Math.floor((endCell - 1) / cols);
      let endCol = (endCell - 1) % cols;

      let fromRow = Math.min(startRow, endRow);
      let toRow = Math.max(startRow, endRow);

      let fromCol = Math.min(startCol, endCol);
      let toCol = Math.max(startCol, endCol);

      for (let i = fromRow; i <= toRow; i++) {
        for (let j = fromCol; j <= toCol; j++) {
          selected.push(i * cols + j + 1);
        }
      }
      this.setState({ selected });
    }
  };

  handleReleaseMouse = () => {
    this.setState({
      isMouseClicked: false,
      selected: [],
    });
  };

  render() {
    return (
      <div>
        <div
          className="grid"
          style={{ "--rows": rows, "--cols": cols }}
          onMouseUp={this.handleReleaseMouse}
        >
          {[...Array(rows * cols)].map((_, idx) => {
            return (
              <div
                className={
                  this.state.selected.includes(idx + 1)
                    ? "cell selected"
                    : "cell"
                }
                key={idx}
                onMouseDown={() => this.handleCellSelected(idx + 1)}
                onMouseEnter={() => this.handleMouseEnter(idx + 1)}
              >
                {idx + 1}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
