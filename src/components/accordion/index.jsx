import { useState } from "react";
import data from "./data";
import "./styles.css";
// Single selection

// Multiple selection

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
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
