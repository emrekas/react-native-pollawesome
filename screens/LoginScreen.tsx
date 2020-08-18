import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Keyboard, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.head}>Login</Text>
                    <View style={styles.input}>
                        <TextInput placeholder="Username" />
                    </View>
                    <View style={styles.input}>
                        <TextInput placeholderTextColor="white" placeholder="Password" secureTextEntry={true} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => { }} >
                        <Text style={styles.buttonText}>Bas Bana</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9447'
    },
    head: {
        fontSize:28
    },
    input: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 8,
        width: 200,
        height: 42,
        borderRadius: 6,
        marginVertical: 8
    },
    button: {
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#F96900',
        padding: 8,
        paddingHorizontal: 16,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 18,
        fontWeight: 'bold'
    }
})
