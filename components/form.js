import React, { useState } from "react";
import { StyleSheet, TextInput, Title, Text, Pressable, View, Button } from "react-native";

export default function Form( { addHandler }) {
    const [text, setValue] = useState("");
    const onChange = ( text ) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={style.input}
            placeholder="Впишите задачу..."
            onChangeText={onChange}  />

            <Button
                title="Добавьте задачу"
                style={style.button}
                onPress={() => addHandler(text)}
            />
        </View>
    );
}



const style = StyleSheet.create({
    input: {
        padding: 20,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
        marginBottom: 20,
    },

    button: {
        padding: 24,
        borderRadius: 5,
        backgroundColor: "#526ed3",
        color: "white",
        marginTop: 20,
    }
});