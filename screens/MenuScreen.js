import React from 'react';
import { Container, Content, List, ListItem, Right, Left, Text, Icon } from 'native-base';

export class MenuScreen extends React.Component {

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem button onPress={() => this.props.navigation.navigate('LessonsRT')}>
                            <Left>
                                <Text> Lessons </Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem button onPress={() => this.props.navigation.navigate('RegisterRT')}>
                            <Left>
                                <Text> Register </Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem button onPress={() => this.props.navigation.navigate('ContactRT')}>
                            <Left>
                                <Text> Contact </Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem button onPress={() => this.props.navigation.navigate('QuizRT')}>
                            <Left>
                                <Text> Quiz </Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem button onPress={() => this.props.navigation.navigate('AboutRT')}>
                            <Left>
                                <Text> About </Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
