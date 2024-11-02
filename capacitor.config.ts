import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.iglesiaeliasista.app',
  appName: 'Iglesia Eliasista',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
