import React from 'react';
import { StyleSheet, Alert, AsyncStorage } from 'react-native';
import { Container, Text, Content, Form, Item, Label, Input, Button } from 'native-base';
import { HeaderScreen } from '../components/Header';

export class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    cancelLogin = () => {
        Alert.alert('Login cancelled');
        this.props.navigation.navigate('HomeRT');
    };

    loginUser = () => {
        if( !this.state.username ) {
            Alert.alert('Please enter a username');
        }
        else if( !this.state.password ) {
            Alert.alert('Please enter a password');
        }
        else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if (result!=='none'){
                    Alert.alert('Someone already logged on')
                    this.props.navigation.navigate('HomeRT');
                }
                else {
                    AsyncStorage.getItem(this.state.username, (err, result) => {
                        if (result!==null) {
                            if (result!==this.state.password) {
                                Alert.alert('Password Incorrect')
                            }
                            else {
                                AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result) => {
                                    Alert.alert(`${this.state.username} Logged In`);
                                    this.props.navigation.navigate('HomeRT');
                                });
                            }
                        }
                        else {
                            Alert.alert(`No account for ${this.state.username}`)
                        }
                    });
                }
            });
        }

    };

    render() {
        return(
            <Container>
                <HeaderScreen navigate={this.props.navigation} message = 'Press to Login'/>
                <Content>
                    <Form style={styles.form}>
                        <Item floatingLabel style={styles.item}>
                            <Label> Username </Label>
                            <Input  
                                onChangeText={(text) => this.setState({username: text})}
                                value={this.state.username}
                            />
                        </Item>
                        <Item floatingLabel style={styles.item}>
                            <Label> Password </Label>
                            <Input 
                                onChangeText={(text) => this.setState({password: text})}
                                value={this.state.password}
                                secureTextEntry={true}
                            />
                        </Item>
                        <Button block style={styles.buttonLogin} onPress={this.loginUser}>
                            <Text> Login </Text>
                        </Button>
                        <Button block danger style={styles.buttonCalcelledLogin} onPress={this.cancelLogin}>
                            <Text> Cancel </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    buttonLogin: {
        backgroundColor: '#35605a',
        marginTop: 25
    },
    buttonCalcelledLogin: {
        marginTop: 25
    },
    form: {
        margin: 10
    },
    item: {
        marginRight: 15
    }
});