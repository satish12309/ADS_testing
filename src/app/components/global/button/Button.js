import React from "react";

const Button = ({
  buttonType,
  text,
  passIcon,
  outline,
  invert,
  bannerButton,
  nobannerButton,
  whiteBgButton,
  ButtonWhiteBg,
  greenButton,
  blackButton,
  OrangeButton,
  purpleButton,
  grayButton,
  newBlueButton, // New prop for the blue button
}) => {
  return (
    <button
      className={
        `glassEffect ` +
        (ButtonWhiteBg
          ? "ButtonWhiteBg"
          : whiteBgButton
          ? "whiteBgButton"
          : nobannerButton
          ? "nobannerButton"
          : bannerButton
          ? "bannerButton"
          : outline
          ? "outLineBtn"
          : greenButton
          ? "greenButton"
          : OrangeButton
          ? "OrangeButton"
          : blackButton
          ? "blackButton"
          : grayButton
          ? "grayButton"
          : purpleButton
          ? "purpleButton"
          : newBlueButton
          ? "newBlueButton"
          : "button")
      }
      style={invert ? { flexFlow: "row-reverse" } : { flexFlow: "row" }}
      type={buttonType ? buttonType : ""}
    >
      {text}
      {passIcon}
    </button>
  );
};

export default Button;
