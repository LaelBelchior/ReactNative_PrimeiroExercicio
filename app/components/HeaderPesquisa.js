import React from 'react';
import {StyleSheet, TextInput, Image, View} from 'react-native'

import Search from '../assets/images/search.png'

export default function HeaderSearch(){
    return<>
        <View style={styles.container}>
            <View style={styles.input}>
                <Image source={Search} style={styles.image}/>
                <TextInput style={styles.text}>Pesquisar</TextInput>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#4FC3F7",
        width:360,
        height:72,
        padding:16,
    },
    input:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:30
    },
    text:{
        width:328,
        height:40,
        paddingStart:10,
        color:"#838383",
        fontSize:16,
        lineHeight:24,
        fontStyle:"normal",
    },
    image:{
        width:16,
        height:16,
        alignSelf:'center',
        marginHorizontal:15
    }
})