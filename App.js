import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex           : 1,
        backgroundColor: '#fff',
        alignItems     : 'center',
        justifyContent : 'center',
    },
    sizeSmall : {
        flex: 1,
        backgroundColor: 'steelblue'
    },
    sizeMiddle: {
        flex: 2,
        backgroundColor: 'skyblue'
    },
    sizeLarge : {
        flex: 3,
        backgroundColor: 'powderblue'
    }
});

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <Text>Too hard!!</Text>
                </View>
                <View style={{flex: 4}}>
                    <View style={styles.sizeSmall}/>
                    <View style={styles.sizeMiddle}/>
                    <View style={styles.sizeLarge}/>
                </View>
            </View>
        );
    }
}