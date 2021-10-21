import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Active from '../assets/images/active.png'
import UFRJ from '../assets/images/ufrj.png'
import Icons from './Icons'

export default function CardPopUp(){
    return <>
        <View style={styles.card}>
            <View style={styles.texts}>
                <Text style={styles.title}>UFRJ Instituto de Ginecologia</Text>
                <Text style={styles.subtitle}>Rua Moncorvo Filho, 90</Text>
            </View>
            <Image source={UFRJ} style={styles.image}/>
            <View style={styles.icons}>
               <Image source={Active}/>
               <Icons />
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    card:{
        width:328,
        height:310,
        borderRadius:10,
        backgroundColor:"#F5F5F5",
        elevation:15,
        flexDirection:"column",
        justifyContent:"space-around"
    },
    texts:{
        flexDirection:"column",
        height:52,
        paddingStart:10,
        paddingTop:5
    },
    title:{
        fontFamily:"RobotoBold",
        fontSize:20,
        lineHeight:24,
        marginBottom:4
    },
    subtitle:{
        fontFamily:"Roboto300",
        fontSize:16,
        lineHeight:20,
        color:"#575757"
    },
    image:{
        width:328,
        height:194
    },
    icons:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        height:24,
        paddingStart:10,
        paddingEnd:5,
        paddingBottom:6
    }
})