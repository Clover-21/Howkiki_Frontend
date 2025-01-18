import React from "react";
import { StyledInput, StyledLabel, StyledP } from "../styles/checkBox.module";

function Checkbox({ text, onClick, checked }) {
  const handleClick = () => {
    console.log(`${text} 클릭됨`);
    onClick();
  };
  return (
    <StyledLabel htmlFor={text}>
      <StyledInput
        type="checkbox"
        checked={checked}
        onClick={handleClick}
        id={text}
        name={text}
      />
      <StyledP>{text}</StyledP>
    </StyledLabel>
  );
}

export default Checkbox;
