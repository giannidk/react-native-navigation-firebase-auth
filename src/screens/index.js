import { Navigation } from 'react-native-navigation';
import LoginScreen from './LoginScreen';
import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('navigationtest.LoginScreen', () => LoginScreen, store, Provider);
    Navigation.registerComponent('navigationtest.FirstTabScreen', () => FirstTabScreen, store, Provider);
    Navigation.registerComponent('navigationtest.SecondTabScreen', () => SecondTabScreen, store, Provider);
}
