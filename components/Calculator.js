import { Button, View } from "react-native";


export default function Calculator() {
    return (
        <View>
            <View testID="display" />
            <Button testID="0" title="0" />
            <Button testID="1" title="1" />
            <Button testID="." title="." />
            <Button testID="+" title="+" />
            <Button testID="=" title="=" />
            <Button testID="AC" title="AC" />
        </View>
    );
}
