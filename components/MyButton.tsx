import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MyButton = (props: any) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: '5%',
    }}
  >
    <View style={styles.iconBox}>
      <MaterialCommunityIcons name={props.iconName} color="white" size={24} />
    </View>
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ ...styles.button, ...props.buttonStyle }}
      onPress={props.onPress}
    >
      <Text style={{ ...styles.buttonText, ...props.textStyle }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

export default MyButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    minWidth: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
    right: 15,
    backgroundColor: 'orange',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 12,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d07001',
    left: 15,
    zIndex: 999,
    elevation: 9,
  },
});
