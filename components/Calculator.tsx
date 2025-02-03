import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { add } from "@/utils/calculator";

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState<string>("0");

    const handleNumberPress = (num: string): void => {
        setDisplay((prev) => (prev === "0" ? num : prev + num));
    };

    const handleOperatorPress = (op: string): void => {
        setDisplay((prev) => {
            if (prev === "0") return prev + op;
            const lastChar = prev.slice(-1);
            if (["+"].includes(lastChar)) {
                return prev.slice(0, -1) + op;
            }
            return prev + op;
        });
    };

    const handleCalculate = (): void => {
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
        <View style={styles.container}>
            <View style={styles.displayContainer}>
                <Text testID="display" style={styles.displayText}>
                    {display}
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.row}>
                    {["7", "8", "9"].map((num) => (
                        <TouchableOpacity
                            key={num}
                            testID={num}
                            style={[styles.button, styles.numberButton]}
                            onPress={() => handleNumberPress(num)}
                        >
                            <Text style={styles.numberText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        testID="-"
                        style={[styles.button, styles.topButton]}
                        onPress={() => handleBackspace()}
                    >
                        <Text style={styles.numberText}>◀️</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    {["4", "5", "6"].map((num) => (
                        <TouchableOpacity
                            key={num}
                            testID={num}
                            style={[styles.button, styles.numberButton]}
                            onPress={() => handleNumberPress(num)}
                        >
                            <Text style={styles.numberText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        testID="AC"
                        style={[styles.button, styles.topButton]}
                        onPress={handleClear}
                    >
                        <Text style={styles.topButtonText}>AC</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    {["1", "2", "3"].map((num) => (
                        <TouchableOpacity
                            key={num}
                            testID={num}
                            style={[styles.button, styles.numberButton]}
                            onPress={() => handleNumberPress(num)}
                        >
                            <Text style={styles.numberText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        testID={"+"}
                        style={[styles.button, styles.operatorButton]}
                        onPress={() => handleOperatorPress("+")}
                    >
                        <Text style={styles.operatorText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity
                        testID="0"
                        style={[styles.button, styles.numberButton]}
                        onPress={() => handleNumberPress("0")}
                    >
                        <Text style={styles.numberText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID="."
                        style={[styles.button, styles.numberButton]}
                        onPress={() => handleNumberPress(".")}
                    >
                        <Text style={styles.numberText}>.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        testID="00"
                        style={[styles.button, styles.numberButton]}
                        onPress={() => handleNumberPress("00")}
                    >
                        <Text style={styles.numberText}>00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        testID="="
                        style={[styles.button, styles.operatorButton]}
                        onPress={handleCalculate}
                    >
                        <Text style={styles.operatorText}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Calculator;

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    displayContainer: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 20,
    },
    displayText: {
        color: "white",
        fontSize: 80,
        textAlign: "right",
    },
    buttonsContainer: {
        flex: 2,
        padding: 10,
        justifyContent: "flex-end",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    button: {
        width: 90,
        height: 90,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
    },
    numberButton: {
        backgroundColor: "#333333",
    },
    operatorButton: {
        backgroundColor: "#ff9500",
    },
    topButton: {
        backgroundColor: "#a5a5a5",
    },
    numberText: {
        color: "white",
        fontSize: 40,
    },
    backButton: {
        color: "black",
        fontSize: 40,
    },
    operatorText: {
        color: "white",
        fontSize: 40,
    },
    topButtonText: {
        color: "black",
        fontSize: 40,
    },
    zeroButton: {
        width: 170,
        alignItems: "flex-start",
        paddingLeft: 35,
    },
});
