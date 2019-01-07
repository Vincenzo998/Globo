import React from 'react';

import { Container, Content } from 'native-base';

import { Hero } from './../components/Hero.js';
import { HeaderScreen } from './../components/Header.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <Container style={{ backgroundColor: '#35605a' }}>
          <Content>  
            <HeaderScreen navigate={this.props.navigation} message='Press to Login' />
            <Hero />
          </Content>
        </Container>
    );
  }
}

