import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { VotingList } from '../constants/DummyData';
import QuestionItem from '../components/QuestionItem';

export default function HomeScreen() {
  const renderItem = ({ item }: any) => (
    <QuestionItem
      title={item.title}
      createdBy={item.createdBy}
      date={item.date}
      id={item.id}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={VotingList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-start',
    // padding: 16,
  },
});
