import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import io from 'socket.io-client';
import { VotingList, VoteList } from '../constants/DummyData';
import VoteProgress from '../components/VoteProgress';

const ResultScreen = () => {
  const route = useRoute();
  const [vote, setVote] = useState({});

  const { questionId, answerId } = route.params;

  const question = VotingList.find((item) => item.id === questionId);
  const votes = VoteList.filter((item) => item.votingId === questionId);

  const totalSubmit = votes
    .map((item) => item.submitUsers?.length || 0)
    .reduce((a, b) => a + b);

  const connectionConfig = {
    jsonp: false,
    reconnection: true,
    reconnectionDelay: 100,
    reconnectionAttempts: 100000,
    transports: ['websocket'],
  };

  const socket = io('http://192.168.1.40:3001', connectionConfig);

  socket.on('connection', (data) => console.log('connect', data));

  socket.emit('voting', { questionId, user: { id: 'aaa' }, answerId });
  // , (data) => console.log('emitData', data)

  socket.on('voting', (data) => {
    console.log('onVoting', data);
  });

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
