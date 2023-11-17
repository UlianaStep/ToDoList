import React from "react";
import { StyleSheet, Pressable, Text, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-web";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={style.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
    },
});