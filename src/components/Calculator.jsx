import DisplayWindow from "./DisplayWindow";
import KeysWindow from "./KeysWindow";

const Calculator = () => {
  return (
    <div className="calculator">
      <DisplayWindow></DisplayWindow>
      <KeysWindow></KeysWindow>
    </div>
  );
};

export default Calculator;
