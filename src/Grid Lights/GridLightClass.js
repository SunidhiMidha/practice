import { Component } from "react";
import "./GridLights.css";
import _ from "lodash";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const filled = Array.from({ length: 3 }, () => Array(3).fill(false));

export default class GridLights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filledArray: filled,
      stack: [],
    };
  }

  renderBox = (idx = [-1, -1], filled = false, border = true) => {
    filled = this.state.filledArray[idx[0]][idx[1]];

    return (
      <button
        className={
          !border
            ? "box-style empty-border"
            : filled
            ? "box-style green"
            : "box-style"
        }
        onClick={() => {
          let temp = _.cloneDeep(this.state.filledArray);
          temp[idx[0]][idx[1]] = true;
          this.setState(
            {
              filledArray: temp,
              stack: [...this.state.stack, [idx[0], idx[1]]],
            },
            () => {
              if (this.state.stack.length === 8) this.emptyStack();
            }
          );
        }}
        disabled={filled}
        // add disable when stack is popping too
      ></button>
    );
  };

  emptyStack = () => {
    let myStack = [...this.state.stack];
    let idx = myStack.pop();

    const itr = setInterval(() => {
      if (myStack.length == 0) {
        clearInterval(itr);
        this.setState({ stack: [] });
      }
      let temp = _.cloneDeep(this.state.filledArray);
      temp[idx[0]][idx[1]] = false;
      this.setState({
        filledArray: temp,
      });
      idx = myStack.pop();
    }, 300);
  };

  render() {
    return (
      <div className="gridLights">
        {config.map((it, index) => {
          return (
            <div style={{ display: "flex", flexDirection: "row" }} key={index}>
              {it.map((item, idx) =>
                !!item
                  ? this.renderBox([index, idx])
                  : this.renderBox([index, idx], false, false)
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
