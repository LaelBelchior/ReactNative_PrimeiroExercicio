import React from 'react'
import { View, StyleSheet, Dimensions } from "react-native"

import HeaderNear from '../../components/HeaderNear'
import CardPopUp from '../../components/CardPopUp'

export default function Map(){
    return<>
        <View style={styles.container}>
            <HeaderNear />
            <CardPopUp />
        </View>
    </>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flexDirection:'column',
        alignItems:"center"
    }})