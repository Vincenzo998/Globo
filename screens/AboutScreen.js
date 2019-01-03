import React from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, Button, Form, Card, CardItem, Body } from 'native-base';
import { HeaderScreen } from '../components/Header';

const aboutGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices mattis iaculis. Phasellus sit amet nibh blandit, blandit, pulvinar arcu id, elementum dolor. Aenean ut risus urna. Nulla accumsan consectetur lectus ut vestibulum.`

const whatGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices mattis iaculis. Phasellus sit amet nibh blandit, blandit, pulvinar arcu id, elementum dolor. Aenean ut risus urna. Nulla accumsan consectetur lectus ut vestibulum.`

export class AboutScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <HeaderScreen navigate={navigate} message = 'Press to Login'/>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem style={{ alignItems: 'center' }}>
                            <Body>
                                <Image style={{ height: 200, width: 321 }} source={require('../assets/images/arch640.jpg')}/>
                                <Text style={{ paddingTop: 10, paddingBottom: 10, color: '#35605a', fontSize: 18, fontWeight: 'bold' }}> Who We Are </Text>
                                <Text style={{ paddingLeft: 10 }}> {aboutGlobo} </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Body>
                                <Image style={{ height: 200, width: 321 }} source={require('../assets/images/computer640.jpg')}/>
                                <Text style={{ paddingTop: 10, paddingBottom: 10, color: '#35605a', fontSize: 18, fontWeight: 'bold' }}> What We Do </Text>
                                <Text style={{ paddingLeft: 10 }}> {whatGlobo} </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Form style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Button rounded style={{ backgroundColor: '#35605a', margin: 20 }} onPress={() => this.props.navigation.navigate('HomeRT')}> 
                            <Text> Go Back </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
