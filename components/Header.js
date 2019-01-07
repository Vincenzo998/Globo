import React from 'react';
import { StyleSheet, Image, AsyncStorage, Alert } from 'react-native';
import { Header, Text, Body, Left, Right, Button, Icon } from 'native-base';

export class HeaderScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        }
    }

    toggleUser = () => {
        if (this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
                Alert.alert('User logged out')
            });
        }
        else {
            this.props.navigate('LoginRT');
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if(result === 'none') {
                console.log('NONE');
            }
            else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to NONE');
                })
            }
            else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                });
            }
        });
    }

    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
        return (
            <Header style={{ backgroundColor: '#35605a', marginTop: 24 }}>
                <Left style={{ flex: 1 }}>
                    <Button transparent onPress={() => this.props.navigate.openDrawer()}>
                        <Icon name='menu'/>
                    </Button> 
                </Left>
                <Body style={{ paddingTop: 6, flex: 2 }}>
                    <Button transparent onPress={() => this.props.navigate('HomeRT') }>
                        <Image style={{ height: 50, width: 165, flex: 1 }} source={ require('./../assets/images/Globo_logo_REV.png') }/>
                    </Button>
                </Body>
                <Right style={{ flex: 1 }}>
                    <Text style={styles.headText} onPress={this.toggleUser}> {display} </Text>                    
                </Right>       
            </Header>
        );
    }

}

const styles = StyleSheet.create({
  headText: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 17
  }
});