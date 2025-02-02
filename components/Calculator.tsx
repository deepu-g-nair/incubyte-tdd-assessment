import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { add } from "../utils/calculator";
// import Ionicons from "@expo/vector-icons/Ionicons";

export default function Calculator() {
    const [display, setDisplay] = useState<string>("");
    const [firstOperand, setFirstOperand] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);

    const handleNumberPress = (num: string) => {
        setDisplay((prev) => (prev === "0" ? num : prev + num));
    };

    const handleOperatorPress = (op: string) => {
        if (display !== "") {
            setFirstOperand(parseFloat(display));
            setOperator(op);
            setDisplay("");
        }
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

    const handleBackspace = (): void => {
        setDisplay((prevDisplay) => {
            if (prevDisplay.length <= 1) {
                return "0";
            }
            return prevDisplay.slice(0, -1);
        });
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
            <TouchableOpacity testID="-" onPress={handleBackspace}>
                {/* <Ionicons name="backspace-sharp" size={24} color="black" /> */}
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    );
}
