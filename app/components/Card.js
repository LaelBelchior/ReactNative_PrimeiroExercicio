import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


import ButtonStatus from './ButtonStatus'
import Icons from './Icons'

export default function Card(){
    return<>
        <View style={styles.card}>
            <View style={styles.texts}>
                <Text style={styles.title}>UFRJ Instituto de Ginecologia</Text>
                <Text style={styles.subtitle}>Rua Moncorvo Filho, 90</Text>
            </View>
            <View style={styles.icons}>
               <ButtonStatus />
               <Icons />
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    card:{
        paddingHorizontal:15,
        margin:5,
        width:328,
        height:108,
        borderRadius:10,
        backgroundColor:"#F5F5F5",
        elevation:15,
        flexDirection:"column",
        justifyContent:"space-around"
    },
    texts:{
        flexDirection:"column",
        height:52
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
    icons:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        height:24
    }
})