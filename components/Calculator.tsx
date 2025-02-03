import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CalculatorProps {
    display: string;
    handleNumberPress: (num: string) => void;
    handleOperatorPress: (operator: string) => void;
    handleCalculate: () => void;
    handleClear: () => void;
    handleBackspace: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({
    display,
    handleNumberPress,
    handleOperatorPress,
    handleCalculate,
    handleClear,
    handleBackspace,
}) => {
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
                        testID="."
                        style={[styles.button, styles.topButton]}
                        onPress={() => handleBackspace()}
                    >
                        <Ionicons
                            style={styles.backButton}
                            name="backspace-sharp"
                        />
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
                        testID="0"
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
        justifyContent: 'flex-end'
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
