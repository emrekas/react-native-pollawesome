import React from 'react';
// import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import VoteScreen from '../screens/VoteScreen';
import { VotingParamList } from '../types';

const VotingStackNavigator = () => {
  const VotingStack = createStackNavigator<VotingParamList>();

  return (
    <VotingStack.Navigator>
      <VotingStack.Screen name="VotingScreen" component={VoteScreen} />
    </VotingStack.Navigator>
  );
};

export default VotingStackNavigator;

// const styles = StyleSheet.create({});
