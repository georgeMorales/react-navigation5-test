import 'react-native-gesture-handler';
import React from 'react';
import { Platform, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LoginScreen from '../../features/auth/login/LoginScreen'
import LoadingScreen from '../../features/loading/LoadingScreen'
import ProfileScreen from '../../features/profile/ProfileScreen'
import GameScreen from '../../features/game/GameScreen'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator();

const TabNav = () => (
    <Tab.Navigator
        initialLayout={{width: Dimensions.get('window').width }}
        initialRouteName="ProfileScreen" 
        lazy={true}
        removeClippedSubviews={Platform.OS = 'ios' ? false : true} //nuevo
        //swipeVelocityImpact={0}
        swipeEnabled={true}
        screenOptions={{
            
        }}
        tabBarOptions={{
            showIcon: true,
            showLabel: false,
            activeTintColor: "grey",
            inactiveTintColor: 'lightgrey',
            indicatorStyle: { backgroundColor: 'grey'},
            //indicatorStyle: { backgroundColor: colors.primary, paddingVertical: 0, width: wp('5%')},
            
            //pressColor: colors.backgroundPrimary,
            pressOpacity: 1,
            
            tabStyle: {
                
                //borderWidth: 1,
                
                //backgroundColor: 'grey',
                backgroundColor: '#f9f7f7',
                width: wp('50%'),
                //width: 73
                height: Platform.OS === 'ios' ? hp('9%') : hp('12%'),
                //
            },
            iconStyle: {
                width: wp('50%'),
                alignItems: 'center',
                marginTop: hp(5),
                justifyContent: 'center',
                //backgroundColor: 'yellow',
                height: Platform.OS === 'ios' ? hp('9%') : hp(12),
                // //height: hp('5%')
                //height: Platform.OS === 'ios' ? hp('7%') : hp('5%'),
            },
            style: {
                elevation: 0,
                
            }
            
        }}

    >   
        
        <Tab.Screen 
            name="ProfileScreen" 
            component={ProfileScreen} 
            options={{
                tabBarIcon: ({color}) => (
                  <FontAwesome5 name='user' solid  size={20} color={color} />
                ),
            }}
        />

        <Tab.Screen 
            name="GameScreen" 
            component={GameScreen} 
            options={{
                tabBarIcon: ({color}) => (
                  <FontAwesome5 name='dice' solid  size={20} color={color} />
                ),
            }}
        />
        
        
        
        
    </Tab.Navigator>
)

const Stack = createStackNavigator();
const RootNav = () => {
  return (
      <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LoginScreen"
                screenOptions={{
                    headerTintColor: 'grey',
                    headerStyle: { 
                        elevation: 0,
                        backgroundColor: '#f9f7f7'
                    },
                }}
            >
                <Stack.Screen 
                    name="LoginScreen" 
                    component={LoginScreen} 
                    options={{
                        //headerMode: 'none'
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="LoadingScreen" 
                    component={LoadingScreen} 
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen 
                    name="TabNav" 
                    component={TabNav} 
                    options={{
                        headerShown: false
                    }}
                />
                {/* <Stack.Screen 
                    name="Welcome" 
                    component={Welcome} 
                    options={{
                        headerShown: false
                    }}
                />
                
                <Stack.Screen 
                    name="ProfileSettings" 
                    component={ProfileSettings} 
                    options={{
                        elevation: 0,
                        title: `${t("ProfileSettings:titleScreen")}`
                    }}
                />
                <Stack.Screen 
                    name="UserProfile" 
                    component={UserProfile} 
                    options={{
                        elevation: 0,
                        title:`${t("UserProfile:titleScreen")}`
                    }}
                /> */}
                
                
                

          </Stack.Navigator>
          
      </NavigationContainer>
  )
}

export default RootNav;