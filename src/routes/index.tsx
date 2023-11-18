//Aqui temos a configuração do nosso react navigation

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../pages/home'
import { Inbox } from '../pages/inbox'
import { New } from '../pages/new'
import { Profile } from '../pages/profile'
import { Search } from '../pages/search'


import { Ionicons } from '@expo/vector-icons'
import {ButtonNew} from '../components/ButtonNew'

//Aqui instanciamos a nossa tab

const Tab = createBottomTabNavigator()

export function Routes () {
    return (
        
       <Tab.Navigator
            ScreenOptions={{
                headerShown: false   //O texto fica embaixo da statusBar
                // tabBarShowLabel: false,

                // tabBarStyle:{
                //     backgroundColor: "#000",
                //     borderTopwidth:0,
                //},

                //tabBarActiveTintColor: "#FFF",
            }}
       >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) {
                            return <Ionicons name="home" size={size} color={color}/>
                        } 
                        return <Ionicons name="home-outline" size={size} color={color}/>
                    }
                }}
            />
            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) {
                            return <Ionicons name="search" size={size} color={color}/>
                        } 
                        return <Ionicons name="search-outline" size={size} color={color}/>
                    }
                }}
            />
            <Tab.Screen
                name='New'
                component={New}
                options={{
                    tabBarIcon: ({ size }) => {
                       return <ButtonNew  color='#FFF' size={size}/> 
                    }
                }}
                
            />
            <Tab.Screen
                name='Inbox'
                component={Inbox}
                options={{
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) {
                            return <Ionicons name="ios-chatbubble-ellipses" size={size} color={color}/>
                        } 
                        return <Ionicons name="ios-chatbubble-ellipses-outline" size={size} color={color}/>
                    }
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) {
                            return <Ionicons name="person" size={size} color={color}/>
                        } 
                        return <Ionicons name="person-outline" size={size} color={color}/>
                    }
                }}
            />
       </Tab.Navigator> 
    )
}