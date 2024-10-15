//not working properly....

import { useEffect, useState } from "react";
import "./GridLights.css";
import _ from "lodash";

export default function GridLights() {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  //   const filled = Array.from({ length: 3 }, () => Array(3).fill(false));
  const filled = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  const [filledArray, updateFilled] = useState(filled);
  const [stack, updateStack] = useState([]);
  // let stack = [];

  const renderBox = (idx = [-1, -1], filled = false, border = true) => {
    filled = filledArray[idx[0]][idx[1]];

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
          let temp = _.cloneDeep(filledArray);
          temp[idx[0]][idx[1]] = true;
          updateFilled(temp);
          updateStack([...stack, [idx[0], idx[1]]]);
        }}
        disabled={filled}
      ></button>
    );
  };

  useEffect(() => {
    if (stack.length === 8) emptyStack();
  }, [stack]);

  const emptyStack = () => {
    let myStack = [...stack];
    let idx = myStack.pop();

    const itr = setInterval(() => {
      if (myStack.length == 0) {
        clearInterval(itr);
        updateStack([]);
      }
      let temp = _.cloneDeep(filledArray);
      temp[idx[0]][idx[1]] = false;
      updateFilled(temp);
      idx = myStack.pop();
    }, 300);
  };

  return (
    <div className="gridLights">
      {config.map((it, index) => {
        return (
          <div style={{ display: "flex", flexDirection: "row" }} key={index}>
            {it.map((item, idx) =>
              !!item
                ? renderBox([index, idx])
                : renderBox([index, idx], false, false)
            )}
          </div>
        );
      })}
    </div>
  );
}
