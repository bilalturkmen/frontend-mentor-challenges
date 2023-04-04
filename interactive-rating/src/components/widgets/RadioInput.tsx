interface RadioInputProps {
  value: string;
  label: string;
  handleCheckRating: (selectedRating: string) => void;
}

const RadioInput = ({ value, label, handleCheckRating }: RadioInputProps) => {
  return (
    <label htmlFor={`radio-${label}`}>
      <input
        className="rating--btn"
        type="radio"
        id={`radio-${label}`}
        name="rating-button"
        value={value}
        onChange={(e) => handleCheckRating(e.target.value)}
      />
      <span> {label} </span>
    </label>
  );
};

export default RadioInput;
