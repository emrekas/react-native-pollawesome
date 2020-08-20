import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import MyRadioButton from '../components/MyRadioButton';

export default function VoteScreen() {
  const [checked, setChecked] = useState('first');

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>
          ASDASDasdasdasdasdasdasdasdsadasdasasdasdasdasdasdasdasdasdasd
        </Text>
      </View>
      <View>
        <MyRadioButton
          value="first"
          checked={checked}
          setChecked={setChecked}
          text="First"
        />
        <ProgressBar
          progress={0.5}
          style={{ height: 10 }}
          color={Colors.red800}
        />

        <MyRadioButton
          value="second"
          checked={checked}
          setChecked={setChecked}
          text="Second"
        />
        <MyRadioButton
          value="third"
          checked={checked}
          setChecked={setChecked}
          text="Third"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-start',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  headContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%',
  },
});
