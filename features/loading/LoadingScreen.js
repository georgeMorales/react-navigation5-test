import React, {useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function LoadingScreen({navigation}) {

    //returns the correct value
    console.log('Platform.OS Loading screen', Platform.OS === 'android')
    console.log(Platform.OS)

    useEffect(() => {
        if (true) {
            navigation.navigate('LoginScreen')
        }
        return () => {
            console.log('unmount LoadingScreen')
        }
    }, [])


    return (
        <View style={styles.container}>
            <Text>Loading</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
