import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { VotingList, VoteList } from '../constants/DummyData';
import VoteProgress from '../components/VoteProgress';

const ResultScreen = () => {
  const route = useRoute();
  const { questionId } = route.params;

  const question = VotingList.find((item) => item.id === questionId);
  const votes = VoteList.filter((item) => item.votingId === questionId);

  const totalSubmit = votes
    .map((item) => item.submitUsers?.length || 0)
    .reduce((a, b) => a + b);

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>{question?.title}</Text>
      </View>
      <ScrollView>
        {votes ? (
          votes.map((item) => (
            <VoteProgress
              key={item.id}
              voteTitle={item.title}
              progress={item.submitUsers?.length / totalSubmit}
            />
          ))
        ) : (
          <ActivityIndicator size="large" color="orange" />
        )}
      </ScrollView>
    </View>
  );
};
export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
  },
  headContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: 'whitesmoke',
    color: 'black',
    paddingHorizontal: 15,
  },
});
