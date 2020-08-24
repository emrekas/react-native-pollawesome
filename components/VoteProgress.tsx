import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const VoteProgress = (props: { voteTitle: string; progress: number }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.voteTitle}</Text>
    <ProgressBar
      color="orange"
      style={styles.progress}
      progress={props.progress}
    />
  </View>
);

export default VoteProgress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    padding: '3%',
    borderWidth: 1,
    borderColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progress: {
    height: 14,
    borderRadius: 7,
  },
});
