import { useState } from "react";

const Dropdown = ({ colors }) => {
  const [selectedItem, setselectedItem] = useState("");

  return (
    <div>
      <h1>Select a color:</h1>
      <select
        onChange={(e) => setselectedItem(e.target.value)}
        className={`text-${selectedItem}-500`}
        name=""
        id=""
      >
        {colors.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
