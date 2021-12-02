import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Strings from '../Values/Strings';
import SplashScreen from '../Containers/SplashScreen';
import ChatsScreen from '../Containers/ChatsScreen';
import MessagesScreen from '../Containers/MessagesScreen';

const Stack = createStackNavigator();

const {SPLASH_SCREEN, CHAT_SCREEN, MESSAGES_SCREEN} = Strings.Routes;

export const MainStack = () => {
  const navigatorOptions = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
    animationEnabled: true,
  };

  return (
    <Stack.Navigator
      screenOptions={navigatorOptions}
      initialRouteName={SPLASH_SCREEN}>
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          animationEnabled: true,
        }}
        name={SPLASH_SCREEN}
        component={SplashScreen}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          animationEnabled: true,
        }}
        name={CHAT_SCREEN}
        component={ChatsScreen}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          animationEnabled: true,
          gestureEnabled: true,
        }}
        name={MESSAGES_SCREEN}
        component={MessagesScreen}
      />
    </Stack.Navigator>
  );
};
