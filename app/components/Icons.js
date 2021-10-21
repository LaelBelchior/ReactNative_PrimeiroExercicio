import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import Favorito from '../assets/images/favorite.png'
import Mapa from '../assets/images/map.png'


export default function Icons(){
    return<>
        <View style={styles.container}>
            <Image source={Favorito} style={styles.image} />
            <Image source={Mapa} style={styles.image} />
        </View>
    </>
}

const styles = StyleSheet.create({
    container:{
        width:64,
        height:24,
        paddingTop:5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    image:{
        width:20,
        height:18,
    }   
})