import "./ClearableInput.css";
import { useRef } from "react";

export default function ClearableInput({ value, onChange, placeholder }) {
  const inputRef = useRef(null);

  const handleClear = () => {
    onChange("");
    inputRef.current.focus();
  };

  return (
    <div className="input-wrapper">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
