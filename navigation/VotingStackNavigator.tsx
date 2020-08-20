import React from 'react';
// import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import VoteScreen from '../screens/VoteScreen';

const VotingStackNavigator = () => {
  const VotingStack = createStackNavigator();

  return (
    <VotingStack.Navigator>
      <VotingStack.Screen name="Vote" component={VoteScreen} />
    </VotingStack.Navigator>
  );
};

export default VotingStackNavigator;

// const styles = StyleSheet.create({});
