import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  // const [checked, setChecked] = useState('first');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        // style={styles.button}
        onPress={() => navigation.navigate('VotingNavigator')}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-start',
    padding: 16,
  },
});
