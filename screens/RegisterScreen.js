import React from 'react';
import { StyleSheet, Alert, AsyncStorage } from 'react-native';
import { Container, Content, Form, Text, Item, Input, Label, Button } from 'native-base';
import { HeaderScreen } from '../components/Header';

export class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            usernameCanceled: '',
            passwordCanceled: '',
            passwordConfirmCanceled: ''
        };
    };

    cancelRegister = () => {
        if( !this.state.usernameCanceled ) {
            Alert.alert('Please enter a username');
        }
        else if ( !this.state.passwordCanceled) {
            Alert.alert('Please enter a password');
        }
        else if (this.state.passwordCanceled !== this.state.passwordConfirmCanceled) {
            Alert.alert('Passwords do not match');
        }
        else {
            AsyncStorage.getItem(this.state.usernameCanceled, (err, result) => {
                if (result!==null){
                    AsyncStorage.removeItem(this.state.usernameCanceled, (err, result) => {
                        if (result!==null){
                            Alert.alert('Registration cancelled');
                            this.props.navigation.navigate('HomeRT');
                        } 
                        else {
                            Alert.alert('Registration not found');
                        }
                    });
                }
                else {
                    Alert.alert(`${this.state.usernameCanceled} not exist`);
                }
            });
        }
    };

    registerAccount = () => {
        if( !this.state.username ) {
            Alert.alert('Please enter a username');
        } 
        else if ( !this.state.password) {
            Alert.alert('Please enter a password');
        }
        else if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert('Passwords do not match');
        }
        else {
            AsyncStorage.getItem(this.state.username, (err, result) => {
                if (result!==null){
                    Alert.alert(`${this.state.username} already exists`);
                }
                else {
                    AsyncStorage.setItem(this.state.username, this.state.password, (err, result) => {
                    Alert.alert(`${this.state.username} account created`);
                    this.props.navigation.navigate('HomeRT');
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
                        <Item floatingLabel style={styles.item}>
                            <Label> Confirm Password </Label>
                            <Input 
                                onChangeText={(text) => this.setState({passwordConfirm: text})}
                                value={this.state.passwordConfirm}
                                secureTextEntry={true}
                            />
                        </Item>
                        <Button block style={styles.buttonRegister} onPress={this.registerAccount}>
                            <Text> Register </Text>
                        </Button>
                    </Form>

                    <Form style={styles.form}>
                        <Item floatingLabel style={styles.item}>
                            <Label> Username </Label>
                            <Input 
                                onChangeText={(text) => this.setState({usernameCanceled: text})}
                                value={this.state.usernameCanceled}
                            />
                        </Item>
                        <Item floatingLabel style={styles.item}>
                            <Label> Password </Label>
                            <Input 
                                onChangeText={(text) => this.setState({passwordCanceled: text})}
                                value={this.state.passwordCanceled}
                                secureTextEntry={true}
                            />
                        </Item>
                        <Item floatingLabel style={styles.item}>
                            <Label> Confirm Password </Label>
                            <Input 
                                onChangeText={(text) => this.setState({passwordConfirmCanceled: text})}
                                value={this.state.passwordConfirmCanceled}
                                secureTextEntry={true}
                            />
                        </Item>
                        <Button block danger style={styles.buttonCalcelledRegister} onPress={this.cancelRegister}>
                            <Text> Cancel Register </Text>
                        </Button>
                    </Form>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    buttonRegister: {
        backgroundColor: '#35605a',
        marginTop: 25
    },
    buttonCalcelledRegister: {
        marginTop: 25
    },
    form: {
        margin: 10
    },
    item: {
        marginRight: 15
    }
});