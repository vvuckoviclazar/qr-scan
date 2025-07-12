function Btn({ children, onClick, isDisabled, variation }) {
  const baseClass = "btn";
  let modifierClass = "";

  if (variation === "green") {
    modifierClass = "green";
  } else if (variation === "pink") {
    modifierClass = "pink";
  }

  const finalClass = `${baseClass} ${modifierClass} ${
    isDisabled ? "disabled-btn" : ""
  }`;

  return (
    <button className={finalClass} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Btn;

// prosledi u button prop isDisabled
// na button stavi disabled atribut
// button disable atribut
// u button prosledi prop variation
// za generate neka bude vartiation="green" a download="pink"
// const baseClass = "btn";
// let modifierClass = "";
