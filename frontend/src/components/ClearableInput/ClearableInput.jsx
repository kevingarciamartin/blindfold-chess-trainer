import "./ClearableInput.css";
import { useRef } from "react";

export default function ClearableInput({ value, onChange, placeholder }) {
  const inputRef = useRef(null);

  const handleClear = () => {
    onChange("");
    inputRef.current.focus();
  };

  return (
    <div className="input-wrapper" role="group" aria-label={placeholder || "Input"}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder || "Input"}
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
