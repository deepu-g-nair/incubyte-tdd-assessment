import React from "react";
import {Home} from "./index";
import { StatusBar, StyleSheet, View } from "react-native";

export default function RootLayout() {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#000000"
                translucent={true}
            />
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
});
