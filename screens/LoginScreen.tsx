import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyButton from '../components/MyButton';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // eslint-disable-next-line max-len
    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // eslint-disable-next-line no-empty
    if (re.test(String(email).toLowerCase()) && password.length > 3) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Root' }],
      });
    } else {
      Alert.alert('No no no noo!!', 'Email is not correct!');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/loginBackground.jpg')}
      resizeMode="cover"
      style={styles.image}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.headContainer}>
              <Text style={styles.head}>{'Poll\nAwesome'}</Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.input}>
                <TextInput
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoCompleteType="email"
                  value={email}
                  placeholderTextColor="gray"
                  placeholder="Email"
                  onChangeText={(value: string) => setEmail(value)}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  value={password}
                  placeholderTextColor="gray"
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={(value: string) => setPassword(value)}
                />
              </View>
              <MyButton
                onPress={() => handleSubmit()}
                text="Login"
                iconName="login"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  image: {
    height: '100%',
  },
  headContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    fontSize: 42,
    color: 'white',
    fontFamily: 'open-sans-bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  inputContainer: {
    flex: 4,
    alignItems: 'center',
  },
  input: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(200, 150, 150, .9)',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    width: '90%',
    minWidth: '80%',
    height: 48,
    borderRadius: 24,
    marginVertical: 8,
  },
  button: {
    marginTop: 18,
    borderRadius: 24,
    height: 48,
    borderWidth: 1,
    borderColor: 'rgba(200, 150, 150, .9)',
    backgroundColor: '#F96900',
    padding: 8,
    paddingHorizontal: 16,
    width: '80%',
    minWidth: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 'bold',
  },
});
