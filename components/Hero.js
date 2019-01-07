import React from 'react';
import { Image } from 'react-native';
import { Text, Content } from 'native-base';

export class Hero extends React.Component {
    render() {
        return(
            <Content>
                <Image style={{ width: 'auto', height: 350 }} source={ require('./../assets/images/laptop2.jpg') }/>
                <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', margin: 30, flexDirection: 'row', borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: 5 }}> Welcome in my App </Text>
                <Text style={{ textAlign: 'center', color: 'white', margin: 10, flexDirection: 'row'}}> Created by Vins </Text>                 
            </Content>
        );
    }
}
