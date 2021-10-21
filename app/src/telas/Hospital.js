import React from 'react';

import HeaderSearch from "../../components/HeaderPesquisa"
import MainCard from "../../components/MainCard"

import { View, StyleSheet } from "react-native"

export default function Hospital(){
    return<>
        <View style={styles.container}>
            <HeaderSearch/>
            <MainCard />
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