import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    toggleUser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn };
        }); 
    }

    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image style={styles.logoStyle} source={ require('./../assets/images/Globo_logo_REV.png') }/>
                <Text style={styles.headText} onPress={this.toggleUser}> {display} </Text>                
            </View>
        );
    }

}

const styles = StyleSheet.create({
  headStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    backgroundColor: '#35605a',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#000000'
  },
  headText: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 20,
    flex: 1
  },
  logoStyle: {
      flex: 1,
      width: 'auto',
      height: 'auto',
  }
});