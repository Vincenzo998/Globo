import React from 'react';

import { HeaderScreen } from './../components/Header.js';
import { Hero } from './../components/Hero.js';
import { Container, Content } from 'native-base';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{ backgroundColor: '#35605a' }}>
        <Content>  
          <HeaderScreen navigate={navigate} message='Press to Login' />
          <Hero />
        </Content>
      </Container>
    );
  }
}

