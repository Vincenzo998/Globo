import React from 'react';
import { Text, View, WebView } from 'react-native';

export class VideoDetailScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let tubeID = this.props.navigation.getParam('youTubeID', 'NO VIDEO');
        let tubeUrl = `https://www.youtube.com/embed/${tubeID}`;
        return(
            <WebView 
                style = {{marginTop: 20}}
                javaScriptEnabled={true}
                source={{uri: tubeUrl}}
            />
        );
    }
}