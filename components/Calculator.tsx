import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { add } from "../utils/calculator";

export default function Calculator() {
    const [display, setDisplay] = useState<string>("");
    const [firstOperand, setFirstOperand] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);

    const handleNumberPress = (num: string) => {
        setDisplay((prev) => (prev === "0" ? num : prev + num));
    };

    const handleOperatorPress = (op: string) => {
        setFirstOperand(parseFloat(display));
        setOperator(op);
        setDisplay("0");
    };

    const handleCalculate = (): void => {
        if (firstOperand === null || !operator) return;

        const secondOperand: number = parseFloat(display);
        let result: number;

        switch (operator) {
            case "+":
                const add_arg = `${firstOperand},${secondOperand}`;
                result = add(add_arg);
                break;
            default:
                return;
        }

        setDisplay(result.toString());
        setFirstOperand(null);
        setOperator(null);
    };

    const handleClear = () => {
        setDisplay("");
        setFirstOperand(null);
        setOperator(null);
    };

    return (
        <View>
            <Text testID="display">{display}</Text>
            {[..."0123456789"].map((num) => (
                <Button
                    key={num}
                    testID={num}
                    title={num}
                    onPress={() => handleNumberPress(num)}
                />
            ))}
            <Button
                testID="."
                title="."
                onPress={() => handleNumberPress(".")}
            />
            <Button
                testID="+"
                title="+"
                onPress={() => handleOperatorPress("+")}
            />
            <Button testID="=" title="=" onPress={handleCalculate} />
            <Button testID="AC" title="AC" onPress={handleClear} />
        </View>
    );
}
