import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
  setChecked(value: string): void;
  value: string;
  checked: string;
  text?: string;
}

const MyRadioButton = (props: IProps) => (
  <TouchableOpacity
    onPress={() => props.setChecked(props.value)}
    style={styles.radioButtonContainer}
  >
    <RadioButton
      uncheckedColor="orange"
      color="#d07001"
      value={props.value}
      status={props.checked === props.value ? 'checked' : 'unchecked'}
    />
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
);

export default MyRadioButton;

const styles = StyleSheet.create({
  radioButtonContainer: {
    borderColor: 'gray',
    borderWidth: 2,
    marginVertical: 5,
    flexDirection: 'row',
    textAlignVertical: 'center',
    borderRadius: 200,
  },
  text: { fontSize: 16, textAlignVertical: 'center' },
});
