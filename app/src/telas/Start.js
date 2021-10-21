import React from 'react';

import HeaderNear from "../../components/HeaderNear"
import Card from "../../components/Card"

import { View, StyleSheet } from "react-native"

export default function HomeScreen(){
    return<>
        <View style={styles.container}>
            <HeaderNear />
            <Card/>
        </View>
    </>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flexDirection:'column',
        alignItems:"center"
      }
})