import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native'

const LoginScreen = ({navigation}) => {

    //returns the correct value
    useEffect(() => {
        console.log('Platform.OS Login screen', Platform.OS === 'android')
        console.log(Platform.OS)
        
        return () => {
           
        }
    }, [])
    
    return (
        <View style={styles.container}>

            <Pressable 
                onPress={() => navigation.navigate('TabNav')}
                style={styles.button}
            >
                <Text>Login</Text>
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

export default LoginScreen;
