import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Alert, Platform, Pressable } from 'react-native'

export default function ProfileScreen({navigation}) {
    //always return false
    console.log('Platform.OS Profile screen', Platform.OS === 'android')
    console.log(Platform.OS)
    
    //alert does not work
    const renderAlert = () => {
        console.log('renderAlert')
        Alert.alert('Profile')
    }
    useEffect(() => {
        //useEfect
    }, [])


    return (
        <View style={styles.container}>
            <Text>alert does not work</Text>
            <Pressable 
                onPress={() => renderAlert()}
                style={styles.button}
            >
                <Text>Alert</Text>
            </Pressable>

            <Pressable 
                onPress={() => navigation.navigate('LoginScreen')}
                style={styles.button}
            >
                <Text>Logout</Text>
            </Pressable>
            
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
