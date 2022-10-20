/**
 *Developed by Anjana
 *  @format
 */

import {AppRegistry,LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
