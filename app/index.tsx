import React, { useState } from "react";
import { View } from "react-native";
import Calculator from "@/components/Calculator";
import { add } from "../utils/calculator";

const Home: React.FC = () => {
    const [display, setDisplay] = useState<string>("0");

    const handleNumberPress = (num: string): void => {
        setDisplay((prev) => (prev === "0" ? num : prev + num));
    };

    const handleOperatorPress = (op: string): void => {
        setDisplay((prev) => {
            if (prev === "0") return prev + op;
            const lastChar = prev.slice(-1);
            if (["+", "-", "*", "/"].includes(lastChar)) {
                return prev.slice(0, -1) + op;
            }
            return prev + op;
        });
    };

    const handleCalculate = (): void => {
        const operators = ["+", "-", "*", "/"];
        const operator = operators.find((op) => display.includes(op));
        if (!operator) return;

        const [first, second] = display.split(operator).map(parseFloat);
        if (isNaN(first) || isNaN(second)) return;

        let result: number;
        switch (operator) {
            case "+":
                result = add(`${first},${second}`);
                break;
            // Add other operations here if needed
            default:
                return;
        }
        setDisplay(result.toString());
    };

    const handleClear = (): void => {
        setDisplay("0");
    };

    const handleBackspace = (): void => {
        setDisplay((prev) => {
            if (prev.length <= 1) return "0";
            return prev.slice(0, -1);
        });
    };

    return (
        <View>
            <Calculator
                display={display}
                handleNumberPress={handleNumberPress}
                handleOperatorPress={handleOperatorPress}
                handleCalculate={handleCalculate}
                handleClear={handleClear}
                handleBackspace={handleBackspace}
            />
        </View>
    );
};

export default Home;