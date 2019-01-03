import React from 'react';
import { Container, Text, Button, Content, Form } from 'native-base';

export class FinishScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    exitQuiz = () => {
        this.props.navigation.navigate('HomeRT');
    }

    render() {
        let userScore = this.props.navigation.getParam('score', 'Error - No score returned');
        let questionsMissed = this.props.navigation.getParam('missed', 'Error - No missed questions');
        let totalQuestions = this.props.navigation.getParam('questions', 'Error - No question returned');

        return (
            <Container style={{ paddingTop: 250, backgroundColor: '#35605a' }}>
            <Content>
                <Text style={{ textAlign: 'center', color: 'white' }}> Your quiz score was {userScore} </Text>
                <Text style={{ textAlign: 'center', color: 'white' }}> You missed on {questionsMissed} out of {totalQuestions} questions </Text>
                <Form style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Button rounded success onPress={this.exitQuiz} style={{ margin: 10 }}>
                        <Text> Finish Quiz </Text>
                    </Button>
                </Form>
            </Content>
            </Container>
        );
    }
}
