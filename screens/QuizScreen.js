import React from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import { QuizData } from '../components/QuizQuestions.js';
import { Question } from '../components/Question.js';
import { HeaderScreen } from '../components/Header.js';

export class QuizScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            questLoaded: false,
            totalScore: 100,
            completedQuiz: false
        }
    }

    componentDidMount() {
        let numQuestions = Array.from(QuizData.questions).length
        this.setState({
            questList: Array.from(QuizData.questions),
            questLoaded: true,
            numberOfQuestions: numQuestions,
            incorrect: 0,
            questionAnswered: 0
        });
    }

    updateScore = (penalty) => {
        let tempScore = this.state.totalScore;
        let missed = this.state.incorrect;
        let questionsTotal = this.state.numberOfQuestions;
        let questionsDone = this.state.questionAnswered;

        let newScore = tempScore - penalty;
        let totalAnswered = questionsDone + 1;
        let totalMissed = penalty ? missed + 1 : missed;

        this.setState({
            totalScore: newScore,
            incorrect: totalMissed,
            questionAnswered: totalAnswered
        });

        if (totalAnswered === questionsTotal) {
            this.setState({
                completedQuiz: true
            });
        }
        console.log(this.state)
    }
    
    finishQuiz = () => {
        this.props.navigation.navigate(
            'FinishRT', {
                score: this.state.totalScore,
                missed: this.state.incorrect,
                questions: this.state.numberOfQuestions
            }
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <Container>
                <HeaderScreen navigate={navigate} message = 'Press to Login'/>
                <Content>
                    { 
                        this.state.questLoaded && (
                            <FlatList 
                                data={ this.state.questList }
                                renderItem={({item}) => 
                                    <Question 
                                        question={item.question}
                                        answer1={item.answer1}
                                        answer2={item.answer2}
                                        answer3={item.answer3}
                                        answer4={item.answer4}
                                        correctAnswer={item.correctAnswer}
                                        scoreUpdate={this.updateScore}
                                    />
                                }
                            />
                        )
                    }
                    {
                        !this.state.completedQuiz && (
                            <Button block disabled style={{ marginTop: 20 }}>
                                <Text> Answer all the question </Text>
                            </Button>
                        )
                    }
                    {
                        this.state.completedQuiz && (
                            <Button block success onPress={this.finishQuiz} style={{ marginTop: 20 }}>
                                <Text> Finished </Text>
                            </Button>
                        )
                    }

                    {
                        !this.state.questLoaded && (
                            <Text> Loading ... </Text>
                        )
                    }
                </Content>
            </Container>
        );
    }
}
