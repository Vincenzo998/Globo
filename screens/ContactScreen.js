import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { HeaderScreen } from '../components/Header.js';
import { Container, Content, Form, Item, Button, Text, Label, Input } from 'native-base';

export class ContactScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            name: '',
            email: ''
        }
    }

    clearFields = () => this.setState({name:'', msg:'', email:''});

    sendMessage = () => {
        Alert.alert(this.state.name,this.state.msg);
        this.props.navigation.navigate('HomeRT');
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <HeaderScreen navigate={navigate} message = 'Press to Login'/>
                <Content>
                    <Form style={styles.form}>
                        <Item floatingLabel style={styles.item}>
                            <Label> Name </Label>
                            <Input 
                                onChangeText={(text) => this.setState({name: text})}
                                value={this.state.name}
                            />
                        </Item>
                        <Item floatingLabel style={styles.item}>
                            <Label> Email Address </Label>
                            <Input 
                                onChangeText={(text) => this.setState({email: text})}
                                value={this.state.email}
                            />
                        </Item>
                        <Item floatingLabel style={styles.item}>
                            <Label> Message </Label>
                            <Input 
                                onChangeText={(text) => this.setState({msg: text})}
                                value={this.state.msg}
                            />
                        </Item>
                    </Form>
                    <Form style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Button style={styles.buttonSendMessage} onPress={this.sendMessage}>
                            <Text> Send Message </Text>
                        </Button>
                        <Button danger style={styles.buttonCancelMessage} onPress={this.clearFields}>
                            <Text> Cancel Message </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    buttonSendMessage: {
        backgroundColor: '#35605a',
        marginTop: 25
    },
    buttonCancelMessage: {
        marginTop: 25
    },
    form: {
        margin: 10
    },
    item: {
        marginRight: 15
    }
   
});