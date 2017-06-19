import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();
registerScreens(store, Provider);

class App extends Component {
    
  constructor(props) {
    super(props);

    // Initialize Firebase ( ADD YOUR OWN FIREBASE CONFIGURATION)
    const config = {
      apiKey: '...',
      authDomain: '...',
      databaseURL: '...',
      projectId: '...',
      storageBucket: '...',
      messagingSenderId: '...'
    };
    firebase.initializeApp(config);
    // since react-redux only works on components, we need to subscribe this class manually
    store.subscribe(this.onStoreUpdate.bind(this));
    //store.dispatch(appActions.appInitialized());
    this.startApp();
  }

  onStoreUpdate() {
    const { user } = store.getState().auth;
    // handle a root change (now with logged in user)
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
    if (this.currentUser !== user) {
      this.currentUser = user;
      this.startApp(user);
    }
  }
  

  startApp(user) {
    console.log(user);
    //console.log(store.getState().auth.user);

    const tabs = [
      {
          label: 'One', // tab label as appears under the icon in iOS (optional)
          screen: 'navigationtest.FirstTabScreen', // unique ID registered with Navigation.registerScreen
          icon: require('../img/one.png'), // local image asset for the tab icon unselected state (optional on iOS)
          selectedIcon: require('../img/one_selected.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
          iconInsets: { // add this to change icon position (optional, iOS only).
            top: 6, // optional, default is 0.
            left: 0, // optional, default is 0.
            bottom: -6, // optional, default is 0.
            right: 0 // optional, default is 0.
          },
          title: 'Screen One', // title of the screen as appears in the nav bar (optional)
          navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
          navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
        },
        {
          label: 'Two',
          screen: 'navigationtest.SecondTabScreen',
          icon: require('../img/two.png'),
          selectedIcon: require('../img/two_selected.png'),
          title: 'Screen Two'
        }
    ];


      console.log(user);
    switch (user) {
      case undefined:
         Navigation.startSingleScreenApp({
          screen: {
            screen: 'navigationtest.LoginScreen', // unique ID registered with Navigation.registerScreen
            title: 'Log in', // title of the screen as appears in the nav bar (optional)
            navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
            navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
          }
        });
        break;
      default: 
         Navigation.startTabBasedApp({
          tabs,
          tabsStyle: {
            tabBarButtonColor: 'white',
            tabBarSelectedButtonColor: 'white',
            tabBarBackgroundColor: '#099880'
          }
        });
    }
  } // startApp
}
export default App;
