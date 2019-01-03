import React from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { Spinner } from 'native-base';

export class VideoScreen extends React.Component {
    static NavigationOptions = { 
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            listLoaded: false,
            videoList: []
        };
    }

    componentDidMount() {
        return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&maxResults=25&key=AIzaSyAjBgG9c_Ibuv7zQ8jRN48hUau0FYVZc0M')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    listLoaded: true,
                    videoList: Array.from(responseJson.items)
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>

                { this.state.listLoaded && (
                    <View style={{ paddingTop: 30 }}>
                        <FlatList 
                            data={ this.state.videoList }
                            renderItem={({item}) => 
                                <TubeItem 
                                    navigate = {navigate}
                                    id = {item.id.videoId}
                                    title = {item.snippet.title}
                                    imageSrc = {item.snippet.thumbnails.high.url}
                                />
                            }
                        />
                    </View>
                )}

                { !this.state.listLoaded && (
                    <View style={{ paddingTop: 250, alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, color: '#00C200' }}> LOADING </Text>
                        <Spinner />
                    </View>
                )}

            </View>
        );
    }

}

export class TubeItem extends React.Component {
    onPress = () => {
        this.props.navigate('VideoDetailRT', {youTubeID: this.props.id} );
    };

    render() {
        return(
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={{ padding: 20, alignItems: 'center' }}>
                    <Image 
                        style={{ width: '100%', height: 200 }}
                        source={{ uri: this.props.imageSrc }}
                    />
                    <Text style={{ backgroundColor: '#35605a', color:'#ffffff', padding: 10, width: '100%' }}>
                        { this.props.title }
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}