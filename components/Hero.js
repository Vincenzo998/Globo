import React from 'react';
import { StyleSheet, Image } from 'react-native';

export class Hero extends React.Component {
    render() {
        return(
            <Image style={styles.heroImage} source={ require('./../assets/images/laptop2.jpg') }/> 
        );
    }
}

const styles = StyleSheet.create({
    heroImage: {
        width: 'auto',
        height: 'auto',
        flex: 8
    }
});