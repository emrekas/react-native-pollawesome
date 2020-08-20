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
    borderWidth: 1,
    marginVertical: 5,
    flexDirection: 'row',
    textAlignVertical: 'center',
  },
  text: { fontSize: 16, textAlignVertical: 'center' },
});
