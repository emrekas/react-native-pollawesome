import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, Button } from 'react-native-paper';
import MyRadioButton from '../components/MyRadioButton';
import { VoteList } from '../constants/DummyData';
import MyButton from '../components/MyButton';

export default function VoteScreen() {
  const [checked, setChecked] = useState('');
  const [votes, setVotes] = useState<any[]>([]);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    const votingList = VoteList.filter(
      (item) => item.votingId === route.params?.question?.id,
    );
    setVotes(votingList);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>{route.params?.question.title}</Text>
      </View>
      <ScrollView>
        {votes ? (
          votes.map((item) => (
            <MyRadioButton
              value={item.id}
              checked={checked}
              setChecked={setChecked}
              key={item.id}
              text={item.title}
            />
          ))
        ) : (
          <ActivityIndicator size="large" color="orange" />
        )}
        {/* <View style={styles.buttonContainer}>
          <Button
            color="black"
            icon="checkbox-marked-outline"
            style={styles.submitButton}
          >
            Vote
          </Button>
        </View> */}
        <MyButton
          onPress={() => navigation.navigate('Result')}
          text="Vote"
          iconName="vote"
        />
      </ScrollView>
    </View>
  );
}

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
