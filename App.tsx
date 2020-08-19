import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const fetchFonts = () => Font.loadAsync({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

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
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaView>
  );
}
