import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import useCachedResources from './hooks/useCachedResources';
import RootNavigator from './navigation/index';

const fetchFonts = () => Font.loadAsync({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
});

export default function App() {
  const isLoadingComplete = useCachedResources();

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <RootNavigator />
        <StatusBar />
      </SafeAreaView>
    </PaperProvider>
  );
}
