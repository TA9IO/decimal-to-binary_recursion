import "./styles.css";
const $ = window.console.log;
const toBinary = (dec) => {
  if (dec === 1) {
    return "1";
  }
  if (dec % 2) {
    return toBinary(Math.floor(dec / 2)) + "1";
  }

  return toBinary(dec / 2) + "0";
};
$(toBinary(50));
