import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen.js';
import { ContactScreen } from '../screens/ContactScreen.js';

import { VideoScreen } from '../screens/VideoScreen.js';
import { VideoDetailScreen } from '../screens/VideoDetailScreen.js';

import { RegisterScreen } from '../screens/RegisterScreen.js';
import { LoginScreen } from '../screens/LoginScreen.js';

import { QuizScreen } from '../screens/QuizScreen.js';
import { FinishScreen } from '../screens/QuizFinishScreen.js';

import { AboutScreen } from '../screens/AboutScreen.js';
import { MenuScreen } from '../screens/MenuScreen.js';

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: HomeScreen
  },
  ContactRT: {
    screen: ContactScreen
  },
  LessonsRT: {
    screen: VideoScreen
  },
  VideoDetailRT: {
    screen: VideoDetailScreen
  },
  RegisterRT: {
    screen: RegisterScreen
  },
  LoginRT: {
    screen: LoginScreen
  },
  QuizRT: {
    screen: QuizScreen
  },
  FinishRT: {
    screen: FinishScreen
  },
  AboutRT: {
    screen: AboutScreen
  },
  DrawerOpenRT: {
    screen: MenuScreen
  }
},
  {
    initialRouteName: 'HomeRT'
  }
);

export default MyRoutes;

