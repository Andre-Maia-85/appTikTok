import {View, StyleSheet, Text, StatusBar, TextInput, Button} from 'react-native'
import { Home } from '../home'

export function Profile (){
    return(
        <View style={styles.container}>
            <View style={[
                    styles.info,
                    {
                        top:50
                    }
                ]}>            
                <Text>
                    <Text style={[styles.labelText, {color: "#DDD"} ]}>Google</Text>
                </Text>
                
                <Text>
                    <Text style={[styles.labelText, {color: "#DDD"} ]}>Fazer login</Text>
                </Text>
                
                <Text>
                    <Text style={[styles.labelText2, {color: "#DDD"} ]}>Use sua Conta do Google. <Text style={{color:'#98b3e1'}}>Saiba mais</Text></Text>
                </Text>                             
            </View>

            <View style={styles.input2}>
                    <TextInput style={styles.input} placeholder='E-mail ou telefone'/>
                    <TextInput style={styles.input} placeholder='Senha'/>
            </View>

            <View style={styles.buttonPosition}>
                <Button
                    onPress={Home}
                    title="Entrar"
                    color="#98b3e1"                
                />
            </View>
        </View>
        )
}


    const styles = StyleSheet.create ({
        container:{
            flex:1,
            backgroundColor: "#000"
        },
        input:{
            borderWidth:1,
            borderColor:'#777',
            padding:8,           
            width:'80%',
            position:'relative',
        },
        input2:{
            position:'relative',
            top:'30%',           
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            gap: 10

            
        },
            
           

        labelText:{
            fontSize:20,
            fontWeight: '500',
            marginBottom: 2
        }, 
        labelText2:{
            fontSize:14,
            fontWeight: '500',
            marginBottom: 2
        },  
        info:{
            position:'absolute',
            zIndex: 99,
            left: 8,
            padding: 8,
            alignItems: 'center',
            justifyContent: 'center',
            top:50,           
            right: 0,
            gap: 8,    
        },
        buttonText:{
            fontSize:14,
            fontWeight: '500',
            marginBottom: 2
            
        },
        buttonPosition:{
            position:'relative',
            top:'50%',           
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
           
        }
})