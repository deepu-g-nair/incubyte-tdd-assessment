import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Calculator() {
    const [display, setDisplay] = useState("0");

    const handleNumberPress = (num) => {
        setDisplay((prev) => (prev === "0" ? num : prev + num));
    };

    return (
        <View>
            <Text testID="display">{display}</Text>
            <Button
                testID="0"
                title="0"
                onPress={() => handleNumberPress("0")}
            />
            <Button
                testID="1"
                title="1"
                onPress={() => handleNumberPress("1")}
            />
            <Button
                testID="2"
                title="2"
                onPress={() => handleNumberPress("2")}
            />
            <Button
                testID="3"
                title="3"
                onPress={() => handleNumberPress("3")}
            />
            <Button
                testID="4"
                title="4"
                onPress={() => handleNumberPress("4")}
            />
            <Button
                testID="5"
                title="5"
                onPress={() => handleNumberPress("5")}
            />
            <Button
                testID="6"
                title="6"
                onPress={() => handleNumberPress("6")}
            />
            <Button
                testID="7"
                title="7"
                onPress={() => handleNumberPress("7")}
            />
            <Button
                testID="8"
                title="8"
                onPress={() => handleNumberPress("8")}
            />
            <Button
                testID="9"
                title="9"
                onPress={() => handleNumberPress("9")}
            />
            <Button testID="." title="." />
            <Button testID="+" title="+" />
            <Button testID="=" title="=" />
            <Button testID="AC" title="AC" />
        </View>
    );
}
