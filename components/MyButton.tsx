import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MyButton = (props: any) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={{ ...styles.button, ...props.buttonStyle }}
    // onPress={props.onPress}
  >
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <View style={styles.iconBox}>
        <MaterialCommunityIcons name={props.iconName} color="white" size={24} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'orange',
          height: 40,
          right: 15,
          borderRadius: 20,
        }}
      >
        <Text style={{ ...styles.buttonText, ...props.textStyle }}>
          {props.text}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default MyButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 18,
    borderRadius: 24,
    width: '100%',
    minWidth: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 'bold',
    margin: '10%',
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    left: 15,
    zIndex: 99,
  },
});
