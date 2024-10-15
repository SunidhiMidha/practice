import { useState } from "react";
import "./Password.css";

export default function Password() {
  const [pass, updatePass] = useState("");
  const [length, updateLength] = useState(4);
  const [copied, updateCopied] = useState(false);

  const checkBoxes = [
    { title: "Use UpperCase Letters", state: false, id: 1 },
    { title: "Use LowerCase Letters", state: true, id: 2 },
    { title: "Use Numbers", state: false, id: 3 },
    { title: "Use Symbols", state: false, id: 4 },
  ];

  const [checkBoxData, updateChecks] = useState(checkBoxes);

  const charLengthChange = (e) => {
    if (e?.nativeEvent?.target?.value) updateLength(e.nativeEvent.target.value);
  };

  const toggleChecks = (index) => {
    let temp = [...checkBoxData];
    temp[index].state = !temp[index].state;
    updateChecks(temp);
  };

  const generatePass = () => {
    updateCopied(false);
    const selected = checkBoxData.filter((it) => it?.state);
    if (!selected.length) {
      alert("Please select atleast one checkbox");
      return;
    }

    let charSet = "";
    selected.forEach((it) => {
      switch (it.id) {
        case 1:
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case 2:
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case 3:
          charSet += "1234567890";
          break;
        case 4:
          charSet += "!@#$%^&*";
          break;
      }
    });

    let output = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * charSet.length);
      output += charSet[index];
    }

    updatePass(output);
  };

  return (
    <div className="main-container">
      {pass && (
        <div className="ps-container">
          <div className="ps-text">{pass}</div>
          <button
            className="ps-button"
            onClick={() => {
              navigator.clipboard.writeText(pass);
              updateCopied(true);
            }}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}

      <div className="ps-container">
        <div className="ps-text">Character Length</div>
        <div className="ps-text">{length}</div>
      </div>
      <input
        type="range"
        className="slider"
        min={4}
        max={12}
        value={length}
        onChange={charLengthChange}
      />
      {checkBoxData.map((it, index) => {
        return (
          <div key={index} style={{ alignSelf: "flex-start", marginTop: 12 }}>
            <input
              type="checkbox"
              checked={it.state}
              onChange={() => toggleChecks(index)}
            />
            <label style={{ marginLeft: 4 }}>{it.title}</label>
          </div>
        );
      })}
      <button className="ps-button-generate" onClick={generatePass}>
        Generate Password
      </button>
    </div>
  );
}
