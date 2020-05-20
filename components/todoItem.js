import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>


            <View style={styles.itemView}>
                <Icon
                    name='delete'
                    color='coral' />
                <Text style={styles.item}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        marginLeft: 10,
        fontSize: 18
    },
    itemView: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dotted',
    }
})