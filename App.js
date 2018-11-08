import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import NewPost from './NewPost';

export default createStackNavigator({
  Home: {
    screen: Home
  },
  NewPost: {
    screen: NewPost
  },
});
