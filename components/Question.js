import React from 'react';
import { Button, Text, Content, Container } from 'native-base';

export class Question extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            correct: false
        };
    }

    chooseAnswer = (ans) =>{
        let worth = 25;
        if (ans === this.props.correctAnswer) {
            this.setState({
                selected: true,
                correct: true
            });
            this.props.scoreUpdate(0);
        }
        else {
            this.setState({
                selected: true
            });
            this.props.scoreUpdate(worth);
        }
    }

    render() {
        return(
            <Container style={{ height: 350 }}>
                {
                    !this.state.selected && (
                        <Content style={{ margin: 15 }}>
                            <Text style={{ margin: 10, fontSize: 18, textAlign: 'center' }} > {this.props.question} </Text>
                            <Button block light style={{ margin: 6 }} onPress={() => this.chooseAnswer('answer1')}> 
                                <Text> {this.props.answer1} </Text>
                            </Button>
                            <Button block light style={{ margin: 6 }} onPress={() => this.chooseAnswer('answer2')}>
                                <Text> {this.props.answer2} </Text>
                            </Button>
                            <Button block light style={{ margin: 6 }} onPress={() => this.chooseAnswer('answer3')}> 
                                <Text> {this.props.answer3} </Text>
                            </Button>
                            <Button block light style={{ margin: 6 }} onPress={() => this.chooseAnswer('answer4')}>
                                <Text> {this.props.answer4} </Text>
                            </Button>
                        </Content>
                    )
                }
                {
                    this.state.selected && this.state.correct && (
                        <Content style={{ backgroundColor: '#00C200', margin: 10, borderRadius: 25 }}>
                            <Text style={{ fontSize: 40, color: 'white', margin: 10, textAlign: 'center', marginTop: 140 }}> CORRECT </Text>
                        </Content>
                    )
                }
                {
                    this.state.selected && !this.state.correct && (
                        <Content style={{ backgroundColor: '#FF0000', margin: 10, borderRadius: 25 }}>
                            <Text style={{ fontSize: 40, color: 'white', margin: 10, textAlign: 'center', marginTop: 140 }}> INCORRECT </Text>
                        </Content>
                    )
                }
            </Container>
        );
    }

}
