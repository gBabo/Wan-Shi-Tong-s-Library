import { ExpoConfig } from '@expo/config';
import 'dotenv/config';

export interface Extra {
  FIREBASE_WEB_API_KEY: string
}

export default <Omit<ExpoConfig, 'extra'> & { extra: Extra }>{
  name: 'Library of Alexandria',
  slug: 'LibraryOfAlexandria',
  version: '1.1.1',
  orientation: 'default',
  icon: './assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: [
    '**/*',
  ],
  ios: {
    bundleIdentifier: 'pt.ulisboa.tecnico.CCU2122G03.LibraryOfAlexandria',
    buildNumber: '1.1.1',
    supportsTablet: true,
  },
  android: {
    package: 'pt.ulisboa.tecnico.CCU2122G03.LibraryOfAlexandria',
    versionCode: 3,
    permissions: [
      'CAMERA',
      'READ_EXTERNAL_STORAGE',
      'WRITE_EXTERNAL_STORAGE',
      'ACCESS_COARSE_LOCATION',
      'ACCESS_FINE_LOCATION',
      'FOREGROUND_SERVICE',
    ],
    config: {
      googleMaps: {
        apiKey: process.env.FIREBASE_WEB_API_KEY,
      },
    },
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/images/favicon.png',
  },
  extra: {
    FIREBASE_WEB_API_KEY: process.env.FIREBASE_WEB_API_KEY,
  },
};
