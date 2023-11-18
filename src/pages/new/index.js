import {View, StyleSheet, Text} from 'react-native'

export function New (){
    return(
        <View style={styles.container}>
            <Text>
                Página Cadastro de novo vídeo
            </Text>
        </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})