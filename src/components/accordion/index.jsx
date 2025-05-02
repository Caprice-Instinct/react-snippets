import { useState } from "react";
import data from "./data";
import "./styles.css";
// Single selection

// Multiple selection

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiselection, setEnableMultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultipleSelection(currentId) {
    let copyMultiple = [...multiple];
    const indexOfCurrentId = copyMultiple.indexOf(currentId);
    if (indexOfCurrentId === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(indexOfCurrentId, 1);

    setMultiple(copyMultiple);
    console.log(copyMultiple);
  }

  function toggleMultiselection() {
    setSelected(null)
    setEnableMultiselection(!enableMultiselection);

    if (enableMultiselection) {
      setMultiple([]);
    }
  }

  return (
    <div className="wrapper">
      <button onClick={toggleMultiselection}>
        {enableMultiselection
          ? "Switch to Single Selection"
          : "Enable Multi Selection"}{" "}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiselection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiselection ? (
                multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="content">{dataItem.answer}</div>
                )
              ) : selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  );
}
