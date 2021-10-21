import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

export default function HeaderNear(){
    return<>
        <View style={styles.container}>    
            <Text style={styles.text}>Hospitais Próximos</Text>        
        </View>
    </>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#4FC3F7",
        width:360,
        height:56,
        padding:16,
        flexDirection:"column",
        justifyContent:'center'
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
})