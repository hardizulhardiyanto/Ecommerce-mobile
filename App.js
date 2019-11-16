import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MobileHomeScreen from './src/containers/MobileHomeScreen';
import AddForm from './src/mobileAPP/AddForm';
import Detail from './src/mobileAPP/MobileDetail'
import rootReducer from './src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

const RootStack = createStackNavigator(
  {
  Home: {screen: MobileHomeScreen},
  Add: {screen: AddForm},
  Detail: {screen: Detail}
  },
  {
    initialRouteName: 'Home'
  }
  );

  const AppContainer = createAppContainer(RootStack);



  export default class App extends Component {
      render() {
        return (
          <Provider store={store}>
          <AppContainer />
          </Provider>
          );
        }
      }

     