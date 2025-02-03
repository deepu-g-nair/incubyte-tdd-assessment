import { add } from "./calculator";

type SetDisplay = React.Dispatch<React.SetStateAction<string>>;

export const handleNumberPress = (num: string, setDisplay: SetDisplay): void => {
    setDisplay((prev) => (prev === "0" ? num : prev + num));
};

export const handleOperatorPress = (op: string, setDisplay: SetDisplay): void => {
    setDisplay((prev) => {
        if (prev === "0") return prev + op;
        const lastChar = prev.slice(-1);
        if (["+"].includes(lastChar)) {
            return prev.slice(0, -1) + op;
        }
        return prev + op;
    });
};

export const handleCalculate = (display: string, setDisplay: SetDisplay): void => {
    const operators = ["+"];
    const operator = operators.find((op) => display.includes(op));
    if (!operator) return;

    const [first, second] = display.split(operator).map(parseFloat);
    if (isNaN(first) || isNaN(second)) return;

    let result: number;
    switch (operator) {
        case "+":
            result = add(`${first},${second}`);
            break;
        default:
            return;
    }
    setDisplay(result.toString());
};

export const handleClear = (setDisplay: SetDisplay): void => {
    setDisplay("0");
};

export const handleBackspace = (setDisplay: SetDisplay): void => {
    setDisplay((prev) => {
        if (prev.length <= 1) return "0";
        return prev.slice(0, -1);
    });
};
