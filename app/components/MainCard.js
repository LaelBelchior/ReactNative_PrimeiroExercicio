import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

import Icons from '../components/Icons'
import UFRJ from '../assets/images/ufrj.png'
import { color } from 'react-native-reanimated'

export default function MainCard(){
    return<>
        <View style={styles.container}>
            <Text style={styles.title}>UFRJ Instituto de Ginecologia</Text>
            <Text style={styles.label}>ENDEREÇO:</Text>
            <Text style={styles.text}>Rua Moncorvo Filho, 90</Text>
            <View style={styles.containerTexts}>    
                <Image source={UFRJ} style={styles.image}/>
                <Text style={styles.label}>CEP:</Text>
                <Text style={styles.text}>20211340</Text>
                <Text style={styles.label}>TELEFONE:</Text>
                <Text style={styles.text}>(21)22322970</Text>
                <Text style={styles.label}>HORÁRIO DE FUNCIONAMENTO:</Text>
                <Text style={styles.text}>XXX</Text>
            </View>
            <View style={styles.containerIcons}>
                <Icons />
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container:{
        margin:20,
        width:328,
        height:522,
        backgroundColor:"#F5F5F5",
        borderRadius:15,
        elevation:15,
        flexDirection:'column',
    },
    title:{
        width:270,
        fontSize:20,
        fontFamily:'RobotoBold',
        marginVertical:20,
        marginStart:15,
        textShadowColor: 'rgba(0, 0, 0, 0.50)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    image:{
        width:328,
        height:186,
        marginBottom:15
    },
    containerTexts:{

    },
    text:{
        fontSize:16,
        fontFamily:"Roboto300",
        borderBottomColor:"#A9A9A9",
        borderBottomWidth:1,
        width:195,
        marginStart:15,
        marginBottom:15,
        color:"#3C3844"
    },
    label:{
        width:200,
        fontSize:10,
        marginStart:15,
        color:"#3C3844"
    },
    containerIcons:{
        height:24,
        flexDirection:'row',
        justifyContent:"flex-end",
        marginVertical:10,
        marginEnd:13
    }
})