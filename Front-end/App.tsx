import 'react-native-gesture-handler';
import * as React from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import Navigation from './navigation';
import Loading from './components/UI/Loading';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import store from './store';

LogBox.ignoreLogs(['Setting a timer for a long period of time']);
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return isLoadingComplete ? (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation colorScheme={colorScheme} />
      </Provider>
      <StatusBar />
    </SafeAreaProvider>
  ) : (
    <Loading />
  );
}
