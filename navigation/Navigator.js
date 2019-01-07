import React, {Component} from 'react';

import { createDrawerNavigator, NavigationActions } from 'react-navigation';
import { Container, Header, Content, Body, Text, List, ListItem, Right, Icon, Left } from 'native-base';
import { Image } from 'react-native'

import HomeScreen from '../screens/HomeScreen.js';
import { ContactScreen } from '../screens/ContactScreen.js';

import { VideoScreen } from '../screens/VideoScreen.js';
import { VideoDetailScreen } from '../screens/VideoDetailScreen.js';

import { RegisterScreen } from '../screens/RegisterScreen.js';
import { LoginScreen } from '../screens/LoginScreen.js';

import { QuizScreen } from '../screens/QuizScreen.js';
import { FinishScreen } from '../screens/QuizFinishScreen.js';

import { AboutScreen } from '../screens/AboutScreen.js';


class CustomDrawerContentComponent extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <Container>
        <Header style={{ height: 80, paddingTop: 25, backgroundColor: '#35605a' }}>
          <Body> 
            <Image style={{ height: 50, width: 165, flex: 1 }} source={ require('./../assets/images/Globo_logo_REV.png') }/>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem itemHeader first>
              <Text> OPTIONS </Text>
            </ListItem>
            <ListItem button onPress={this.navigateToScreen('LessonsRT')}>
              <Left>
                <Text> Lessons </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem button onPress={this.navigateToScreen('ContactRT')}>
              <Left>
                <Text> Contact </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemHeader>
              <Text> REGISTRATION </Text>
            </ListItem>
            <ListItem button onPress={this.navigateToScreen('RegisterRT')}>
              <Left>
                <Text> Register </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem button onPress={this.navigateToScreen('LoginRT')}>
              <Left>
                <Text> Login </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemHeader>
              <Text> OTHER </Text>
            </ListItem>
            <ListItem button onPress={this.navigateToScreen('QuizRT')}>
              <Left>
                <Text> Quiz </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem button onPress={this.navigateToScreen('AboutRT')}>
              <Left>
                <Text> About </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
 

const AppNavigator = createDrawerNavigator({
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
  }
},
  {
    initialRouteName: 'HomeRT',
    contentComponent: CustomDrawerContentComponent,
    drawerPosition: 'left'
  }
);

export default AppNavigator;

