import { useState, useRef} from 'react'
import {
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    StatusBar, 
    Platform, 
    FlatList,
    Dimensions} from 'react-native'

import  { FeedItem } from '../../components/FeedItem'

const {height: heightScreen} = Dimensions.get ("screen")

export function Home (){

    let feeditems = [
        {
            id:'1',
            video:'https://imgur.com/sjVofdD.mp4',   
            name: '@basketbirds',
            description: 'Mais um dia normal com a rapaziada'
        },
        {
             id:'2',
             video:'https://imgur.com/asvbkXE.mp4',
             name: '@batandcat',
             description: 'Elas sempre fazem o que querem!'
        },
        {
             id:'3',
             video:'https://imgur.com/cX5ClKT.mp4',
             name: '@smallzilla',
            description: 'Sinta a minha fúria!'
        }
    ]

    const[showItem, setShowItem] = useState (feeditems[0])
    const onViewRef = useRef(({viewableItems}) => {
        if(viewableItems && viewableItems.lenght > 0){
            setShowItem(feeditems[viewableItems[0].index])
        }
    })

    return(
        <View style={styles.container}>
           
           <View style={styles.labels}>
                <TouchableOpacity>
                    <Text style={[styles.labelText, {color: "#DDD"} ]}>A seguir</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={[styles.labelText, {color: "#FFF"}]}>Para Ti</Text>
                    <View style={styles.indicator}></View>
                </TouchableOpacity>
            </View>

            <FlatList style={styles.teste}
                data={feeditems}
                renderItem={({item})=><FeedItem data={item} currentVisibleItem={showItem}/>  }
                onViewableItemsChanged={onViewRef.current}
                snapToAlignment='center'
                snapToInterval={heightScreen}
                scrollEventThrottle={300}
                decelerationRate={"fast"}
                viewabilityConfig={{
                    waitForInteraction: false,
                    viewAreaCoveragePercentThreshold:100
                }}
            />
                    
        </View>
        
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#000"
    },
    labels:{
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
       gap: 8, 
       position: 'absolute',
       top:6,
       left: 0,
       right: 0,
       marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 55,
       zIndex:99
    },
    labelText:{
        fontSize:16,
        fontWeight: '500',
        marginBottom: 2
    },
    indicator:{
        backgroundColor:"#FFF",
        width: 32,
        height: 2,
        alignSelf: 'center'
    },
    teste:{
        width:'100%',
        height: heightScreen

    }

})