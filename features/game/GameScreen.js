import React from 'react'
import { View, Text, StyleSheet, Pressable, Alert, Platform } from 'react-native'
import PickerDateTime from '../../app/commons/PickerDateTime'

export default function GameScreen() {

    console.log('Platform.OS Game screen', Platform.OS === 'android')
    console.log(Platform.OS)

    const renderAlert = () => {
        console.log('renderAlert')
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.container}>
            <Text>alert does not work</Text>
            <Pressable 
                onPress={() => renderAlert()}
                style={styles.button}
            >
                <Text>Alert</Text>
            </Pressable>
           
            <PickerDateTime />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        width: '21%', 
        height: '6%',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
