import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'


export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 70,
        textAlignVertical: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral',
        elevation: 20
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

