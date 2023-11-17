import React from "react";
import { StyleSheet, View, Text} from "react-native";

export default function Header() {
    return (
        <View style={style.main}>
            <Text style={style.text}>Список дел</Text>
        </View>
    );
}

const style = StyleSheet.create({
    main: {
        height: 70,
        backgroundColor: "#F6F6F6",
        top: 0,
    },

    text: {
        textAlign: "center",
        color: "#191C30",
        paddingTop: 15,
        fontWeight: "bold",
        fontSize: 28,
    }
});
