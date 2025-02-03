import React from "react";
import {
  StyledInput,
  StyledLabel,
  StyledP,
} from "../../styles/components/checkBox.module";

function Checkbox({ text, onChange, checked }) {
  const handleChange = () => {
    console.log(`${text} 클릭됨`);
    onChange();
  };
  return (
    <StyledLabel htmlFor={text}>
      <StyledInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        id={text}
        name={text}
      />
      <StyledP>{text}</StyledP>
    </StyledLabel>
  );
}

export default Checkbox;
