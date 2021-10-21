import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native'

import arrowBack from '../assets/images/arrow_back.png'

export default function HeaderHospital(){
    return<>
        <View style={styles.container}>
            <View style={styles.view}>
                <Image source={arrowBack} style={styles.image}/>
                <Text style={styles.text}>Hospital</Text>
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
        flexDirection:"column",
        justifyContent:'center'
    },
    view:{
        flexDirection:"row",
        alignItems:'center'        
    },
    text:{
        width:"100%",
        height:24,
        paddingStart:10,
        color:"#FFF",
        fontSize:24,
        lineHeight:24,
        fontFamily:"RobotoBold",
        fontWeight:"700"
    },
    image:{
        width:18,
        height:18
    }
})